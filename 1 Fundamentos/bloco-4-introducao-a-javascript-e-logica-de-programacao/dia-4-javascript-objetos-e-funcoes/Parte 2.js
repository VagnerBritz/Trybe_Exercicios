/*//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(text) {
    
        let parindromo = text.split("")// transforma a string numa array
        parindromo=parindromo.reverse().//tendo uma array posso usar a funçao reverse que inverte a ordem dos itens 
        parindromo=parindromo.join("");//junta tudo numa string
        return (parindromo == text) ? true : false;
    }
//console.log(verificaPalindrome("pessego"));
//source: https://bognarjunior.wordpress.com/2018/01/17/exercicios-resolvidos-3/

 //2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
 
 function eMaior(array){
     return Math.max(...array);//
 }
 let arr=[2,3,6,70,10,1];
// console.log(eMaior(arr));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
const array = [2, 4, 6, 7, 10, 0, -3]; 

function eMenor(array) {
    return Math.min(array);
}
//console.log(eMenor(...array));
*/
//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
const arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorNome(arrayNomes) {
    for(let index = 0; index < arrayNomes.length; index += 1) {
        let nomemaior = arrayNomes[index].split;

            if(nomemaior > indice) {
                indice = nomemaior;
                maiorNomeE = arrayNomes[index];
                
            }
    }
}
console.log(maiorNome(arrayNomes));