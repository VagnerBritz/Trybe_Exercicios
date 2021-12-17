let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//Exercícico 1
  //console.log("Bem-vinda,",info.personagem);

//Exercício 2:
info['recorrente'] = 'sim';
//console.log(info.recorrente);

//Exercicio 3
for (const key in info) {
//console.log(key);
}
//Exercicio 4
for (const key in info) {
//console.log(info[key]);
}
//Exercicio 5  
let info2 = {
    personagem: 'Tio Patinhas',
    origem:'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota:'O último MacPatinhas',
    recorrente:'sim',
};
/*let mensagem = [];
for (const key in info) {
    print =(info[key] + ' e ' + info2[key]);
    mensagem.push(print);
}
for (let index = 0; index < mensagem.length -1; index += 1) {
    console.log(mensagem[index]);
}
let ultimo = mensagem.length-1;
if (mensagem[ultimo] == 'sim e sim') {
    console.log("Ambos recorrentes");
}
else {
    console.log(mensagem[ultimo]);
}; */

//Exercício 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ]
  };
  let livro = leitor.livrosFavoritos[0];
  //console.log(livro.titulo);

//console.log('O Livro Favorito de ' + leitor.nome + ' ' + leitor.sobrenome + " se chama '" + livro.titulo + "'");
// Exercício 7

let livrosfav =leitor.livrosFavoritos; //atribui a livrosfav o array livrosFavoritos
livrosfav.push(
{
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
}); //insere este objeto na arraý.
let tit2 = livrosfav[1];

//console.log(tit2.titulo);

console.log(leitor.nome + ' tem ' + livrosfav.length + ' livros favoritos');
