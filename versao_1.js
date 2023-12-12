console.log("Boas vindas ao jogo de BlackJack!")

if (confirm("Quer iniciar uma nova rodada?")) {
   let cartasUsuario = [];
   let cartasComputador = [];

   for (let i = 1; i <= 2; i++) {
      const cartaUsuario = comprarCarta();
      cartasUsuario.push(cartaUsuario);
   }

   for (let i = 1; i <= 2; i++) {
      const cartaComputador = comprarCarta();
      cartasComputador.push(cartaComputador);
   }

   const somaCartasUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor;
   const somaCartasComputador = cartasComputador[0].valor + cartasComputador[1].valor;

   if (somaCartasUsuario > somaCartasComputador) {
      console.log(`Usuário - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} - pontuação: ${somaCartasUsuario}`);
      console.log(`Computador - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} - pontuação: ${somaCartasComputador}`);
      console.log(`O usuário ganhou!`);
   } else {
      console.log(`Usuário - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} - pontuação: ${somaCartasUsuario}`);
      console.log(`Computador - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} - pontuação: ${somaCartasComputador}`);
      console.log(`O computador ganhou!`);
   }
} else {
   console.log("O jogo acabou!")
}