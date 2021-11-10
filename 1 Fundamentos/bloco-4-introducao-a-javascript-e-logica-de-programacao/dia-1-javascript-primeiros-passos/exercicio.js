/*console.log("Questão 1 - Aritmética básica\n");

const a = 120;
const b = 45;

// Programa 1 Adição
resultado = (a+b);
console.log("A SOMA de ",a,"e", b, "é => ",resultado," !");

console.log("-----------------------------------------------");

// Programa 2 Subtração
resultado = (a-b);
console.log("A SUBTRAÇÃO ",a,"e", b, "é => ",resultado," !");
console.log("-----------------------------------------------");

// Programa 3 Multiplicação
resultado = (a*b);
console.log("A MULTIPLICAÇÃO de ",a,"e", b, "é => ",resultado," !");
console.log("-----------------------------------------------");

// Programa 4 Divisão
resultado = (a/b);
console.log("A DIVISÃO de ",a,"e", b, "é => ",resultado," !");
console.log("-----------------------------------------------");

// Programa 5 Módulo(resto)
resultado = (a%b);
console.log("O resto de ",a,"e", b, "é => ",resultado," !");
console.log("-----------------------------------------------");
// 45 cabe 2x no 120 e sobra 30 o resto é 30, exatamente issa é a função do %. 

//Questão 2
console.log("Questão 2 - Maior de Dois números\n");

const c = 25;
const d = 65;

if (c>d) {
    console.log('O c é maior que d');
}
else if (c===d) {
    console.log('O c é igual a d');
}
else {
    console.log('O d é maior que c');
}

//Questão 3
console.log("Questão 3 - Maior de 3 números\n");
const e = 188;
const f = 183;
const g = 183;

//praticamente tudo poderia ser resumido nessas duas linhas abaixo mas....como é para treinar a lógica tbm..
//var maior = Math.max(e,f,g);
//console.log(maior);

if (e===f && e==g) {
    console.log("Eles tem o mesmo valor");
}
else if (e>f && e>g) {
    console.log("O E é maior");
}
else if (f>e && f>g) {
    console.log("O F é o maior");
}
else if (g>e && g>f){
    console.log("O G é maior");
}
else if (e===f && e>g){
    console.log("E e F são iguais e maiores que G");
}
else if (f===g && f>e) {
    console.log("F e G são iguais e maiores que E");
}
else {
    console.log("G e E são iguais e maiores que F")
}

//Questão 4
console.log("Questão 4 - Positivo/negativo ou Zero?\n");
const h = -5;
if (h===0) {
    console.log("Valor Zero");
}
else if (h>0) {
    console.log("Valor Positivo");
}
else {
    console.log("Valor Negativo");
}

//Questão 5
console.log("Questão 5- ângulo internos de um triangulo\n");
let angulo1 =50;
let angulo2 =50;
let angulo3 =80;
let angulo =(angulo1+angulo2+angulo3);
if (angulo ===180) {
    console.log("É um triangulo... ");
}
else {
    console.log("Erro! a soma dos ângulos tem que ser 180");
}

//Questão 7 -Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
console.log("Questão \ Conceitos de A a F \n");
let nota = 101;
if (nota >=90 && nota<=100) {
    console.log("Nota A");
}
else if (nota >=80 && nota<90) {
    console.log("Nota B");
}
else if (nota >=70 && nota<80) {
    console.log("Nota C");
}
else if (nota >=60 && nota<70) {
    console.log("Nota D");
}
else if (nota >=50 && nota<60) {
    console.log("Nota E");
}
else if (nota >=0 && nota<50) {
    console.log("Nota F");
}
else {
    console.log("Favor, verificar o número digitado...");
}
//Questão 8- Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
console.log("Questão 8");
const a1= 14;
const a2= 15;
const a3= 11;
if (a1%2===0 || a2%2===0 || a3%2===0) {
    console.log(true)
}
else {
    console.log(false)
}
//Questão 9- Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
console.log("Questão 9");
const a4= 13;
const a5= 15;
const a6= 11;
if (a4%2===0 || a5%2===0 || a6%2===0) {
    console.log(!true)
}
else {
    console.log(!false)
}
//10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
console.log("Questão 10");
const CProd = 101;
const CVenda=-1;
const qtde =1000;
//venda de 1000 unidades
if (CProd <0 || CVenda<0) {
    console.log("Valores inválidos")
}
else {
let lucro = ((CVenda*qtde)-(CProd*1.2*qtde));
console.log("Lucro de R$", lucro);
}
*/
let salarioBruto = 10000;
let salarioINSS=0;
if  (salarioBruto <=1556.94) {
    salarioINSS= salarioBruto*0.92;
}
else if (salarioBruto >=1556.94 && salarioBruto < 2594.92) {
    salarioINSS= salarioBruto*0.91;
}
else if (salarioBruto >=2594.93 && salarioBruto <=5189.82) {
    salarioINSS= salarioBruto*0.89;
}
else {
    salarioINSS= salarioBruto-570.88;
}

console.log(salarioINSS);
let salarioLiquido=0;
if (salarioINSS< 1903.98) {
    salarioLiquido=salarioINSS
}
else if (salarioINSS >=1903.98 && salarioINSS<=2594.92){
    salarioLiquido = salarioINSS -(salarioINSS*0.075 -142.80);
}
else if (salarioINSS >=2826.66 && salarioINSS <=3751.05){
    salarioLiquido = salarioINSS -(salarioINSS*0.15 -354.80);
}
else if (salarioINSS >=3751.06 && salarioINSS<=4664.68){
    salarioLiquido = salarioINSS -(salarioINSS*0.225 -636.13);
}
else {
    salarioLiquido= salarioINSS -(salarioINSS*0.275 -869.36);
}
console.log("Do teu salario de R$",salarioBruto," só sobrou os míseros: R$",salarioLiquido.toFixed(2));
