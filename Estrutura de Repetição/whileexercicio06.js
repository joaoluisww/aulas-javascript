// Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let numero = 1; //variavel inicializadora 
let soma = 0
//condição

while (numero <= 100) {
    soma = soma + numero;  //Está somando os números 
    numero++; //incremento de cada volta
}

alert("A soma dos números de 1 a 100 é: " + soma);
