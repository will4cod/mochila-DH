import '../App.css';

function Animes(props) {
    return (
      <div className="App">

        <p>Recomendações de animes:</p>
        <ol>
            {props.itens.map(item => <li>{item}</li>)}
        </ol>
      </div>
    );
  }
  
export default Animes;