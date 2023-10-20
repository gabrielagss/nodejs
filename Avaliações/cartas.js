/**
 * JOGO DE CARTAS 
 */

const color = require ('colors')

const naipes = ['♠'.red, '♥'.black, '♦'.black, '♣'.red] 
const valores = ['A'.magenta, '2'.green, '3'.green, '4'.green, '5'.green, '6'.green, '7'.green, '8'.green, '9'.green, ' 10'.green, 'J'.magenta, 'Q'.magenta, 'K'.magenta]

function desenharCarta(naipe, valor) {
    const carta = `
    ┌─────────┐
    │ ${valor}       │
    │         │
    │    ${naipe}    │
    │         │
    │       ${valor} │
    └─────────┘
    `.bold;
    return carta;
}

// sortear carta aleatória
function sortearCarta() {
    const naipe = naipes[Math.floor(Math.random() * naipes.length)];
    const valor = valores[Math.floor(Math.random() * valores.length)];
    return { naipe, valor };
}

// Sorteie uma carta aleatória
const cartaSorteada = sortearCarta();

// Desenhe a carta e sorteada
const cartaDesenhada = desenharCarta(cartaSorteada.naipe, cartaSorteada.valor);

// Exibir carta
console.log('Carta sorteada:');
console.log(cartaDesenhada);