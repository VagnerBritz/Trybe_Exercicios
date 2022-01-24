import React from 'react';
import './App.css';

const task =(valor) => {
  return (
    <li>{valor}</li>
  )
}
const listaTarefas = ['Acordar', 'levantar', 'correr', 'tomar café', 'estudar: manhã, tarde, noite'];
class App extends React.Component {
  render() {
    return(
      <ul>{listaTarefas.map(tarefa => task(tarefa))}</ul>
    )

  }
}
export default App;