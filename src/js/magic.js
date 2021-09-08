const magic = () => {
	const imgen = document.getElementsByTagName('img')[0];
	const span = document.getElementsByClassName('resposta')[0];
	imgen.addEventListener('click', () => {
	    imgen.classList.add("vibra");
	    span.classList.add("vibra");
	    setTimeout(() => { 
		imgen.classList.remove('vibra');
		span.classList.remove("vibra"); 
		resposta(span); 
	    }, 500);
	});
    };
    
    const resposta = (span) => {
	let listaResposta = ["É certo", "É decididamente assim" , "Sem dúvida", "Sim definitivamente", "Você pode contar com ele", "A meu ver, sim", "Provavelmente", "Outlook bom", "Sim", "Sinais apontam que sim", "Resposta nebulosa, tente novament", "Pergunte novamente mais tarde", "Melhor não te dizer agora", "Não posso prever agora", "Concentre-se e pergunte novamente", "Não conte com isso", "Minha resposta é não", "Minhas fontes dizem não", "Outlook não é tão bom", "Muito duvidoso"];
	let randon = Math.floor(Math.random() * 20);
	let resposta = listaResposta[randon]
	console.log(randon)
	span.innerText = resposta
    };
    
    magic();
    