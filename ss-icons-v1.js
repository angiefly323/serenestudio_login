/* Serene Studio line icons v1 — status icons + payment block. 2026-11-11 */
(function(){
var SPRITE='<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="ss-pending" viewBox="0 0 24 24"><path d="M7 3.4c3.3-.2 6.7-.2 10 0M7 20.6c3.3.2 6.7.2 10 0"/><path d="M8 3.6c-.2 3.6 1.6 6 4 8.4 2.4-2.4 4.2-4.8 4-8.4M8 20.4c-.2-3.6 1.6-6 4-8.4 2.4 2.4 4.2 4.8 4 8.4"/><path d="M10 18.6c1.3-1 2.7-1 4 0"/></symbol><symbol id="ss-ordered" viewBox="0 0 24 24"><path d="M6 5.2c-1 .1-1.6.7-1.6 1.7-.2 4.5-.2 9 0 13.4 0 1 .6 1.6 1.6 1.6 4 .2 8 .2 12 0 1 0 1.6-.6 1.6-1.6.2-4.4.2-8.9 0-13.4 0-1-.6-1.6-1.6-1.7"/><path d="M9 3.6c2-.2 4-.2 6 0 .2.9.2 1.8 0 2.6-2 .2-4 .2-6 0-.2-.8-.2-1.7 0-2.6z"/><path d="M8.6 13.6l2.4 2.4 4.6-5"/></symbol><symbol id="ss-parcel" viewBox="0 0 24 24"><path d="M4 7.6 12 3.6l8 4c.2 3.6.2 7.2 0 10.8l-8 4-8-4c-.2-3.6-.2-7.2 0-10.8z"/><path d="M4.2 7.7 12 11.6l7.8-3.9M12 11.7v10.6"/></symbol><symbol id="ss-transit" viewBox="0 0 24 24"><path d="M6 6.4c2.7-.2 5.3-.2 8 0 .2 3.4.2 6.8 0 10.2H9.8"/><path d="M14.1 9.4c1.6-.1 3.2-.1 4.7.1l2.4 3.3c.1 1.3.1 2.6 0 3.8h-2"/><circle cx="8" cy="17.6" r="1.7"/><circle cx="17.4" cy="17.6" r="1.7"/><path d="M2.6 9.4h3.2M3.4 12.6h3"/></symbol><symbol id="ss-shipped" viewBox="0 0 24 24"><path d="M20.6 3.6 3.4 10.6c-.8.3-.8 1.2 0 1.6l6.2 2.6 2.6 6.2c.3.8 1.3.8 1.6 0z"/><path d="M9.8 14.6 20.4 3.8"/></symbol><symbol id="ss-received" viewBox="0 0 24 24"><path d="M3.6 11 12 4.2l8.4 6.8"/><path d="M5.6 9.8c-.2 3.6-.2 7.2 0 10.8 4.3.2 8.5.2 12.8 0 .2-3.6.2-7.2 0-10.8"/><path d="M9 15l2.2 2.2 4-4.4"/></symbol><symbol id="ss-store" viewBox="0 0 24 24"><path d="M3.4 9c.4-1.9.9-3.6 1.6-5.2 4.7-.2 9.3-.2 14 0 .7 1.6 1.2 3.3 1.6 5.2-.2 1.4-1.4 2.3-2.8 2.3-1.3 0-2.4-.8-2.8-2-.4 1.2-1.6 2-3 2s-2.6-.8-3-2c-.4 1.2-1.5 2-2.8 2-1.4 0-2.6-.9-2.8-2.3z"/><path d="M5 11.6c-.2 3-.2 6 0 9 4.7.2 9.3.2 14 0 .2-3 .2-6 0-9"/><path d="M10 20.6c-.1-1.9-.1-3.7 0-5.5 1.3-.1 2.7-.1 4 0 .1 1.8.1 3.6 0 5.5"/></symbol><symbol id="ss-limited" viewBox="0 0 24 24"><path d="M12 3.6c4.7-.1 8.5 3.6 8.4 8.4 0 4.7-3.8 8.5-8.5 8.4-4.6 0-8.3-3.8-8.3-8.4.1-4.7 3.8-8.3 8.4-8.4z"/><path d="M12 7.4v4.8l3.2 2"/></symbol><symbol id="ss-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.4"/><path d="M12 11v5.6"/><path d="M12 7.6h.1" stroke-width="2.4"/></symbol><symbol id="ss-fps" viewBox="0 0 24 24"><path d="M7.2 2.8c3.2-.2 6.4-.2 9.6 0 .3 6.1.3 12.3 0 18.4-3.2.2-6.4.2-9.6 0-.3-6.1-.3-12.3 0-18.4z"/><path d="M12.8 6.8 10 12.2h4l-2.8 5"/></symbol><symbol id="ss-wallet" viewBox="0 0 24 24"><path d="M3.6 7c5.5-.4 11.1-.4 16.6 0 .2 3.9.2 7.8 0 11.6-5.5.4-11.1.4-16.6 0-.2-3.8-.2-7.7 0-11.6z"/><path d="M4 7c3.6-1.6 7.6-2.8 11.6-3.4l.8 3.2"/><path d="M15.4 11.4c1.6-.1 3.2-.1 4.8 0 .1 1 .1 2 0 3-1.6.1-3.2.1-4.8 0-.1-1-.1-2 0-3z"/></symbol><symbol id="ss-bank" viewBox="0 0 24 24"><path d="M3.4 9 12 4l8.6 5c-5.7.2-11.5.2-17.2 0z"/><path d="M5.6 11.4v6.2M9.8 11.4v6.2M14.2 11.4v6.2M18.4 11.4v6.2"/><path d="M3.4 20.2c5.7.2 11.5.2 17.2 0"/></symbol></svg>';
var CSS='.ss-ico{width:16px;height:16px;flex:none;vertical-align:-3px;margin-right:6px;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}'+
'.badge,.status-tag{display:inline-flex;align-items:center}'+
'.ss-pay{margin:32px 0 8px;padding:24px;border:1px solid #E6DCDB;background:#FAF7F6;color:#1E1415}'+
'.ss-pay-k{font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:#743133;font-weight:700}'+
'.ss-pay h3{margin:6px 0 16px;font-size:20px}'+
'.ss-pay-list{display:grid;grid-template-columns:1fr;gap:12px}'+
'@media(min-width:600px){.ss-pay-list{grid-template-columns:repeat(3,1fr)}}'+
'.ss-pay-item{display:flex;align-items:center;gap:12px;padding:14px 16px;background:#fff;border:1px solid #E6DCDB}'+
'.ss-pay-item svg{width:32px;height:32px;flex:none;fill:none;stroke:#743133;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}'+
'.ss-pay-item b{display:block;font-size:15px}.ss-pay-item small{display:block;font-size:12px;color:#7D6E6F}'+
'.ss-pay-note{margin-top:14px;font-size:13px;line-height:1.6;color:#7D6E6F}';
var RULES=[[/待支付|待付|未付/,'pending'],[/出貨|待賣家/,'limited'],[/自取/,'store'],[/簽收|完成/,'received'],[/已寄出|寄回港|已安排/,'shipped'],[/途中|運送|寄往/,'transit'],[/到倉|已到/,'parcel'],[/已付款|確認|已落單/,'ordered']];
function ico(n,c){return '<svg class="'+(c||'ss-ico')+'" aria-hidden="true"><use href="#ss-'+n+'"/></svg>';}
function pick(t){for(var i=0;i<RULES.length;i++){if(RULES[i][0].test(t))return RULES[i][1];}return 'info';}
function labelText(el){var c=el.cloneNode(true);var tb=c.querySelectorAll('.tooltip-box');for(var i=0;i<tb.length;i++)tb[i].remove();return c.textContent||'';}
function decorate(el){
  if(el.getAttribute('data-ss')==='1')return; el.setAttribute('data-ss','1');
  var kids=el.children;for(var i=kids.length-1;i>=0;i--){var k=kids[i];if(k.tagName==='I'&&/\bfa-/.test(k.className))k.remove();}
  el.insertAdjacentHTML('afterbegin',ico(pick(labelText(el))));
}
function scan(root){if(!root.querySelectorAll)return;var els=root.querySelectorAll('.badge,.status-tag');for(var i=0;i<els.length;i++)decorate(els[i]);}
function useEn(){var r=document.querySelector('[data-zh][data-en]:not(.ss-pay *)');return r&&r.textContent.trim()===r.getAttribute('data-en').trim()&&r.getAttribute('data-en')!==r.getAttribute('data-zh');}
function t(zh,en,en1){return ' data-zh="'+zh+'" data-en="'+en+'">'+(en1?en:zh);}
function payBlock(box){
  if(box.getAttribute('data-ss')==='1')return; box.setAttribute('data-ss','1'); var e=useEn();
  box.innerHTML='<div class="ss-pay"><div class="ss-pay-k">Payment</div><h3'+t('付款方式','Payment Methods',e)+'</h3><div class="ss-pay-list">'+
  '<div class="ss-pay-item">'+ico('fps','')+'<div><b'+t('FPS 轉數快','FPS',e)+'</b><small'+t('即時到賬','Instant transfer',e)+'</small></div></div>'+
  '<div class="ss-pay-item">'+ico('wallet','')+'<div><b>PayMe</b><small'+t('HSBC PayMe 電子錢包','HSBC PayMe e-wallet',e)+'</small></div></div>'+
  '<div class="ss-pay-item">'+ico('bank','')+'<div><b'+t('銀行轉賬','Bank Transfer',e)+'</b><small'+t('網上銀行／ATM','Online banking / ATM',e)+'</small></div></div>'+
  '</div><p class="ss-pay-note"'+t('收款帳號會喺報價後經 WhatsApp 私下提供；付款後請 WhatsApp 傳送入數紙，並註明訂單或集運單號。','Payment account details are sent privately on WhatsApp with your quote. After paying, please WhatsApp us the receipt with your order or shipment number.',e)+'</p></div>';
}
function init(){
  if(!document.getElementById('ss-icons-sprite')){var d=document.createElement('div');d.id='ss-icons-sprite';d.innerHTML=SPRITE;document.body.insertBefore(d,document.body.firstChild);
    var s=document.createElement('style');s.textContent=CSS;document.head.appendChild(s);}
  scan(document);var boxes=document.querySelectorAll('[data-ss-pay]');for(var i=0;i<boxes.length;i++)payBlock(boxes[i]);
  new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){var a=ms[i].addedNodes;for(var j=0;j<a.length;j++){var n=a[j];if(n.nodeType!==1)continue;if(n.matches&&n.matches('.badge,.status-tag'))decorate(n);scan(n);}}}).observe(document.body,{childList:true,subtree:true});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
