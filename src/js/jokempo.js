const pegaSeletor = (clase) => {
	let button = document.getElementsByClassName(clase);
	return button
    };
    
    const numeroRandon = () => {
	return Math.floor(Math.random() * 3);
    };
    
    const adicinaEvento = (iten) => {
	for (let i = 0; i < iten.length; i++) {
	    iten[i].addEventListener('click', pegaValores);
	};
    };
    
    const pegaValores = (id) => {
	let androidSpan = pegaSeletor('android-pontos')[0];
	let homemSpan = pegaSeletor('homem-pontos')[0];
    
	let divPlayers = [homemSpan,androidSpan]
	let minhaEscolha = id.target.alt;
    
	verificarVencedor(minhaEscolha, divPlayers)
    };
    
    const verificarVencedor = (minhaEscolha, divPlayers) => {
	let lista = ["pedra", "papel", "tesoura"];
	let pc = lista[numeroRandon()];
	let vencedor;
	mostraEscolhas(minhaEscolha, pc);
    
	if (pc === minhaEscolha){
	    vencedor = 3;
	}
    
	if (minhaEscolha == "pedra"){
	    if (pc == "papel") {
		vencedor = 1;
	    };
	    if (pc == "tesoura") {
		vencedor = 0;
	    };
	};
    
	if (minhaEscolha == "papel"){
	    if (pc == "pedra") {
		vencedor = 0;
	    };
	    if (pc == "tesoura") {
		vencedor = 1;
	    };
	};
    
	if (minhaEscolha == "tesoura"){
	    if (pc == "pedra") {
		vencedor = 1;
	    };
	    if (pc == "papel") {
		vencedor = 0;
	    };
	};
    
	if (vencedor !== 3){
	    let postos = Number(divPlayers[vencedor].innerText) + 1;
	    divPlayers[vencedor].innerText = postos;
	    vencedorRodada(divPlayers, vencedor)
	}
    };
    
    const mostraEscolhas = (minha , pc) => {
	let divImg = pegaSeletor('escolha');
	divImg[0].src = `src/img/${minha}.png`
	divImg[1].src = `src/img/${pc}.png`
    }
    
    const vencedorRodada = (player, vencedor) => {
	let divImg = pegaSeletor('jogador');
	divImg[vencedor].classList.add('vibra')
	setTimeout(() => { divImg[vencedor].classList.remove('vibra');}, 500);
    
    }
    
    const jokempo = () => {
	let button = pegaSeletor('player_button');
	adicinaEvento(button)
    };
    
    jokempo();