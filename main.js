$(document).ready(function(){  // Aqui para ver se o JQuery está funcionando, e está dizendo no código é que: quando o documento estiver pronto(ready), ele deve executar o alert("Olá JQuery"), depois de testar apagamos o alert
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li sytle="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
            <di class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" tittle="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                <a/>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(2000);
            $('#endereco-imagem-nova').val('');
    })
})