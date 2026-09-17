// script.js — Gemelli Seguros

document.addEventListener('DOMContentLoaded', function () {

    /* Menu mobile */
    var botaoMenu = document.querySelector('.botao-menu-mobile');
    var navegacao = document.querySelector('.navegacao');

    if (botaoMenu && navegacao) {
        botaoMenu.addEventListener('click', function () {
            navegacao.classList.toggle('menu-aberto');
            var aberto = navegacao.classList.contains('menu-aberto');
            botaoMenu.querySelector('.material-icons').textContent = aberto ? 'close' : 'menu';
        });

        document.querySelectorAll('.navegacao .link-menu').forEach(function (link) {
            link.addEventListener('click', function () {
                navegacao.classList.remove('menu-aberto');
                botaoMenu.querySelector('.material-icons').textContent = 'menu';
            });
        });
    }

    /* Formulário de cotação -> monta mensagem e envia via WhatsApp */
    var formCotacao = document.querySelector('#form-cotacao');
    if (formCotacao) {
        formCotacao.addEventListener('submit', function (e) {
            e.preventDefault();

            var nome = formCotacao.nome.value.trim();
            var telefone = formCotacao.telefone.value.trim();
            var produto = formCotacao.produto.selectedOptions[0] ? formCotacao.produto.selectedOptions[0].text : '';
            var mensagem = formCotacao.mensagem.value.trim();

            var texto = 'Olá! Meu nome é ' + nome + '.' +
                '\nGostaria de uma cotação de: ' + produto + '.' +
                '\nMeu telefone: ' + telefone + '.' +
                (mensagem ? '\nObservações: ' + mensagem : '');

            var url = 'https://wa.me/5554999132989?text=' + encodeURIComponent(texto);
            window.open(url, '_blank');

            var msgSucesso = document.querySelector('#cotacao-sucesso');
            if (msgSucesso) {
                msgSucesso.classList.add('ativo');
            }
        });
    }

    /* Botões "cotar este seguro" (produtos.html) — pré-selecionam o produto no formulário */
    document.querySelectorAll('[data-produto]').forEach(function (botao) {
        botao.addEventListener('click', function () {
            sessionStorage.setItem('produtoSelecionado', botao.getAttribute('data-produto'));
        });
    });

    var selectProduto = document.querySelector('#form-cotacao select[name="produto"]');
    if (selectProduto) {
        var produtoSalvo = sessionStorage.getItem('produtoSelecionado');
        if (produtoSalvo) {
            selectProduto.value = produtoSalvo;
            sessionStorage.removeItem('produtoSelecionado');
        }
    }

    /* Formulário de contato -> monta mensagem e envia via WhatsApp */
    var formContato = document.querySelector('#form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function (e) {
            e.preventDefault();

            var nome = formContato.nome.value.trim();
            var email = formContato.email.value.trim();
            var telefone = formContato.telefone.value.trim();
            var assunto = formContato.assunto.value.trim();
            var mensagem = formContato.mensagem.value.trim();

            var texto = 'Olá! Meu nome é ' + nome + '.' +
                (assunto ? '\nAssunto: ' + assunto : '') +
                '\nE-mail: ' + email +
                '\nTelefone: ' + telefone +
                (mensagem ? '\nMensagem: ' + mensagem : '');

            var url = 'https://wa.me/5554999132989?text=' + encodeURIComponent(texto);
            window.open(url, '_blank');

            var msgSucesso = document.querySelector('#contato-sucesso');
            if (msgSucesso) {
                msgSucesso.classList.add('ativo');
            }
        });
    }

});
