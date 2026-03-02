let salario = 2000.00
let adicionalNoturno = 500.00
let horaExtra = 100.00
let descontos = 200.00
let salarioLiquido; 

salarioLiquido = (salario+adicionalNoturno+(horaExtra*5)- descontos)


console.log(`Data de pagamento 5º dia útil R$${salarioLiquido}`);