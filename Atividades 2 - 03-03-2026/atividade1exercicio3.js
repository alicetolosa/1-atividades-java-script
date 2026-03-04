import leia from "readline-sync";

let entrada, nomeDoador, idade, primeiraDoacao;

entrada = "Seja bem vindo, vamos identificar se voce esta apto para a doação de Sangue"
console.log(entrada);

nomeDoador = leia.question("Informe o seu nome: ");
idade = leia.questionInt("Informe sua idade: ");
primeiraDoacao = leia.question("Primeira doacao de Sangue? (true/false): ");

primeiraDoacao = (primeiraDoacao.toLowerCase() ==="true")

let apto = false;

// entrada dos dados 
if (idade >=18 && idade <= 59){
    apto = "true"
    
} else if( idade >= 60 && idade <=69){
    if (!primeiraDoacao){
    apto = "true";
    }  
}

//saida dos dados
if (apto) {
    console.log(`${nomeDoador} está apto para doar sangue!`);
} else {
    console.log(`${nomeDoador} não está apto para doar sangue!`);
}