//1. Faça um algoritmo que leia 5 números inteiros usando a estrutura de repetição FOR, no final informe qual é o maior deles.


var maiorNumero = 0

for(contador = 0; contador < 5; contador ++ ){
    var numero = prompt("Insira um numero")
    console.log(numero)
    if(numero >= maiorNumero){
        maiorNumero=numero
    }
}

console.log(" O maior numero é:", maiorNumero)