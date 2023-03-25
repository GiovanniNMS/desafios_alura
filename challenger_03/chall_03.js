var botao_base = document.getElementById('botao_base');

botao_base.addEventListener('click', function () {

    var res_base = document.getElementById("res_base");

    var base = " ";
    var check_base = document.getElementsByName("base");

    if (check_base[0].checked) {
        base = "Front End";
    } else if (check_base[1].checked) {
        base = "Back End"
    } else {
        window.alert("[Erro]Selecione Front-End ou Back-End")
    }

    switch (base) {
        case "Front End":

            res_base.innerHTML = `
        <div class="perguntas">
            
            <p >O que você quer aprender de Front End?</p>
        </div>

        <section class="selecionado">
            <input type="radio" name="ling" id="ling">
            <label for="react">React</label>
            <input type="radio" name="ling" id="ling">
            <label for="Vue">Vue</label>
            <p><button id="botao_ling">Continuar</button></p>
        </section >`
            break

        case "Back End":

            res_base.innerHTML = `
        <div class="perguntas">            
            <p >O que você quer aprender de Back End?</p>
        </div>

        <section class="selecionado">
            <input type="radio" name="ling" id="ling">
            <label for="C#">C#</label>
            <input type="radio" name="ling" id="ling">
            <label for="Java">Java</label>
            <p><button id="botao_ling">Continuar</button></p>
        </section >`  
    }

    var botao_ling = document.getElementById('botao_ling');

    botao_ling.addEventListener('click', function () {

        
        var ling = " ";
        var check_ling = document.getElementsByName("ling");

        if (check_ling[0].checked) {            
            ling = ""
            
        } else if (check_ling[1].checked) {            
            ling = ""
        } else {
            window.alert("[Erro]Selecione o que quer aprender")
            return
        }

        ling = document.querySelector('input[type="radio"]:checked');

       
        var res_ling = document.getElementById('res_ling')

                res_ling.innerHTML = `
        <div class="perguntas">            
            <p >Escolha uma alternativa?</p>
        </div>

        <section class="selecionado">
            <input type="radio" name="escolha" id="escolha">
            <label for="mesma">Se especializar em ${base}.</label>
            <p></p><input type="radio" name="escolha" id="escolha">
            <label for="full_stack">Se desenvolver em Full Stack</label>
            </p>
            <p><button id="botao_cont">Continuar</button></p>
        </section >`


    })
})
