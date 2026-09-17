// produto-detalhe.js — Gemelli Seguros
// Lê o parâmetro ?p= da URL e preenche a página produto.html com os dados
// correspondentes definidos em produtos-dados.js

document.addEventListener('DOMContentLoaded', function () {

    var elNome = document.querySelector('#produto-nome');
    if (!elNome) { return; } // não estamos em produto.html

    var params = new URLSearchParams(window.location.search);
    var slug = params.get('p');
    var dados = (typeof PRODUTOS_GEMELLI !== 'undefined' && slug) ? PRODUTOS_GEMELLI[slug] : null;

    if (!dados) {
        // Produto não encontrado: volta para a listagem de produtos
        window.location.href = 'produtos.html';
        return;
    }

    document.title = dados.nome + ' | Gemelli Seguros';
    document.querySelector('#produto-categoria').textContent = dados.categoria;
    document.querySelector('#produto-nome').textContent = dados.nome;
    document.querySelector('#produto-resumo').textContent = dados.resumo;
    document.querySelector('#produto-nome-2').textContent = dados.nome;
    document.querySelector('#produto-descricao').textContent = dados.descricao;

    var imagem = document.querySelector('#produto-imagem');
    imagem.src = dados.imagem;
    imagem.alt = dados.nome;

    var listaCoberturas = document.querySelector('#produto-coberturas');
    listaCoberturas.innerHTML = '';
    dados.coberturas.forEach(function (item) {
        var li = document.createElement('li');
        li.innerHTML = '<span class="material-icons">check_circle</span> ' + item;
        listaCoberturas.appendChild(li);
    });

    var botaoCotar = document.querySelector('#produto-btn-cotar');
    botaoCotar.setAttribute('data-produto', dados.nome);

    if (dados.linkCalculo) {
        // Produto com calculadora própria: leva direto ao formulário específico
        botaoCotar.href = dados.linkCalculo;
        botaoCotar.target = '_blank';
        botaoCotar.rel = 'noopener';
        botaoCotar.textContent = 'Fazer cálculo deste seguro';
    } else {
        // Sem calculadora própria: mantém o formulário de cotação existente
        botaoCotar.addEventListener('click', function () {
            sessionStorage.setItem('produtoSelecionado', dados.nome);
        });
    }

});
