let cartasUsuario = [comprarCarta(), comprarCarta()];
let cartasComputador = [comprarCarta(), comprarCarta()];

if (confirm(`Bem-vindo ao jogo de BlackJack! \nQuer iniciar uma nova rodada?`)) {

   while ((cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11) || (cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11)) {

      cartasUsuario = [comprarCarta(), comprarCarta()];
      cartasComputador = [comprarCarta(), comprarCarta()];
   }

   let textoCartasUsuario = "";
   let textoCartasComputador = "";
   let pontosComputador = 0;
   let pontosUsuario = 0;
   let respostaUsuario = true;

   while (respostaUsuario) {
      textoCartasUsuario = "";
      pontosUsuario = 0;

      for (let carta of cartasUsuario) {
         pontosUsuario = pontosUsuario + carta.valor;
         textoCartasUsuario = textoCartasUsuario + " " + carta.texto;
      }

      if (pontosUsuario <= 21) {
         respostaUsuario = confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}.\nDesejar comprar mais uma carta ?`);
         if (respostaUsuario === true) {
            cartasUsuario.push(comprarCarta());
         } else {
            respostaUsuario = false
         }
      } else {
         respostaUsuario = false;
      }
   }

   while (pontosComputador <= 21) {
      textoCartasComputador = "";
      pontosComputador = 0;
      cartasComputador.push(comprarCarta());

      for (let carta of cartasComputador) {
         pontosComputador = pontosComputador + carta.valor;
         textoCartasComputador = textoCartasComputador + " " + carta.texto;
      }
   }

   let ganhador = "";

   if (pontosUsuario > pontosComputador && pontosUsuario <= 21) {
      ganhador = "O usuário ganhou!";
   } else if (pontosUsuario <= 21 && pontosComputador > 21) {
      ganhador = "O usuário ganhou!";
   } else if (pontosComputador > pontosUsuario && pontosComputador <= 21) {
      ganhador = "O computador ganhou!";
   } else if (pontosComputador <= 21 && pontosUsuario > 21) {
      ganhador = "O computador ganhou!";
   } else if (pontosUsuario > 21 && pontosComputador > 21) {
      ganhador = "Ambos perderam!";
   } else {
      ganhador = "Empate!"
   }

   alert(`Usuário - cartas: ${textoCartasUsuario} - pontuação: ${pontosUsuario} \nComputador - cartas: ${textoCartasComputador} - pontuação: ${pontosComputador} \n${ganhador}`);

} else {
   alert("O jogo acabou!")
}