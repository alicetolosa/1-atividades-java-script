import leia from 'readline-sync';

let entrada,numero, tipo,sinal;

entrada = "Seja bem vindo, vamos identificar se o numero que vc digitou é impar ou par, negativo ou positivo! (VAMOS JUNTES)"
console.log(entrada)

numero = leia.questionInt("Informe o seu numero: ")


if (numero % 2 === 0 && numero >= 0) {
    console.log(`O Número ${numero} é par e positivo!`);
} 
else if (numero % 2 === 0 && numero < 0) {
    console.log(`O Número ${numero} é par e negativo!`);
} 
else if (numero % 2 !== 0 && numero >= 0) {
    console.log(`O Número ${numero} é ímpar e positivo!`);
} 
else {
    console.log(`O Número ${numero} é ímpar e negativo!`);
}