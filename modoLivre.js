const modoLivre = () => {

	mostraEPula (`<center><h1>Jogo da Adivinhação</h1>
		<big>v.0.3</big>
		<hr>
		<h3> Modo Livre </h3>
		Nesse modo, você tem infinitas tentativas para acertar o número que vou sortear, e é você quem decide o número limite do sorteio!
		<br>
		<br>
		Para começar, digite o número limite do sorteio! 
		<br>
		<br>
		<input>
		<button> Iniciar </button> 
		<hr>
		</center>`);

	let input = document.querySelector (`input`);
	input.focus();	

	function verifica () {

		if (input.value != input.value * 1) {

			alert(`Coloque um número válido.`);
			input.value = ``;
			input.focus();

		} else {

			let limite = input.value;
			let numPensado = sorteioLivre(limite);
			console.log (numPensado);
			let chute = perguntarNumero(`Pronto, escolhi um número entre 0 e ${limite}, tente acertar!`);
				  let acertou = false;
				  let tentativas = 1;

				  while (!acertou) {
				    acertou = chute === numPensado;
				    if (acertou) {
				      mostraEPula(`<center> Conseguiu! Você acertou o número em ${tentativas} tentativas. <br>
				      O número era ${numPensado}! 
				      	<br> Clique em [Iniciar] para mais uma rodada ou recarregue a página para voltar ao início! <hr></center>`);
				      break;
				    } else {
				      if (chute > numPensado) {
				        alert("Foi muito alto, tente novamente!");
				        tentativas++;
				      } else {
				        alert("Foi muito baixo, tente novamente!");
				        tentativas++;
				      }
				    }
				    chute = perguntarNumero(`Adivinhe o número que estou pensando de 0 a ${limite}`);
				  }

			}
		}

	let button = document.querySelector (`button`);
	button.onclick = verifica;
};