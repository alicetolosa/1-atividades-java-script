const leia = require('readline-sync')
//Primeiro Exercicio
let n1;
let n2;
let n3;
let n4;
let diferenca;

n1 = leia.questionInt("Digite Numero1: ");
n2 = leia.questionInt("Digite Numero2: ");
n3 = leia.questionInt("Digite Numero3: ");
n4 = leia.questionInt("Digite Numero4: ");

diferenca = (n1*n2) - (n3*n4)
console.log(diferenca)

//Segundo Exercicio
let num1;
let num2;
let num3;
let num4;
let diferenca2;

num1 = leia.questionInt("Digite Numero1: ");
num2 = leia.questionInt("Digite Numero2: ");
num3 = leia.questionInt("Digite Numero3: ");
num4 = leia.questionInt("Digite Numero4: ");

diferenca2 = (num1*num2) - (num3*num4)
console.log(diferenca2)
