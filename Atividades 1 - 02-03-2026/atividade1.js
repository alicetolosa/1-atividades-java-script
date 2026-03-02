const leia = require('readline-sync')

let salario; 
let abono;
let novoSalario;

salario = leia.questionInt("Digite o valor do Salario: ");
console.log(salario);

abono = leia.questionInt("Digite o valor do Abono: ");
console.log(abono);

novoSalario = salario+abono;
console.log(`Parabéns, voce chegou ao valor atualizado do seu novo salário ${salario} e ${abono} = ${novoSalario}` );
