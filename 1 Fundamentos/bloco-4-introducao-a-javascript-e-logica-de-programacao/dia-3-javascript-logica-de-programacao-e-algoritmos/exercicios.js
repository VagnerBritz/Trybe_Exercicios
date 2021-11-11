 
/* //Questão 1: 
let n= 5; 
//consultei as respostas do colega Bruno Zoline, em 11/11, no slack

for (let index = 0; index < n; index+=1) {
    let print ="";
    for (let ast =0; ast < n; ast+=1) {
        print = print+"*";
    }
    console.log(print);
}

 */
 //Questão 2:
 let n =5;
 for (let index = 0; index < n; index+=1) {
    let print ="";
    for (let ast =0; ast <= index; ast+=1) {
        print = print+"*";
    }
    console.log(print);
} 

/*
//Questão 3:
let n="*"
let espaco=["    ","   ","  "," ",""];
 for (let index = 0; index < 5; index+=1) {
     
     console.log(espaco[index], n);    
     n+="*";
    }

//Questão 4:
let n="*";
let espaco=["      ","     ","    ","   ","  "," ",""];
//let espDir=["  ",];
for (let index = 0; index < 7; index+=1) {
    console.log(espaco[index],n);
    n+="**";
    
}
*/