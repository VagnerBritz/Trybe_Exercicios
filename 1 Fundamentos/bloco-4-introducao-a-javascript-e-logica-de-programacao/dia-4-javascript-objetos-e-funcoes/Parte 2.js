/*//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(text) {
    
        let parindromo = text.split("")// transforma a string numa array
        parindromo=parindromo.reverse().//tendo uma array posso usar a funçao reverse que inverte a ordem dos itens 
        parindromo=parindromo.join("");//junta tudo numa string
        return (parindromo == text) ? true : false;
    }
console.log(verificaPalindrome("arara"));
//source: https://bognarjunior.wordpress.com/2018/01/17/exercicios-resolvidos-3/

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
*/
function eMaior(array){
    return Math.max(...array);//
}
let arr=[2,3,6,70,10,1];
console.log(eMaior(arr));