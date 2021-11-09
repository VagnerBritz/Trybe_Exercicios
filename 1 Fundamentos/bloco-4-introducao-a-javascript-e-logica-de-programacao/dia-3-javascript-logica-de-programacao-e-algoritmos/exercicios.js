 /*
 //Questão 1:
let n= 5;
for (let index = 0; index < n; index+=1) {
    console.log("*****");
    
}
 
 //Questão 2:
 let n="*";
 for (let index = 0; index < 5; index++) {
     
     console.log(n);    
     n+="*";
}
//Questão 3:
let n="*"
let espaco=["    ","   ","  "," ",""];
 for (let index = 0; index < 5; index+=1) {
     
     console.log(espaco[index], n);    
     n+="*";
    }
*/
//Questão 4:
let n="*";
let espaco=["      ","     ","    ","   ","  "," ",""];
//let espDir=["  ",];
for (let index = 0; index < 7; index+=1) {
    console.log(espaco[index],n);
    n+="**";
    
}













/*
let ingredientes = ["queijo","presunto","maionese"];
let qtd =10;
let sacola =[];
ingredientes.splice()

for (let index = 0; index < 3; index+=1) {
    //console.log("executou fora", index);
    let pao=[];

    for (let index = 0; index < ingredientes.length; index+=1) {
       // console.log("executou dentro", index);
       pao.push(ingredientes[index])
        
    }
    sacola.push(pao);
}
console.log("sacola: ", sacola);

let numeros= [1,2,3,4,5,6,7,8]
let retorno = numeros.indexOf('2');
numeros.splice(retorno,1);
console.log(numeros);

// EXEMPLO FOR DENTRO DE FOR
let qtd = 10;
let ingredientes = ["queijo","presunto","maionese","coca-cola"];
let sacola = [];
for(let index = 0; index < 10; index+=1){
//console.log('exectuou fora: ', index)

let pao = [];

for( let index = 0; index < ingredientes.length; index+=1){
// console.log('exectuou dentro: ', index);
pao.push(ingredientes[index])
}
sacola.push(pao);

} 
console.log("sacola: ", sacola);*/