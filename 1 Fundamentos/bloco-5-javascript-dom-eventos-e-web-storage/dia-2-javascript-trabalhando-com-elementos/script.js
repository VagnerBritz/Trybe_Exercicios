// 1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let localizarLocal = document.querySelector('body');
let criarH1 = document.createElement('h1');
criarH1.innerText ='Exercício 5.2 - JavaScript DOM';
localizarLocal.appendChild(criarH1);

// 2 Adicione a tag main com a classe main-content como filho da tag body ;

let localizarLocal2 = document.querySelector('body');
let criarMain = document.createElement('main');
criarMain.className = 'main-content';
localizarLocal2.appendChild(criarMain);

// 3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let localizarLocal3 =document.querySelector('.main-content');
let criarSection = document.createElement('section');
criarSection.className = 'center-content';
localizarLocal3.appendChild(criarSection);

// 4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let local4 = document.querySelector('.center-content');
let criarTagP = document.createElement('p');
criarTagP.innerText = 'Algum texto';
local4.appendChild(criarTagP);

// 5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let local5 = document.querySelector('.main-content');
let criarTagSection = document.createElement('section');
criarTagSection.className = 'left-content';
local5.appendChild(criarTagSection);

// 6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let local6 = document.querySelector('.main-content');
let criarTagSection2 = document.createElement('section');
criarTagSection2.className = 'right-content';
local6.appendChild(criarTagSection2);

// 7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let linkImg = document.querySelector('.left-content');
let criarLinkImg = document.createElement('img');
criarLinkImg.className = 'small-image';
criarLinkImg.src ='https://picsum.photos/200' //source: https://cursos.alura.com.br/forum/topico-inserir-imagem-dentro-do-javascript-89494
linkImg.appendChild(criarLinkImg);

// 8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let local8 = document.querySelector('.right-content');
let ulLi=document.createElement('ul');
ulLi.className = 'list-item';
local8.appendChild(ulLi);

const numeros =['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', '10'];

let localEx8_1 = document.  querySelector('.list-item');
 for (let index = 0; index < numeros.length; index += 1) {
      let numero = numeros[index];
      let numeroLi = document.createElement('li');
      numeroLi.innerText = numero;
      localEx8_1.appendChild(numeroLi);
 }

// 9   Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
// let local9 = document.querySelector('.main-content');
//for (let index =0; index >3; index +=1) {
//     let h3 = document.createElement('h3');
//     local9.appendChild(h3);
//}