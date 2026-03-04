import leia from "readline-sync";

let entrada,numeroA, numeroB, numeroC, operador;

entrada = "Seja bem vindo, vamos fazer um teste e informe os numeros abaixo"
console.log(entrada)

numeroA = leia.questionInt("Informe o numero A: ")
numeroB = leia.questionInt("Informe o numero B: ")
numeroC = leia.questionInt("Informe o numero C: ")

operador = numeroA + numeroB;

if (numeroA + numeroB > numeroC){
    console.log(`Sim, a soma de numeroA ${numeroA} + numeroB ${numeroB}: é igual a ${operador}, é maior que numeroC ${numeroC}`)
}

if (numeroA + numeroB < numeroC){
    console.log(`Sim, a soma de numeroA ${numeroA} + numeroB ${numeroB}: é igual a  ${operador}, que menor que o numeroC ${numeroC}`)
}

if (numeroA + numeroB == numeroC){
    console.log(`Sim, a soma de numeroA ${numeroA} + numeroB ${numeroB}: é igual a numeroC ${operador}`)
}