import leia from "readline-sync";

let entrada;

entrada = "Seja bem vindo, vamos ver o seu salario atualizado."
console.log(entrada)

let nome = leia.question("Nome do colaborador: ");
let codigoCargo = leia.questionInt("Cargo (codigo de 1 a 6): ");
let salario = leia.questionFloat("Salario: R$ ");


let cargo;
let percentual;


switch(codigoCargo) {
    case 1:
        cargo = "Gerente";
        percentual = 0.10; 
        break;
    case 2:
        cargo = "Vendedor";
        percentual = 0.07; 
        break;
    case 3:
        cargo = "Supervisor";
        percentual = 0.09; 
        break;
    case 4:
        cargo = "Motorista";
        percentual = 0.06; 
        break;
    case 5:
        cargo = "Estoquista";
        percentual = 0.05; 
        break;
    case 6:
        cargo = "Técnico de TI";
        percentual = 0.08; 
        break;
    default:
        console.log("Código de cargo invalido");
        cargo = null;
        percentual = 0;
}


if (cargo !== null) {
    let novoSalario = salario + (salario * percentual);
    console.log(`\nNome do colaborador: ${nome}`);
    console.log(`Cargo: ${cargo}`);
    console.log(`Salario: R$ ${novoSalario.toFixed(2)}`);
}