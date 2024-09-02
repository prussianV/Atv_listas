import './App.css';
import Lista from './components/listas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='alunos'>
          <p>Alunos</p>
          <Lista l = "Vitor Brito" l3 = "Back-end" l2="Manutenção" l4="Ministrante"/>
          <Lista l = "Robert Luiz" l3 = "Front-End" l2="Documentação" l4="Ministrante"/>
          <Lista l = "Matrizz" l3 = "Tudo" l2="Tudo" l4="Ministrante"/>
        </div>
        <div className='professores'>
          <p>Professores</p>
            <Lista l = "Bananinha" l3 = "Mr Arduino" l2="Loucura" l4="Professor Nato"/>

        </div>
      </header>
    </div>
  );
}

export default App;

