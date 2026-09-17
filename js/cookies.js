// cookies.js — Gemelli Seguros
// Controla o aviso de cookies/LGPD: mostra o banner na primeira visita,
// salva a escolha do visitante e permite reabrir pelo link "Gerenciar
// cookies" no rodapé.

(function () {
    var CHAVE_CONSENTIMENTO = 'gemelliCookieConsent';

    function lerConsentimento() {
        try {
            return JSON.parse(localStorage.getItem(CHAVE_CONSENTIMENTO));
        } catch (e) {
            return null;
        }
    }

    function salvarConsentimento(tipo) {
        try {
            localStorage.setItem(CHAVE_CONSENTIMENTO, JSON.stringify({
                tipo: tipo, // 'todos' ou 'essenciais'
                data: new Date().toISOString()
            }));
        } catch (e) {
            // Se o navegador bloquear localStorage (ex.: modo privado),
            // apenas não repetimos o aviso nesta sessão.
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        var banner = document.getElementById('cookie-banner');
        if (!banner) return;

        var btnAceitar = document.getElementById('cookie-aceitar');
        var btnRecusar = document.getElementById('cookie-recusar');
        var whatsApp = document.querySelector('.whats-flutuante');

        // Empurra o ícone do WhatsApp para cima da barra de cookies,
        // usando a altura real da barra (ela muda de tamanho em
        // telas pequenas, onde o texto e os botões quebram linha)
        function ajustarBotaoWhats() {
            if (!whatsApp) return;
            if (banner.classList.contains('visivel')) {
                var alturaBanner = banner.offsetHeight;
                whatsApp.style.bottom = (alturaBanner + 20) + 'px';
            } else {
                whatsApp.style.bottom = '';
            }
        }

        function mostrar() {
            banner.classList.add('visivel');
            // Aguarda o navegador aplicar a transição/quebra de linha
            // antes de medir a altura real da barra
            requestAnimationFrame(ajustarBotaoWhats);
        }

        function esconder() {
            banner.classList.remove('visivel');
            ajustarBotaoWhats();
        }

        // Se o visitante girar a tela ou redimensionar a janela com o
        // aviso aberto, recalcula a posição do botão do WhatsApp
        window.addEventListener('resize', function () {
            if (banner.classList.contains('visivel')) {
                ajustarBotaoWhats();
            }
        });

        // Só mostra o banner se o visitante ainda não escolheu uma opção
        if (!lerConsentimento()) {
            mostrar();
        }

        if (btnAceitar) {
            btnAceitar.addEventListener('click', function () {
                salvarConsentimento('todos');
                esconder();
            });
        }

        if (btnRecusar) {
            btnRecusar.addEventListener('click', function () {
                salvarConsentimento('essenciais');
                esconder();
            });
        }

        // Qualquer link com data-abrir-cookies (ex.: "Gerenciar cookies"
        // no rodapé) reabre o banner para o visitante trocar de opção
        document.querySelectorAll('[data-abrir-cookies]').forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                mostrar();
            });
        });
    });
})();
