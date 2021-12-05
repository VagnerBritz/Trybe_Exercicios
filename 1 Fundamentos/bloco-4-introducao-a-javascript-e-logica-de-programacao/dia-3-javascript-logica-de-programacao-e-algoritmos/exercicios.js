 
//Questão 1: 
let n= 5; 
for (let index = 0; index < n; index+=1) {
    let print ='';
    for (let ast =0; ast < n; ast+=1) {
        print = print+"*";
    }
    console.log(print);
}

 //Questão 2:
 let n =5;
 for (let index = 0; index < n; index+=1) {
    let print ="";
    for (let ast =0; ast <= index; ast+=1) {
        print = print+"*";
    }
    console.log(print);
} 


//Questão 3:
let n="*"
let espaco=["    ","   ","  "," ",""];
for (let index = 0; index < 5; index+=1) {
    console.log(espaco[index], n);    
     n+="*";
};
// ou assim que é o CORRETO:
// figura ao lado by Yuri de Carvalho;

//Questão 4:
let n="*";
let espaco=["      ","     ","    ","   ","  "," ",""];
//let espDir=["  ",];
for (let index = 0; index < 7; index+=1) {
    console.log(espaco[index],n);
    n+="**";
    
}
// ou assim que é o CORRETO:
// arquivo de Yuri Carvalho
let numero = 5;
for (let horizontal = 1; horizontal <= numero; horizontal += 2) {
    let linha = '';
    for(let vertical = 0; vertical < (numero - horizontal)/2; vertical++) {
        linha = linha + ' ';
    }
    for(let vertical2 = 0; vertical2 < horizontal; vertical2 ++) {
        linha = linha + "*";
        }
    console.log(linha);
};
