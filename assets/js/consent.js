/* Cookie/tracking consent banner — hirschindex.ru
   152-ФЗ + Y.Metrika disclosure. Shows once per browser (localStorage). */
(function () {
    var KEY = 'hi-consent-v1';
    try { if (localStorage.getItem(KEY)) return; } catch (e) { /* private mode */ }

    var css = '\
#hi-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:10000;\
    background:#0f172a;color:#e2e8f0;border-radius:14px;padding:14px 20px;\
    box-shadow:0 10px 30px rgba(0,0,0,0.25);\
    font-family:"Inter",-apple-system,Segoe UI,Roboto,sans-serif;\
    display:flex;align-items:center;gap:18px;\
    max-width:900px;margin:0 auto;line-height:1.45;font-size:0.9rem;\
    transform:translateY(120%);transition:transform .35s ease}\
#hi-consent.show{transform:translateY(0)}\
#hi-consent p{margin:0;flex:1;color:#e2e8f0}\
#hi-consent a{color:#93c5fd;text-decoration:underline;text-underline-offset:2px}\
#hi-consent a:hover{color:#bfdbfe}\
#hi-consent button{flex-shrink:0;background:#3366CC;color:#fff;border:0;\
    padding:9px 20px;border-radius:8px;font:600 0.9rem "Inter",sans-serif;\
    cursor:pointer;transition:background .2s}\
#hi-consent button:hover{background:#2952a3}\
@media (max-width:560px){\
    #hi-consent{flex-direction:column;align-items:stretch;text-align:center;padding:16px;font-size:0.85rem}\
    #hi-consent button{width:100%}}';

    var style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    var box = document.createElement('div');
    box.id = 'hi-consent';
    box.setAttribute('role', 'region');
    box.setAttribute('aria-label', 'Уведомление об обработке данных');
    box.innerHTML =
        '<p>Мы используем cookies и Яндекс.Метрику для аналитики. Продолжая пользоваться сайтом, вы соглашаетесь с <a href="/privacy/#cookies">Политикой конфиденциальности</a>.</p>' +
        '<button type="button" id="hi-consent-ok">Хорошо</button>';
    document.body.appendChild(box);

    // Animate in on next frame
    requestAnimationFrame(function () { box.classList.add('show'); });

    document.getElementById('hi-consent-ok').addEventListener('click', function () {
        try { localStorage.setItem(KEY, '1'); } catch (e) {}
        box.classList.remove('show');
        setTimeout(function () { if (box.parentNode) box.parentNode.removeChild(box); }, 350);
    });
})();
