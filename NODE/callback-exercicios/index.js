console.log('exercicios callback');

const alunos = [
    { nome: "Ana", notas: [10, 3, 4, 7, 5] },
    { nome: "Luiz", notas: [4, 6, 7, 2, 10] },
    { nome: "Mirian", notas: [3, 5, 7, 5, 3] },
    { nome: "Felipe", notas: [8, 9, 7, 8, 9] },
    { nome: "Carolina", notas: [9, 6, 5, 6, 7] },
    { nome: "Danilo", notas: [5, 7, 4, 8, 8] },
    { nome: "Rafael", notas: [10, 9, 2, 7, 5] },
  ]
  // Usando as funções de (.map, .filter, .reduce)
  // 1 - faça uma função de calculo de média
  function calculoMedia(aluno){

    let medias = aluno.reduce((valor, numero) => valor + numero, 0)
    return medias / aluno.length;
  }

  // 2 - faça uma função de retorne somente os alunos com média maior que 6
  function mediaMaior(aluno, callback){
    if(callback(aluno) > 6){
      console.log('Aprovado');
    }else{
      console.log('Reprovado');
    }
  }
    // mediaMaior(alunos[3].notas,calculoMedia);
  // 3 - faça uma função de adicione uma propriedade objeto aluno chamada "aprovado"
  //     a propriedade só deve ser true se a média do aluno for maior que 7
  function alunoAprovado(aluno, callback){
      if(callback(aluno.notas) > 7){
        listaAlunoAtualizado = {...aluno, situacao: 'aprovado'}
        return listaAlunoAtualizado;
      }else{
        listaAlunoAtualizado = {...aluno, situacao: 'Reprovado'}
        return listaAlunoAtualizado;
      }
  }
  // console.log(alunoAprovado(alunos[3],calculoMedia));

  // 4 - faça uma função que retorne a média da sala
 const mediaSala = calculoMedia(alunos.map(function(array){
    return calculoMedia(array.notas);
  }))

  // console.log(mediaSala);
  // 5 - faça uma função que retorne apenas os alunos com a maior média
  const alunosMediaMaior = alunos.filter(function(array){
    return calculoMedia(array.notas) > 6;
  })

  // console.log(alunosMediaMaior);
  // 6 - faça uma função que retorne apenas os alunos com a menor média
  const alunosMediaMenor = alunos.filter(function(array){
    return calculoMedia(array.notas) < 6;
  })

  console.log(alunosMediaMenor);



