/*
 * Serenestudio 登入通行證 (serene-auth.js) v2 — 2026-11-09
 * 放喺每個會員頁 <head>，要喺頁面其他 script 之前載入。
 * 1. 自動喺所有 Apps Script 請求加上 token（頁面原本嘅 fetch 毋須修改）
 * 2. 後台回覆 AUTH_REQUIRED（逾時）→ 清除登入並返回登入頁
 * 3. 30 分鐘冇操作 → 自動登出
 * 4. 提供 sereneLogoutRemote()：登出時通知後台即時作廢 token
 */
(function () {
  var KEY = 'serene_user', LOGIN_PAGE = 'index.html', DEFAULT_SEC = 1800;
  var API = 'https://script.google.com/macros/s/AKfycbyTpnxEfQ9B2ysDjq-H7C1N_1BqRcEZVL0nPBInlHoYKOFQVTP-QM13pLEq3d3opbdm/exec';

  function getUser() { try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; } }
  function setUser(u) { localStorage.setItem(KEY, JSON.stringify(u)); }
  function touch(u) { u.expiresAt = Date.now() + (Number(u.expiresInSec) || DEFAULT_SEC) * 1000; setUser(u); }
  function kick(msg) {
    localStorage.removeItem(KEY);
    if (msg) alert(msg);
    window.location.href = LOGIN_PAGE;
  }

  // 開頁時檢查（登入頁唔檢查）
  var isLogin = /(^|\/)(index\.html)?$/.test(window.location.pathname);
  if (!isLogin) {
    var u = getUser();
    if (!u) kick();
    else if (!u.token) kick('系統已更新，請重新登入');
    else if (u.expiresAt && Date.now() > u.expiresAt) kick('登入已逾時，請重新登入');
    else touch(u);
  }

  var origFetch = window.fetch ? window.fetch.bind(window) : null;
  if (!origFetch) return;

  window.fetch = function (url, opts) {
    var isApi = typeof url === 'string' && url.indexOf('script.google.com/macros/') !== -1;
    if (!isApi || !opts || typeof opts.body !== 'string') return origFetch(url, opts);
    var body;
    try { body = JSON.parse(opts.body); } catch (e) { return origFetch(url, opts); }
    if (body.action !== 'login') { var cu = getUser(); if (cu && cu.token) body.token = cu.token; }
    var o = {}; for (var k in opts) o[k] = opts[k];
    o.body = JSON.stringify(body);

    return origFetch(url, o).then(function (res) {
      return res.clone().json().then(function (j) {
        if (j && j.code === 'AUTH_REQUIRED') { kick(j.message || '登入已逾時，請重新登入'); }
        else if (j && j.status === 'success' && body.action !== 'login') { var cu2 = getUser(); if (cu2) touch(cu2); }
        return res;
      }, function () { return res; });
    });
  };

  window.sereneLogoutRemote = function () {
    var cu = getUser();
    if (!cu || !cu.token) return;
    try {
      origFetch(API, {
        method: 'POST', mode: 'cors', keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'logout', token: cu.token })
      });
    } catch (e) {}
  };
})();
