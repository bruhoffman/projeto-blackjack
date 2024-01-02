console.log("Boas vindas ao jogo de BlackJack!")

if (confirm("Quer iniciar uma nova rodada?")) {
   const cartasUsuario1 = comprarCarta();
   const cartasUsuario2 = comprarCarta();
   const cartasComputador1 = comprarCarta();
   const cartasComputador2 = comprarCarta();

   const somaCartasUsuario = cartasUsuario1.valor + cartasUsuario2.valor;
   const somaCartasComputador = cartasComputador1.valor + cartasComputador2.valor;

   if (somaCartasUsuario > somaCartasComputador) {
      console.log(`Usuário - cartas: ${cartasUsuario1.texto} ${cartasUsuario2.texto} - pontuação: ${somaCartasUsuario}`);
      console.log(`Computador - cartas: ${cartasComputador1.texto} ${cartasComputador2.texto} - pontuação: ${somaCartasComputador}`);
      console.log(`O usuário ganhou!`);
   } else if (somaCartasUsuario < somaCartasComputador) {
      console.log(`Usuário - cartas: ${cartasUsuario1.texto} ${cartasUsuario2.texto} - pontuação: ${somaCartasUsuario}`);
      console.log(`Computador - cartas: ${cartasComputador1.texto} ${cartasComputador2.texto} - pontuação: ${somaCartasComputador}`);
      console.log(`O computador ganhou!`);
   } else {
      console.log(`Usuário - cartas: ${cartasUsuario1.texto} ${cartasUsuario2.texto} - pontuação: ${somaCartasUsuario}`);
      console.log(`Computador - cartas: ${cartasComputador1.texto} ${cartasComputador2.texto} - pontuação: ${somaCartasComputador}`);
      console.log(`Empate!`)
   }

} else {
   console.log("O jogo acabou!")
}