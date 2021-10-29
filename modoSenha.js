const modoSenha = () => {

	mostraEPula (`<center><h1>Jogo da Adivinhação</h1>
		<big>v.0.4</big>
		<hr>
		<h3> Modo Senha </h3>
		Bem vindo ao Modo Senha, nesse modo, irei gerar uma senha de 3 números, os números são de 0 a 9 e não podem se repetir, porém, você deve acertá-los na ordem correta e tendo 9 chances para conseguir a senha completa.
		<br>
		<br>
		Para iniciar digite "senha" na caixa de texto a seguir. Boa sorte! 
		<br>
		<br>
		<input>
		<button> Gerar Senha </button> 
		<hr>
		</center>`);

	let input = document.querySelector (`input`);
	input.focus();

	function sorteioDigitos (total) {
	
		var numPensado = [];
		let inicial = 1;

		while (inicial <= total) {

			let numAleatorio = sorteioSenha();
			let achou = false;
			for(let posicao = 0; posicao < numPensado.length; posicao++){
				if (numPensado[posicao] == numAleatorio) {
					achou = true;
					break;
				}
			} 
			if (achou == false) {
				numPensado.push(numAleatorio);
				inicial++;
			}			
		}

		return numPensado;		
	}

	
	function acesso () {
		
		if (input.value != "senha") {

			alert(`ACESSO NEGADO! Leia as instruções e tente novamente!`);
			input.value = ``;
			input.focus();

		} else {

			let numPensado = sorteioDigitos(3);
			console.log (numPensado);
			let chute = perguntarNumero(`A senha foi gerada! Digite o primeiro número!`);			
			let acertouPrimeiro = false;
			let acertouSegundo = false;
			let acertouTerceiro = false;
			let tentativas = 9;
			let tentativasFalhas = 0;

			while (!acertouPrimeiro) {
			    	acertouPrimeiro = chute == numPensado [0];


				    if (chute == numPensado [0]) {			      				        
				        alert(`Parabéns, você acertou o primeiro digito! Você ainda tem ${tentativas} tentativas! O número era ${numPensado [0]}!`);
				        break;  
				    } else {
				        
					        if (tentativasFalhas > 8 || tentativas == 1) {
					       		mostraEPula(`<center> Que pena, você não conseguiu acertar a senha! T-T <br>
						      	A senha era ${numPensado}! 
						    	<br> Clique em [Gerar Senha] para mais uma rodada ou recarregue a página para voltar ao início! <hr></center>`);
					        	break;
					    	}			      
					        if (chute > numPensado [0]) {
					        	tentativas--;
					        	tentativasFalhas++;
					          	alert(`Foi muito alto, tente novamente! ${tentativas} tentativas restantes!`);
					        }      			          
					        
					        if (chute < numPensado [0]) {
					        	tentativas--;
					        	tentativasFalhas++;
					        	alert(`Foi muito baixo, tente novamente! ${tentativas} tentativas restantes!`);
					        }	
					    
					   	chute = perguntarNumero(`A senha foi gerada! Digite o primeiro número!`);
						
					}
			}
			if (acertouPrimeiro) {

				let chuteSegundo = perguntarNumero(`Agora você deve acertar o segundo número!`);
			
				while (!acertouSegundo) {
			    	acertouSegundo = chuteSegundo == numPensado [1];

				    if (acertouSegundo == true) {			      				        
				        alert(`Parabéns, você acertou o segundo digito! Você ainda tem ${tentativas} tentativas! O número era ${numPensado [1]}!`);
				        break;  
				    } else {
				        
					        if (tentativasFalhas > 8 || tentativas == 1) {
					       		mostraEPula(`<center> Que pena, você não conseguiu acertar a senha! T-T <br>
						      	A senha era ${numPensado}! 
						    	<br> Clique em [Gerar Senha] para mais uma rodada ou recarregue a página para voltar ao início! <hr></center>`);
					        	break;
					    	}					    				      
					        if (chuteSegundo > numPensado [1]) {
					        	tentativas--;
					        	tentativasFalhas++;
					          	alert(`Foi muito alto, tente novamente! ${tentativas} tentativas restantes!`);
					        }      			          
					        
					        if (chuteSegundo < numPensado [1]) {
					        	tentativas--;
					        	tentativasFalhas++;
					        	alert(`Foi muito baixo, tente novamente! ${tentativas} tentativas restantes!`);
					        }	
					    
					   	chuteSegundo = perguntarNumero(`Digite o segundo número!`);
						
					}
				}
			}

			if (acertouSegundo) {
				
				let chuteTerceiro = perguntarNumero(`Agora você deve acertar o último número!`);
			
				while (!acertouTerceiro) {
			    	acertouTerceiro = chuteTerceiro == numPensado [2];

				    if (acertouTerceiro == true) {			      				        
				        mostraEPula(`<center> Parabéns, você acertou a senha! Você manteve ${tentativas} tentativas!<br>
				      	A senha era ${numPensado}! 
				    	<br> Clique em [Gerar Senha] para mais uma rodada ou recarregue a página para voltar ao início! <hr></center>`);
				        break;  
				    } else {
				        
					        if (tentativasFalhas > 8 || tentativas == 1) {
					       		mostraEPula(`<center> Que pena, você não conseguiu acertar a senha! T-T <br>
						      	A senha era ${numPensado}! 
						    	<br> Clique em [Gerar Senha] para mais uma rodada ou recarregue a página para voltar ao início! <hr></center>`);
					        	break;
					    	}					    				      
					        if (chuteTerceiro > numPensado [2]) {
					        	tentativas--;
					        	tentativasFalhas++;
					          	alert(`Foi muito alto, tente novamente! ${tentativas} tentativas restantes!`);
					        }      			          
					        
					        if (chuteTerceiro < numPensado [2]) {
					        	tentativas--;
					        	tentativasFalhas++;
					        	alert(`Foi muito baixo, tente novamente! ${tentativas} tentativas restantes!`);
					        }	
					    
					   	chuteTerceiro = perguntarNumero(`Digite o terceiro número!`);						
					}
				}
			}
			
		}
	}

	let button = document.querySelector (`button`);
	button.onclick = acesso;
};
