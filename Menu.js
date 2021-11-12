// menu -> escolha e opções

// SE tempoUsuario > 2*tempoPadrao = PIPOCA QUEIMOU
// SE tempoUsuario < tempoPadrao = TEMPO INSUFICIENTE
// SE tempoUsuario > 3*tempoPadrao = KABUM
// SENÃO = PRATO PRONTO

// 1 - PIPOCA

// tempoPadrao = 10s
// tempoUsuario = x

/* let pipoca = '';
let tempoPipoca = 10;
let tempoUsuario = 10; */

/* if (tempoUsuario > 20 && tempoUsuario < 30){
    pipoca = 'Comida queimou';
    return (pipoca),(console.log(pipoca));
}else if (tempoUsuario < 10){
    pipoca = 'Tempo insuficiente';
    return (pipoca),(console.log(pipoca));
}else if (tempoUsuario >= 30){
    pipoca = "Kabuuuummm";
    return (pipoca),(console.log(pipoca));
}else{
    console.log("Prato Pronto");
} */

// 2 - MACARRÃO
// tempoPadrao = 8s
// tempoUsuario = x

/* let macarrao = '';
let tempoMacarrao = 8;
let tempoUsuario = 8; */

/* if (tempoUsuario > 16 && tempoUsuario < 24){
    macarrao = 'Comida queimou';
    return (macarrao),(console.log(macarrao));
}else if (tempoUsuario < 8){
    macarrao = 'Tempo insuficiente';
    return (macarrao),(console.log(macarrao));
}else if (tempoUsuario >= 24){
    macarrao = "Kabuuuummm";
    return (macarrao),(console.log(macarrao));
}else{
    console.log("Prato Pronto");
} */

// 3 - CARNE
//tempoPadrão = 15s
//tempoUsuario = x

/* let carne = '';
let tempoCarne = 15;
let tempoUsuario = 15; */

/* if (tempoUsuario > 30 && tempoUsuario < 45){
    carne = 'Comida queimou';
    return (carne),(console.log(carne));
}else if (tempoUsuario < 15){
    carne = 'Tempo insuficiente';
    return (carne),(console.log(carne));
}else if (tempoUsuario >= 45){
    carne = "Kabuuuummm";
    return (carne),(console.log(carne));
}else{
    console.log("Prato Pronto");
} */

// 4 - FEIJÃO
//tempoPadrao = 12s
//tempoUsuario = x

/* let feijao = '';
let tempoFeijao = 12;
let tempoUsuario = 8; */

/* if (tempoUsuario > 24 && tempoUsuario < 36){
    feijao = 'Comida queimou';
    return (feijao),(console.log(feijao));
}else if (tempoUsuario < 12){
    feijao = 'Tempo insuficiente';
    return (feijao),(console.log(feijao));
}else if (tempoUsuario >= 36){
    feijao = "Kabuuuummm";
    return (feijao),(console.log(feijao));
}else{
    console.log("Prato Pronto");
} */

// 5 - BRIGADEIRO
//tempoPadra = 8s
//tempoUsuario = x

/* let brigadeiro = '';
let tempoBrigadeiro = 8;
let tempoUsuario = 8; */

/* if (tempoUsuario > 16 && tempoUsuario < 24){
    brigadeiro = 'Comida queimou';
    return (brigadeiro),(console.log(brigadeiro));
}else if (tempoUsuario < 8){
    brigadeiro = 'Tempo insuficiente';
    return (brigadeiro),(console.log(brigadeiro));
}else if (tempoUsuario >= 24){
    brigadeiro = "Kabuuuummm";
    return (brigadeiro),(console.log(brigadeiro));
}else{
    console.log("Prato Pronto");
} */

// SE PRATO FOR DIFERENTE DOS VALORES DE 1 - 5 = PRATO INEXISTENTE
let prato1 = 'Pipoca';
let prato2 = 'Maracarrão';
let prato3 = 'Carne';
let prato4 = 'Feijão';
let prato5 = 'Brigadeiro';

switch(prato1, prato2, prato3, prato4, prato5){
    case 'Strogonoff', 'Lasanha', 'Escodidinho', 'Hamburguer', 'Pizza':
        console.log('Não existe este prato');
        break;
    default:
        console.log('Prato inexistente');
}