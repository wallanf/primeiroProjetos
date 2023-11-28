alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');
console.log('valor do chute:', chute )

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    console.log('resultado da comparação',chute == numeroSecreto)
    alert( 'isso aí! você descobriu o número secreto '+ numeroSecreto);
} else {;
    console.log("valor numero secreto",numeroSecreto )
    alert('o numero secreto era ' + numeroSecreto);
}