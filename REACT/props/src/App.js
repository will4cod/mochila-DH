import './App.css';
import Nome from './components/Nome';
import Animes from './components/Anime';

function App() {

  let animes = ['haikyuu', 'naruto', 'sword art online', 'bleach', 'kimetsu no yaiba', 'death note'];


  return (
    <div className="App">
      <header className="App-header">
          <h1>Aula props</h1>
          <Nome nome= {'William fernandes'} />
          <Nome nome="Rafaela"/>
          <Animes itens = {animes} />
      </header>


    </div>
  );
}

export default App;
