// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let tabuadaEscolhida = parseInt(prompt("Digite o n;umero da tabuada desejada: "));

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