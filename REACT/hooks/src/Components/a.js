import { useState } from "react";

function A() {

    let [estado, setEstado] = useState('A')

    return (
      <div className="A">
        <br />
        <h1>{estado}</h1>
        <br />
        <button onClick={() => setEstado(estado += 'A')}>+</button>
      </div>
    );
  }
  
  export default A;
  