/*
Exercício: Calculadora Simples
Objetivo: Criar uma calculadora simples que realiza as quatro operações básicas (soma, subtração, multiplicacao e divisão) com dois números fornecidos pelo usuário.
Passos:
Solicitar ao usuário que insira dois números.
Armazenar esses números em variáveis.
Calcular a soma, subtração, multiplicacao e divisão.
Exibir os resultados das operações em um formato claro.
*/


// solicitar ao osuario para inserir os numeros
let numero1 = Number(prompt("insira o primeiro numero:"));
let numero2 = Number(prompt("insira o segundo numero:"));

// calcular as operaçoes
let soma = numero1 + numero2;
let subtracao= numero1 - numero2;
let multiplicacao =numero1 * numero2;
let divisao = numero1 / numero2;

// Exibir os resultados
// console.log("A soma entre :", numero1,"e",numero2,"é:" ,soma );
// console.log("A subtração entre:", numero1,"e",numero2,"é:", sutraçao);
// console.log("A multiplicacao entre:",numero1,"e",numero2," é:", multiplicaçao);
// console.log("A divisao entre :",numero1,"e",numero2,"é:", divisao);

console.log(`A soma entre: ${numero1} e  ${numero2}, é: ${soma}` );
console.log(`A subtração entre: ${numero1} e ${numero2} é:  ${subtracao}`);
console.log(`A multiplicacao entre: ${numero1} e ${numero2} é:  ${multiplicacao}`);
console.log(`A divisao entre : ${numero1} e ${numero2} é: ${divisao}`);

