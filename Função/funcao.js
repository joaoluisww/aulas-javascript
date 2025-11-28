function exibirTabuadaEscolhida(){

}

let tabuadaEscolhida = parseInt(prompt("Digite o número da tabuada desejada: "));

//---TABUADA---X

//1 número dentro da condição do for - incialização -variavel
//2 número dentro da condição do for - condição - verificar a volta da variavel
//3 número dentro da codição do for - incremento - soma as voltas 
// i++ igual a i = i+1

console.log(`=====TABUADA===== ${tabuadaEscolhida}`);


for (let i = 1; i <= 10; i++) {
    // 2 X 4 = ?
    console.log(tabuadaEscolhida + " X " + i + " = " + (tabuadaEscolhida * i));

}

//Crie uma função que solicite o nome da pessoa e exiba-o

function exibirNomeSolicitado(){
    let NomeSolicitado = prompt("Digite seu nome");

    return NomeSolicitado;
}

let nome = exibirNomeSolicitado();

alert(nome);


//Chama a minha função
exibirTabuadaEscolhida();



function somaDoisnumeros(n1,n2) {
    console.log(n1=n2);
    
}

somaDoisnumeros(50, 50);

//Crie uma função para o exercicio 08 de Estrutura Condicional
//Passe via parmetro o peso e a altura.

function FalaroPeso(peso,altura) {
    
    

let IMC = pesoDigitado / (alturaDigitado * alturaDigitado);

if(IMC < 18.5){
alert("Abaixo do peso")
}
else if(IMC >= 18.5 && IMC <= 24.9) {
alert("Peso normal");
}
else if(IMC >= 25 && IMC <= 29.9){
alert("Sobrepeso")
}
else if(IMC <= 30.0 && IMC <= 34.9){
alert("Obesidade grau 1")
}
else if(IMC >= 35.0 && IMC <= 39.9){
    alert("Obesidade grau2")
}
else{
    alert("Obesidade grau 3 Se cuidar por favor")
}
}

let pesoDigitado = parseFloat(prompt("Digite o seu peso em quilograma: "));
let alturaDigitado = parseFloat(prompt("Digite o seu altura: "));

FalaroPeso(pesoDigitado, alturaDigitado);
