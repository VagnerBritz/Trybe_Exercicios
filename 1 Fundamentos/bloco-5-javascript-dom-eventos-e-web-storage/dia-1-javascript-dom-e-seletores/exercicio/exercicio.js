/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()*/

 //1  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)/*
 document.getElementById("exe1").innerText = "Software Engineer - XP inc.";
 //2  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 document.getElementsByClassName("main-content")[0].style.backgroundColor = 'rgb(76,164,109)';
 //3  Crie uma função que mude a cor do quadrado vermelho para branco.
 document.getElementsByClassName('center-content')[0].style.backgroundColor = '#fff';
 //4  Crie uma função que corrija o texto da tag <h1>.
 document.getElementsByClassName('title')[0].innerText="Exercício 5.1 - JavaScript";
 //5  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 let title = document.getElementsByTagName('p');
 for (let i = 0; i < title.length; i++) {
         title[i].style.textTransform= "uppercase";         
 }
 
  //6  Crie uma função que exiba o conteúdo de todas as tags <p> no console.

 let printConsole = document.getElementsByTagName('p');
 for (let i = 0; i < printConsole.length; i++){
         console.log(printConsole);
 }