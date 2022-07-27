// let dia = 'sexta';

// if(dia == 'domingo'){
//     console.log("Vou para praia!");
// }else if(dia == "sexta"){
//     console.log("Vou para o cinema!");
// }else{
//     console.log("Fico em casa!");
// }


//if ternário
// (7>10) ? console.log('maior') : console.log('menor');

let videogame = 'playstation';

// condição ? resultado verdadeiro : resultado falso 
// let resultado = (videogame == 'xbox' || videogame == 'playstation')? 'comprar' : 'não comprar';

//console.log(resultado);

//switch (condição)
switch(videogame){
    //casos 
    case 'xbox':
        console.log("jogar gears");
        //
    break;

    case 'playstation':
        console.log('jogar god of war');
    break;  
    
    case 'nintendo':
        console.log('jogar mario');
    break;
    //caso não tenha um caso que atenda a condição informada 
    default:
        console.log('não jogar ');
}


// let idade = 8;

// switch(idade){
//     case 10:
//         console.log('tem 10 anos');
//         break;
    
//     case 5:
//         console.log('tem 5 anos');
//         break;

//     case 5:
//         console.log('tem 8 anos');
//     break;

//     case 8:
//         console.log('ta chegando na adolescencia');
    
//     case 9:
//         console.log('ta chegando na adolescencia');
//     break;

//     default:
//         console.log('idade invalida!');

// }