import { useState } from "react";


function App() {

 const [contador, setContador] = useState(0);

 function adicionar(){
   setContador(contador + 1);
 }

 function retirar(){
  setContador(contador - 1);
}

  return (
    <div className="App">
      <header className="App-header">
          <h1>{contador}</h1>
          <button onClick={adicionar}>+</button>
          <button onClick={retirar}>-</button>
      </header>
    </div>
  );
}

export default App;
