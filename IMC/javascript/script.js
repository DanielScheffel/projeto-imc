document.querySelector("#button").onclick = function(){
    let imc = document.querySelector("#imc").value;
    let nome = document.querySelector("#nome").value;
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;
    let resultado = document.querySelector("#resultado").value;
    let tbody = document.querySelector("tbody").value;
    let classificacao = document.querySelector("classificacao").value;

    imc = peso / (altura * altura);

    if(imc < 18,5){
        classificacao = "Abaixo do peso normal!";
    }

    if(imc < 24,9){
        classificacao = "Peso normal!";
    }

    if(imc < 29,9){
        classificacao = "Excesso de peso!";
    }

    if(imc < 34,9){
        classificacao = "Obesidade classe I";
    }

    if(imc < 39,9){
        classificacao = "Obesidade classe II";
    }

    if(imc > 40){
        classificacao = "Obesidade classe III";
    }

    let x=0

    x++
    let tr = document.createElement("tr")
    
    let tdOrdem = document.createElement("td")
    tdOrdem.append(
        document.createTextNode(x)
    )
    let tdNome = document.createElement("td")
    let tdAltura = document.createElement("td")
    let tdPeso = document.createElement("td")
    let tdIMC = document.createElement("td")
    let tdclassificacao = document.createElement("td")
    
    tdNome.append(
       document.createTextNode(tdNome)
    )
    tdAltura.append(
        document.createTextNode(tdAltura)
    )
    tdPeso.append(
        document.createTextNode(tdPeso)
    )
    tdIMC.append(
        document.createTextNode(tdIMC)
    )
    tdclassificacao.append(
        document.createTextNode(tdclassificacao)
    )
    }