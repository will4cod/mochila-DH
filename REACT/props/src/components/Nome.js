import '../App.css';
import PropTypes from 'prop-types';

function Nome(props) {
    return (
      <div className="App">
        <p>Olá, {props.nome}</p>
      </div>
    );
  }

  Nome.defaultProps = {
    nome: 'William fernandes'
  }

  Nome.propTypes = {
    nome: PropTypes.string
  }
  
  export default Nome;