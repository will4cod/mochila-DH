import '../App.css'
import { useEffect, useState } from "react";


function Quadrado() {

    let [direcao, setDirecao] = useState('quadrado');
    let [rotacao, setRotacao] = useState(0);

    function girarEsquerda() {
        setDirecao(direcao = 'quadrado')
        setTimeout(() =>{
            setDirecao(direcao = 'quadrado esquerda')
        })
    }

    function girarDireita() {
        setDirecao(direcao = 'quadrado')
        setTimeout(() =>{
            setDirecao(direcao = 'quadrado direita')
        })
        console.log(direcao)
    }

    // function limpar(){
    //     setDirecao(direcao = 'quadrado')
    // }

    function girarTeste(rot){
        //document.querySelector('.quadrado').style.transform="rotate(100deg)";
        let quad = document.querySelector('.quadrado')
        // quad.style.animation = '3s linear 1s infinite running slidein'
        quad.style.transition = 'all ease 3s';
        quad.style.transform=`rotate(${rot}deg)`;
        // quad.style.animation = 'none'
        // setTimeout(
        //     () => 
        //     quad.style.animation="Rodar-esquerda  2s linear"
        //     , 5);
    }

    useEffect(() =>{
        girarTeste(rotacao)
    }, [rotacao])

    return (
      <div className='App-header'>  
        <div className= {direcao}>
            {/* <p>P</p>   */}
        </div>

        <div>
            <button onClick={girarEsquerda}>Esquerda</button>
            <button onClick={girarDireita}>Direita</button>
            <button onClick={() =>{setRotacao(rotacao + 20)}}>teste</button>
        </div>
      </div>
    );
  }
  
  export default Quadrado;