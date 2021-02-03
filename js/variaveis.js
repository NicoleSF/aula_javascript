var nameVar = "Guilherme";
let nameLet = "Guilherme";
const nameConst = "Guilherme";

console.log("nameVar: ${nameVar}");
console.log("nameLet: ${nameLet}");
console.log("nameConst: ${nameConst}");



var teste = "example"; //escopo global
(() => { //if de arrow function
    console.log('Valor dentro da função "${teste}"');

    if(true){
        var teste = 'example'; //sobe para o escopo. O var não entende escopo de bloco. Só aceita de função e global.
        console.log('Valor dentro do if "${test}');
    }

    console.log('Valor após a execução do if "${test}"')
})();


//LET
(() => { 
    let test = "valor função";
    console.log('Valor dentro da função "${test}"');

    if(true){ //dentro deste bloco, é este let que vai valer. Fora daqui, são os outros.
        let test = "valor if";
        console.log('Valor dentro do if "${test}');
    }

    console.log('Valor após a execução do if "${test}"')
})();


//CONST
(() => {  //se a const for do tipo primitivo, não vai conseguir mudar.
    const test = "valor função";
    console.log('Valor dentro da função "${test}"');

    if(true){ 
        const test = "valor if";
        console.log('Valor dentro do if "${test}');
    }

    console.log('Valor após a execução do if "${test}"')
})();