function addLista(lista){
    let nota = document.querySelector('.inputNota').value;
    nota = nota.replace(",", ".");
    if (!nota){
        alert("Por favor, insira uma nota");
        return null
    }
    else if (isNaN(nota)) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        return null
    }
    else{
        nota = parseFloat(nota);
        if (nota < 0 || nota > 10){
            alert("A nota digitada é inválida, por favor, insira uma nota válida.");
            return null
        }
        else{
            lista.push(nota);
            return nota
        }
    }
}

function calculaMedia(lista){
    let soma = 0;
    for (let nota of lista) soma += nota;
    return (soma / lista.length).toFixed(2)
}



var l = []
var botaoAdicionar = document.querySelector(".botaoAdicionar");
var botaoCalcular = document.querySelector(".botaoCalcMedia");

botaoAdicionar.addEventListener("click", function(){
    let nota = addLista(l);
    if (nota != null){
        let areaNotas = document.querySelector(".areaNotas");
        areaNotas.append("A nota é: "+ nota + "\n");
    }
    document.querySelector('.inputNota').value = "";
})

botaoCalcular.addEventListener("click", function(){
    let areaMedia = document.querySelector(".retornaMedia");
    areaMedia.innerText = "A média é: "+ calculaMedia(l);
})