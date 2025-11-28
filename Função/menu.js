
//1--------------------------------------------------------------------------------------------------//
//Criar uma Função de Tabuada 
//1---------------------------------------------------------------------------------------------//
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
//2------------------------------------------------------------------------------------------//
//Crie uma função que solicite o nome da pessoa e exiba-o

function exibirNomeSolicitado(){
    let NomeSolicitado = prompt("Digite seu nome");

    return NomeSolicitado;
}
let nome = exibirNomeSolicitado();

alert(nome);
//3-------------------------------------------------------------------------------------------//
//Função do par
let n = prompt("Digite um numero");
let total=n/2;
if(n%2 == 0){
alert("Par");
}
else{
alert("Impar");
}
//4------------------------------------------------------------------------------------------------//
//Função dos dias da  semana 
let semana = prompt("Digite um dia da semana")

switch (semana) {
    case "1":
        console.log("Segunda-Feira")
        break;

    case "2":
        console.log("Terça-Feira")
        break;

    case "3":
        console.log("Quarta-Feira")
        break;

    case "4":
        console.log("Quinta-Feira")
        break;

        case "5":
        console.log("Sexta-Feira")
        break;


        case "6":
        console.log("Sabado")
        break;


        case "7":
        console.log("Domingo")
        break;


    default:
        console.log("Esse dia da semana não existe")
        break;
}
//5--------------------------------------------------------------------------------------//
//Função Representação de prova
alert("informe as notas de 0 a 10")

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda  nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))
let nota4 = parseFloat(prompt("Digite a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log("A média do aluno é :" + media)

if(media >= 7){
    console.log("Aprovado")
}
else if(media < 7 && media>= 5){
    console.log("Recuperação")
}
else{
    console.log("Reprovado ;-;")
}
//-----------------------------------------------------------------//
