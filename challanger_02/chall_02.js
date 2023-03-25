var botao = document.getElementById('botao');

botao.addEventListener('click', function () {

    var name = document.getElementById('input_name').value;
    var age = document.getElementById('input_age').value;
    var ling = document.getElementById('input_ling').value;
    var res = document.getElementById('res');

    //Declarando a variavel que sera selecionada
    var perg = " "
    var check = document.getElementsByName('perg');

    if (check[0].checked) {
        perg = 'sim'

    } else if (check[1].checked) {
        perg = 'nao'
    }

    //condição após a declaração da variavel selecionada
    switch (perg) {
        case 'sim':
            res.innerHTML = `Olá ${name}, prezer em conhece-lo.Você tem ${age} anos e está estudando ${ling}. Fico feliz que está gostando! Continue estudando e terá muito sucesso`
            break

        case 'nao':
            res.innerHTML = `Olá ${name}, prezer em conhece-lo.Você tem ${age} anos e está estudando ${ling}. Ahh que pena que não gostou de ${ling}... Já tentou aprender outras linguagens?`
    }

})
