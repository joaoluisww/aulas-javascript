// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let primeiroNumero = parseInt(prompt("Digite o primeiro número: "));
let segundoNumero = parseInt(prompt("Digite o segundo número: "));
let terceiroNumero = parseInt(prompt("Digite o terceiro número: "));

console.log(primeiroNumero);
console.log(segundoNumero);
console.log(terceiroNumero);

//Utilizamos o IF todas vez que precisamos conferir algo
if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero) {
    //Só entra nesse bloco se for verdadeiro
    alert("Está em ordem crescente.")
}
