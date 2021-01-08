function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!"; //innerHTML é injetar HTML dentro do js

    //console.log(document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!");
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.google.com.br/"); ///abre em janelas diferentes
    window.location.href = "https://www.google.com.br/"; //abre na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada")
}

function change(elemento){
    console.log(elemento.value);
}











//FUNCTIONS

/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome){
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    
    var validar = true;
    
    if(idade <= 18){
        validar = true;    
    }else {
        validar = false;
    }
    
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
var idade = prompt("Qual sua idade? ");
console.log(validadeIdade(idade));
*/


//DATA

/*
var d = new Date();
alert(d.getMonth());
alert(d.getMinutes());
*/



//LAÇOS

/*
var count = 0;
while(count < 5){
    console.log(count);
    count = count++;
}
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/





//CONDICIONAIS

//var idade = prompt("Qual sua idade?");

//if(idade >= 18){
    //alert("Maior de idade");
//}else{
    //alert("Menor de idade");
//};




//ARRAYS

// - Dicionario

//var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
//console.log(fruta.nome);
//alert(frutas[1].nome);

//var fruta = {nome: "maçã", cor: "vermelha"}
//console.log(fruta.nome);


//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); para incluir um item
//lista.pop(); serve para tirar um elemento da lista
//console.log(lista.length);
//console.log(lista.reverse); reverte a lista
//console.log(lista.join(" - "));





//VARIÁVEIS E ETC
//var nome = "Nicole Fagundes";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2)
//console.log(frase);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toLowerCase());
