const modoSenha = () => {

	mostraEPula (`<center><h1>Jogo da Adivinhação</h1>
		<big>v.0.3</big>
		<hr>
		<h3> Modo Senha </h3>
		Bem vindo ao Modo Senha, nesse modo, irei gerar uma senha de 3 números, os números são de 0 a 9 e não podem se repetir, porém, você deve acertá-los na ordem correta e tendo 9 chances para conseguir a senha completa.
		<br>
		<br>
		Para iniciar digite "senha" na caixa de texto a seguir. Boa sorte! 
		<br>
		<br>
		<input>
		<button> Iniciar </button> 
		<hr>
		</center>`);

	let input = document.querySelector (`input`);
	input.focus();

	
	function acesso () {
		
		if (input.value != "senha") {

			alert(`ACESSO NEGADO! Leia as instruções e tente novamente!`);
			input.value = ``;
			input.focus();

		} else {

			mostraEPula (`<center> Eu ainda estou quebrando a cabeça para programar esse modo hehehe <br>
			Caso tenha encontrado algum problema ou tenha uma sugestão de melhoria, sinta-se livre para me dizer, isso contribui com meus estudos! <br>
			<big> Obrigado por jogar! <3 <big>
			<br><br><br>
			Feito por: Pablo Gibrin <br><br>
			Agradecimento especial: Eraldo Sinicio da Silva Filho </center>`); //ele me deu dicas que acabaram me inspirando na criação dos modos de jogo! 
			input.value = ``;
			input.focus();

		}
	}



	let button = document.querySelector (`button`);
	button.onclick = acesso;
};