// seguradoras-plantao.js — Gemelli Seguros
//
// Lista de seguradoras exibida na página "Assistência 24h".
// Os telefones abaixo são as centrais de assistência 24h / SAC informados
// nos canais oficiais de cada seguradora (pesquisados em jul/2026).
// Esses números podem mudar e variam conforme a região/produto — por isso
// exibimos um aviso na página pedindo para o cliente confirmar no site
// oficial da seguradora ou na sua apólice antes de depender só disso.
//
// IMPORTANTE: revise se a Gemelli realmente trabalha com todas as
// seguradoras abaixo e ajuste a lista para refletir suas parcerias reais.

var SEGURADORAS_PLANTAO = [
    { nome: "Allianz Seguros",     telefone: "0800 130 700",  logo: "assets/seguradoras/ALLIANZ.png" },
    { nome: "Bradesco Seguros",    telefone: "0800 701 2757", logo: "assets/seguradoras/BRADESCO.png" },
    { nome: "HDI Seguros",         telefone: "0800 434 4340", logo: "assets/seguradoras/HDI.png" },
    { nome: "Porto Seguro",        telefone: "0800 727 0800", logo: "assets/seguradoras/PORTO.jpg" },
    { nome: "Tokio Marine",        telefone: "0800 318 6546", logo: "assets/seguradoras/tokio-marine-seguradora.png" },
    { nome: "AIG Seguros",         telefone: "0800 710 0089", logo: "assets/seguradoras/AIG.png" },
    { nome: "Aliro Seguros",       telefone: "0800 770 1318", logo: "assets/seguradoras/ALIRO.png" },
    { nome: "Allseg Seguradora",   telefone: "0800 771 1115", logo: "assets/seguradoras/ALLSEG.png" },
    { nome: "AXA Seguros",         telefone: "0800 292 4357", logo: "assets/seguradoras/AXA.png" },
    { nome: "Chubb Seguros",       telefone: "0800 703 6665", logo: "assets/seguradoras/CHUBB.png" },
    { nome: "Daycoval Seguros",    telefone: "0800 777 5787", logo: "assets/seguradoras/DAYCOVAL.png" },
    { nome: "Essor Seguros",       telefone: "0800 775 4293", logo: "assets/seguradoras/ESSOR.png" },
    { nome: "Ezze Seguros",        telefone: "0800 983 3993", logo: "assets/seguradoras/EZZE.png" },
    { nome: "Mapfre Seguros",      telefone: "0800 705 0101", logo: "assets/seguradoras/MAPRE.jpg" },
    { nome: "Mitsui Sumitomo",     telefone: "0800 707 7883", logo: "assets/seguradoras/MITSUI.png" },
    { nome: "Pottencial Seguradora", telefone: "0800 606 7688", logo: "assets/seguradoras/POTTENCIAL.png" },
    { nome: "Sancor Seguros",      telefone: "0800 200 0393", logo: "assets/seguradoras/SANCOR.png" },
    { nome: "Sompo Seguros",       telefone: "0800 016 2727", logo: "assets/seguradoras/SOMPO.png" },
    { nome: "SulAmérica",          telefone: "0800 777 1012", logo: "assets/seguradoras/SUL-AMERICA.png" },
    { nome: "Swiss Re",            telefone: "0800 008 9756", logo: "assets/seguradoras/SWISS-RE.png" },
    { nome: "Unimed Seguros",      telefone: "0800 016 6633", logo: "assets/seguradoras/UNIMED.png" },
    { nome: "Yelum Seguradora",    telefone: "0800 701 4120", logo: "assets/seguradoras/YELUM.png" },
    { nome: "Zurich Seguros",      telefone: "0800 285 4141", logo: "assets/seguradoras/ZURICH.png" },
    { nome: "Asas Seguros",        telefone: "Consulte sua apólice", logo: "assets/seguradoras/asas.png" },
    { nome: "Excelsior Seguros",        telefone: "0800 772 9898", logo: "assets/seguradoras/EXCELSIOR.png" },
    { nome: "Sura Brasil Seguros",        telefone: "0800 704 9399", logo: "assets/seguradoras/SURA.png" },
    { nome: "Berkley Brasil Seguros",        telefone: "0800 770 0797", logo: "assets/seguradoras/BERKLEY.png" },
    { nome: "Prudencial Seguros",        telefone: "0800 282 5907", logo: "assets/seguradoras/PRUDENTIAL.png" },
    { nome: "Fairfax Brasil",        telefone: " 0800 014 3004.", logo: "assets/seguradoras/FF.png" },
    { nome: "Akad Seguros",        telefone: "0800 942 2746", logo: "assets/seguradoras/AKAD.png" }
];

document.addEventListener('DOMContentLoaded', function () {
    var grade = document.getElementById('grade-seguradoras');
    if (!grade) return;

    SEGURADORAS_PLANTAO.forEach(function (seguradora) {
        var card = document.createElement('div');
        card.className = 'seguradora-card';
        card.tabIndex = 0;

        var badge = document.createElement('div');
        badge.className = 'seguradora-logo-badge';
        var img = document.createElement('img');
        img.src = seguradora.logo;
        img.alt = seguradora.nome;
        img.loading = 'lazy';
        badge.appendChild(img);

        var nome = document.createElement('span');
        nome.className = 'seguradora-nome';
        nome.textContent = seguradora.nome;

        var plantao = document.createElement('div');
        plantao.className = 'seguradora-plantao';
        plantao.innerHTML = '<span class="material-icons">call</span><span>' + seguradora.telefone + '</span>';

        // Link para as Condições Gerais da seguradora. Como cada seguradora tem
        // várias apólices diferentes (auto, vida, residencial etc.), em vez de um
        // único PDF fixo (que ficaria desatualizado ou errado dependendo do produto),
        // geramos uma busca direta pelo nome da seguradora + "condições gerais".
        // Se a Gemelli quiser apontar para uma página oficial específica de cada
        // seguradora, basta trocar esse link por um href fixo.
        var linkCG = document.createElement('a');
        linkCG.className = 'seguradora-cg-link';
        linkCG.href = 'https://www.google.com/search?q=' + encodeURIComponent(seguradora.nome + ' condições gerais');
        linkCG.target = '_blank';
        linkCG.rel = 'noopener';
        linkCG.textContent = 'Condições gerais';
        linkCG.addEventListener('click', function (evento) {
            evento.stopPropagation();
        });
        plantao.appendChild(linkCG);

        card.appendChild(badge);
        card.appendChild(nome);
        card.appendChild(plantao);
        grade.appendChild(card);

        // Toque no celular também revela o telefone (sem depender de hover)
        card.addEventListener('click', function () {
            document.querySelectorAll('.seguradora-card.ativa').forEach(function (outro) {
                if (outro !== card) outro.classList.remove('ativa');
            });
            card.classList.toggle('ativa');
        });
    });
});
