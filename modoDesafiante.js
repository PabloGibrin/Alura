const modoDesafiante = () => {

	mostraEPula (`<center><h1>Jogo da Adivinhação</h1>
		<big>v.0.4</big>
		<hr>
		<h3> Modo Desafiante </h3>
		Nesse modo, seu objetivo é acertar o número que vou sortear antes que suas vidas se esgotem!
		<br>
		<br>
		Para começar, digite a seguir o número correspondente ao nível do desafio.
		<br>
		[0] Fácil | [1] Médio | [2] Difícil | [3] Impossível 
		<br>
		<br>
		<input>
		<button> Desafiar </button> 
		<hr>
		</center>`);

	let input = document.querySelector (`input`);
	input.focus();
	
	function dificuldades () {

		if (input.value != input.value * 1) {

			alert(`Coloque uma dificuldade válida.`);
			input.value = ``;
			input.focus();

		} else {

			if (input.value == 0) {
			    let acertou = false;
			    let vidas = 5;
			    let vidasPerdidas= 0;

			    alert(
			      "Pronto, pensei em um número de 0 a 10. Você tem 5 tentativas para acertá-lo!"
			    );
			    const numPensado = sorteioFacil();
			    console.log(numPensado);
			    let chute = perguntarNumero("Adivinhe o número que estou pensando");

			    while (!acertou) {
			      acertou = chute == numPensado;

			      if (acertou == true) {			      				        
			        mostraEPula(`<center> Parabéns, você acertou o número! Você manteve ${vidas} vidas!<br>
				      	O número era ${numPensado}! 
				    	<br> Após alterar a dificuldade, ou não, clique em [Desafiar] para mais uma rodada ou recarregue a página para voltar ao início! <hr></center>`
			        );
			        break;  } else {
			         if (vidasPerdidas > 4 || vidas == 1) {
			        mostraEPula(`<center> Que pena, você perdeu todas as vidas! T-T <br>
				      	O número era ${numPensado}! 
				    	<br> Após alterar a dificuldade, ou não, clique em [Desafiar] para mais uma rodada ou recarregue a página para voltar ao início! <hr></center>`);
			        break;}			      
			        if (chute > numPensado) {
			        	vidas--;
			        	vidasPerdidas++;
			          	alert(`Foi muito alto, tente novamente! ${vidas} vidas restantes!`);}      			          
			         if (chute < numPensado) {
			        	vidas--;
			        	vidasPerdidas++;
			          	alert(`Foi muito baixo, tente novamente! ${vidas} vidas restantes!`);}			           
			             				          
			        }
			      chute = perguntarNumero();
			    }
			  }

			if (input.value == 1) {
			    let acertou = false;
			    let vidas = 10;
			    let vidasPerdidas= 0;

			    alert(
			      "Pronto, pensei em um número de 0 a 100. Você tem 10 tentativas para acertá-lo!"
			    );
			    const numPensado = sorteioMedio();
			    console.log(numPensado);
			    let chute = perguntarNumero("Adivinhe o número que estou pensando");

			    while (!acertou) {
			      acertou = chute == numPensado;

			      if (acertou == true) {			      				        
			        mostraEPula(`<center> Parabéns, você acertou o número! Você manteve ${vidas} vidas!<br>
				      	O número era ${numPensado}! 
				    	<br> Após alterar a dificuldade, ou não, clique em [Desafiar] para mais uma rodada ou recarregue a página para voltar ao início! <hr></center>`
			        );
			        break;  } else {
			         if (vidasPerdidas > 9 || vidas == 1) {
			        mostraEPula(`<center> Que pena, você perdeu todas as vidas! T-T <br>
				      	O número era ${numPensado}! 
				    	<br> Após alterar a dificuldade, ou não, clique em [Desafiar] para mais uma rodada ou recarregue a página para voltar ao início! <hr></center>`);
			        break;}			      
			        if (chute > numPensado) {
			        	vidas--;
			        	vidasPerdidas++;
			          	alert(`Foi muito alto, tente novamente! ${vidas} vidas restantes!`);}      			          
			         if (chute < numPensado) {
			        	vidas--;
			        	vidasPerdidas++;
			          	alert(`Foi muito baixo, tente novamente! ${vidas} vidas restantes!`);}			           
			             				          
			        }
			      chute = perguntarNumero();
			    }
			  }

			  if (input.value == 2) {
			    let acertou = false;
			    let vidas = 5;
			    let vidasPerdidas= 0;

			    alert(
			      "Pronto, pensei em um número de 0 a 100. Você tem 5 tentativas para acertá-lo!"
			    );
			    const numPensado = sorteioDificil();
			    console.log(numPensado);
			    let chute = perguntarNumero("Adivinhe o número que estou pensando");

			    while (!acertou) {
			      acertou = chute == numPensado;

			      if (acertou == true) {			      				        
			        mostraEPula(`<center> Parabéns, você acertou o número! Você manteve ${vidas} vidas!<br>
				      	O número era ${numPensado}! 
				    	<br> Após alterar a dificuldade, ou não, clique em [Desafiar] para mais uma rodada ou recarregue a página para voltar ao início! <hr></center>`
			        );
			        break;  } else {
			         if (vidasPerdidas > 4 || vidas == 1) {
			        mostraEPula(`<center> Que pena, você perdeu todas as vidas! T-T <br>
				      	O número era ${numPensado}! 
				    	<br> Após alterar a dificuldade, ou não, clique em [Desafiar] para mais uma rodada ou recarregue a página para voltar ao início! <hr></center>`);
			        break;}			      
			        if (chute > numPensado) {
			        	vidas--;
			        	vidasPerdidas++;
			          	alert(`Foi muito alto, tente novamente! ${vidas} vidas restantes!`);}      			          
			         if (chute < numPensado) {
			        	vidas--;
			        	vidasPerdidas++;
			          	alert(`Foi muito baixo, tente novamente! ${vidas} vidas restantes!`);}			           
			             				          
			        }
			      chute = perguntarNumero();
			    }
			  }

			  if (input.value == 3) {
			    let acertou = false;
			    let vidas = 5;
			    let vidasPerdidas= 0;

			    alert(
			      "Pronto, pensei em um número de 0 a 1000. Você tem 5 tentativas para acertá-lo!"
			    );
			    const numPensado = sorteioImpossivel();
			    console.log(numPensado);
			    let chute = perguntarNumero("Adivinhe o número que estou pensando");

			    while (!acertou) {
			      acertou = chute == numPensado;

			      if (acertou == true) {			      				        
			        mostraEPula(`<center> Parabéns, você acertou o número! Você manteve ${vidas} vidas!<br>
				      	O número era ${numPensado}! 
				    	<br> Após alterar a dificuldade, ou não, clique em [Desafiar] para mais uma rodada ou recarregue a página para voltar ao início! <hr></center>`
			        );
			        break;  } else {
			         if (vidasPerdidas > 4 || vidas == 1) {
			        mostraEPula(`<center> Que pena, você perdeu todas as vidas! T-T <br>
				      	O número era ${numPensado}! 
				    	<br> Após alterar a dificuldade, ou não, clique em [Desafiar] para mais uma rodada ou recarregue a página para voltar ao início! <hr></center>`);
			        break;}			      
			        if (chute > numPensado) {
			        	vidas--;
			        	vidasPerdidas++;
			          	alert(`Foi muito alto, tente novamente! ${vidas} vidas restantes!`);}      			          
			         if (chute < numPensado) {
			        	vidas--;
			        	vidasPerdidas++;
			          	alert(`Foi muito baixo, tente novamente! ${vidas} vidas restantes!`);}			           
			             				          
			        }
			      chute = perguntarNumero();
			    }
			  }

			}
		}
	let button = document.querySelector (`button`);
	button.onclick = dificuldades;
}
