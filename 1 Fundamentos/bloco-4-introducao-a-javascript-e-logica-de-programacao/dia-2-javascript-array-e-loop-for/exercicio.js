//Exercício 1
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index+=1) {
    console.log(numbers[index]);

};
//Questão dois - Soma de numeros do arrays
let soma=0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i+=1)   {

    soma+= numbers[i];
}
console.log(soma);

//Questão 3 - Media Aritmetica dos numeros array.
let soma=0
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let n= numbers.length;
for (let i = 0; i < numbers.length; i+=1) {
    soma+=numbers[i];
}
let media = soma/n;
console.log("A média aritmetica dos números da array é:",media);

//Questão 4
let soma=0
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let n= numbers.length;
for (let i = 0; i < numbers.length; i+=1) {
    soma+=numbers[i];
}
let media = soma/n;
    if (media >20) {
        console.log("Valor maior que 20");
    }
    else {
        console.log("Valor menor que 20");
    }

//Questão 5


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorN=0;
for (let index = 0; index < numbers.length; index+=1) {
    if (maiorN < numbers[index]) {
        maiorN=numbers[index]        
    }
}
console.log("o maior número é o:",maiorN);

//Questão 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares=[];
for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i]%2===1)
    impares.push(numbers[i]);   
}
if (impares.length>=1) {
    console.log("Foram encontrados",impares.length,"na array numbers");
}
else {
    console.log("Nenhum valor encontrado");
}

//Questão 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor= 10000;
for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i]< menor)
        menor=numbers[i];

}
console.log("O menor número é:",menor);
*/
//Questão 8 
let numbers =[];
for (let index = 1; index < 26; index+=1) {
    numbers.push(index);  
}

//console.log(numbers);

//Questão 9
let resultado=[];
for (let i = 0; i < numbers.length; i+=1) {
    resultado.push(numbers[i]/2);
}
console.log(resultado);