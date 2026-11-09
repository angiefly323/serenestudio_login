/*
 * Serene Studio - 共用介面工具 (site-ui.js)
 * 用途：以網站內置提示 (Toast) 取代瀏覽器 alert() 彈窗。
 * - 所有頁面原有的 alert("...") 毋須修改，會自動變成 Toast。
 * - 如果顯示提示後立即跳轉頁面，提示會喺下一頁繼續顯示。
 * - 長訊息 (例如付款指示) 會一直顯示，直至客戶撳「知道了」。
 */
(function () {
    var KEY = 'serene_pending_toast';
    var LONG_MSG = 40; // 超過 40 字當長訊息，唔會自動消失

    function injectStyle() {
        if (document.getElementById('serene-toast-style')) return;
        var css =
            '.serene-toast-wrap{position:fixed;left:16px;right:16px;top:16px;z-index:3000;display:flex;flex-direction:column;align-items:center;gap:8px;pointer-events:none;}' +
            '.serene-toast{pointer-events:auto;max-width:420px;width:100%;background:#2b1213;color:#fff;font-size:14px;line-height:1.5;padding:14px 16px;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.25);display:flex;gap:12px;align-items:flex-start;opacity:0;transform:translateY(-8px);transition:opacity .2s,transform .2s;}' +
            '.serene-toast.show{opacity:1;transform:translateY(0);}' +
            '.serene-toast .msg{flex:1;white-space:pre-line;word-break:break-word;}' +
            '.serene-toast button{background:rgba(255,255,255,.15);color:#fff;border:none;border-radius:8px;padding:6px 10px;font-size:13px;font-weight:600;cursor:pointer;min-height:32px;}';
        var s = document.createElement('style');
        s.id = 'serene-toast-style';
        s.textContent = css;
        document.head.appendChild(s);
    }

    function closeLabel() {
        return localStorage.getItem('serene_lang') === 'en' ? 'OK' : '知道了';
    }

    function render(msg) {
        injectStyle();
        var wrap = document.querySelector('.serene-toast-wrap');
        if (!wrap) {
            wrap = document.createElement('div');
            wrap.className = 'serene-toast-wrap';
            wrap.setAttribute('role', 'status');
            wrap.setAttribute('aria-live', 'polite');
            document.body.appendChild(wrap);
        }
        var t = document.createElement('div');
        t.className = 'serene-toast';
        var m = document.createElement('div');
        m.className = 'msg';
        m.textContent = msg;
        var b = document.createElement('button');
        b.type = 'button';
        b.textContent = closeLabel();
        t.appendChild(m);
        t.appendChild(b);
        wrap.appendChild(t);
        requestAnimationFrame(function () { t.classList.add('show'); });

        // 記低提示，萬一即刻跳頁，下一頁會再顯示
        try { sessionStorage.setItem(KEY, msg); } catch (e) {}

        function remove() {
            try { if (sessionStorage.getItem(KEY) === msg) sessionStorage.removeItem(KEY); } catch (e) {}
            t.classList.remove('show');
            setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 250);
        }
        b.addEventListener('click', remove);
        if (msg.length <= LONG_MSG) setTimeout(remove, 3500);
    }

    function showToast(msg) {
        msg = String(msg == null ? '' : msg);
        if (document.body) render(msg);
        else document.addEventListener('DOMContentLoaded', function () { render(msg); });
    }

    window.showToast = showToast;
    window.alert = showToast;

    // 顯示上一頁未睇完嘅提示
    document.addEventListener('DOMContentLoaded', function () {
        var pending = null;
        try { pending = sessionStorage.getItem(KEY); sessionStorage.removeItem(KEY); } catch (e) {}
        if (pending) render(pending);
    });
})();
