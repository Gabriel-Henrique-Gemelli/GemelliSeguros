// carrossel-sobre.js — Gemelli Seguros
// Carrossel simples de fotos usado na seção "Nossa história" do Sobre Nós.
// Troca de slide automática + setas + bolinhas de navegação + arraste no touch.

document.addEventListener('DOMContentLoaded', function () {
    var carrossel = document.getElementById('carrossel-sobre');
    if (!carrossel) return;

    var track = carrossel.querySelector('.carrossel-track');
    var slides = Array.prototype.slice.call(carrossel.querySelectorAll('.carrossel-slide'));
    var dotsContainer = carrossel.querySelector('.carrossel-dots');
    var btnPrev = carrossel.querySelector('.carrossel-seta-prev');
    var btnNext = carrossel.querySelector('.carrossel-seta-next');

    if (!track || slides.length === 0) return;

    var indiceAtual = 0;
    var intervaloMs = 4500;
    var timer = null;

    // Cria as bolinhas de navegação
    var dots = slides.map(function (_, i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carrossel-dot';
        dot.setAttribute('aria-label', 'Ir para a foto ' + (i + 1));
        dot.addEventListener('click', function () {
            irPara(i);
            reiniciarAutoplay();
        });
        dotsContainer.appendChild(dot);
        return dot;
    });

    function atualizar() {
        track.style.transform = 'translateX(-' + (indiceAtual * 100) + '%)';
        dots.forEach(function (dot, i) {
            dot.classList.toggle('ativo', i === indiceAtual);
        });
    }

    function irPara(indice) {
        indiceAtual = (indice + slides.length) % slides.length;
        atualizar();
    }

    function proximo() { irPara(indiceAtual + 1); }
    function anterior() { irPara(indiceAtual - 1); }

    function iniciarAutoplay() {
        timer = setInterval(proximo, intervaloMs);
    }

    function pararAutoplay() {
        if (timer) { clearInterval(timer); timer = null; }
    }

    function reiniciarAutoplay() {
        pararAutoplay();
        iniciarAutoplay();
    }

    if (btnNext) {
        btnNext.addEventListener('click', function () { proximo(); reiniciarAutoplay(); });
    }
    if (btnPrev) {
        btnPrev.addEventListener('click', function () { anterior(); reiniciarAutoplay(); });
    }

    // Pausa ao passar o mouse ou tocar, retoma ao sair
    carrossel.addEventListener('mouseenter', pararAutoplay);
    carrossel.addEventListener('mouseleave', iniciarAutoplay);

    // Suporte a arraste (swipe) no touch/mouse
    var arrasteInicioX = null;
    carrossel.addEventListener('touchstart', function (e) {
        arrasteInicioX = e.touches[0].clientX;
        pararAutoplay();
    }, { passive: true });
    carrossel.addEventListener('touchend', function (e) {
        if (arrasteInicioX === null) return;
        var deltaX = e.changedTouches[0].clientX - arrasteInicioX;
        if (deltaX > 40) { anterior(); }
        else if (deltaX < -40) { proximo(); }
        arrasteInicioX = null;
        iniciarAutoplay();
    });

    atualizar();
    iniciarAutoplay();
});
