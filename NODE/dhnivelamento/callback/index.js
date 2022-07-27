// const somar = (numeroa, numerob) => numeroa+ numerob;
// const multiplicar = (numeroa,numerob) => numeroa * numerob;

// const calculadora = (numeroa,numerob, operacao) => operacao(numeroa,numerob);


// console.log(calculadora(10,20, multiplicar));
//-----------------------------------------------------------------------
// function adicionarHttp(url) {
//     if(Array.isArray(url) == true){
//         for(let i = 0; i < url.length ;i++){
//             url[i] = "https://" + url[i];
//         }
//         return  url;
//     }else{
//         return  url = "http://" + url;
//     }
// }

// function processar(array,adicionar){
//     return adicionar(array);
// }

// function isArray(o){
// 	return(typeof(o.length)=="undefined")?false:true;
// }

// let tes = 'oi';
// let sites = ["www.google.com","www.yahoo.com","www.globo.com.br"];

// console.log(processar(sites, adicionarHttp));
// console.log(isArray(Array.isArray(tes)));
// --------------------------------------------------------------------
// fazendo iniciais nome 

// function nome (nome, sobrenome){
//     return nome[0] + sobrenome[0];
// }

// console.log(nome("william","fernandes"));

// -----------------------------------------------------------------

const jogos = [
    {nome: 'valorant'},
    {nome: 'mario'},
    {nome: 'apex'},
    {nome: 'resident evil'},
  ]
  
  function bemVindo(nome, callback, jogo){
    console.log('eu sou ' + nome);
    callback(jogo);
  }
  
  function imprimirJogo(jogo){
     console.log('Eu jogo ' + jogo);
  }
  
  bemVindo('felipe sales', imprimirJogo, jogos[3].nome)