let numero01 = parseFloat(prompt("Digite a primeira nota "))


let numero02 = parseFloat(prompt("Digite a segunda nota "))


let numero03 = parseFloat(prompt("Digite a terceira nota "))


let numero04 = parseFloat(prompt("Digite a quarta nota "))


let media = (numero01 + numero02 + numero03 + numero04) / 4

if (media >= 7) {
    alert ("Aprovado")
} else if (media <= 7 && media >= 5) {
alert ("Recuperação")
} if(media <5) {
    alert ("Reprovado")
}
