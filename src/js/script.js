let escolha = 0;
const limpaTela = () => {
    const screen = document.querySelector('.screen');
    screen.innerText = ''
};

const pegaSeletor = (clase) => {
    let button = document.getElementsByClassName(clase);
    return button
};

const numeroRandon = (x) => {
    return Math.floor(Math.random() * x);
};

const geradorDeItens = (lista, tag, clas) => {
    const screen = document.querySelector('.screen');

    for (let i = 0; i < lista.length; i++) {    

        let newIten = document.createElement(tag);
        let valorBtn = document.createTextNode(lista[i]);
        newIten.appendChild(valorBtn);
        newIten.classList.add(clas);
        
        if (tag == "button"){
            newIten.id = clas+i;
        }
        screen.appendChild(newIten);
    };
};

const adicinaEvento = (iten) => {
    for (let i = 0; i < iten.length; i++) {
        iten[i].addEventListener('click', PegaId);
    };
};

const PegaId = (event) => {
    let btn = event.target;
    let id = btn.id
    console.log(id)

    if (escolha == 0){
        retornoMenu(id);
    };
    if (escolha == 1) {
        verificarVencedor(id);
    }
    if (id == 'voltar'){
        let placar = pegaSeletor('placar');
        placar[0].classList.add('hidden');
        limpaTela();
        paginaInicial();
    }

};

const retornoMenu = (id) => {
    if (id == 'button_start0'){
        limpaTela();
        jokempo();
    }
    if (id == 'button_start1'){
        limpaTela();
        magicBol();
    }
    if (id == 'button_start2'){
        limpaTela();
        cacaNiquel();
    }
    if (id == 'button_start3'){
        limpaTela();
        cacaPalavra();
    }
};

const verificarVencedor = (id) => {
    let pc = numeroRandon(3);
    let androidSpan = pegaSeletor('android-pontos');
    let android = Number(androidSpan[0].innerText);
    let homemSpan = pegaSeletor('homem-postos');
    let homem = Number(homemSpan[0].innerText)
    
    if (id == "jokempo0"){
        if (pc == 0) {
        };
        if (pc == 1) {
            android++;
            androidSpan[0].innerHTML = android;
        };
        if (pc == 2) {
            homem++;
            homemSpan[0].innerHTML = homem;
        };
        jokempo();
    };
    if (id == "jokempo1"){
        if (pc == 0) {
            homem++;
            homemSpan[0].innerHTML = homem;
        };
        if (pc == 1) {
        };
        if (pc == 2) {
            android++;
            androidSpan[0].innerHTML = android;
        };
        jokempo();
    };
    if (id == "jokempo2"){
        if (pc == 0) {
            android++;
            androidSpan[0].innerHTML = android;
        };
        if (pc == 1) {
            homem++;
            homemSpan[0].innerHTML = homem;
        };
        if (pc == 2) {
        };
        jokempo();
    };
};

const paginaInicial = () => {
    escolha = 0;
    const games = ["Pedra, Papel e Tesoura", "Magic 8-Ball", "Máquina Caça-Níquel", "Caça-palavras"];

    /* geradorDeItens(games, 'button', 'button_start'); */

    let button = pegaSeletor('button_start');

    adicinaEvento(button);
};

const jokempo = () => {
    let voltar = pegaSeletor('voltar');
    let placar = pegaSeletor('placar');
    placar[0].classList.remove('hidden');
    const listaJokempo = ["PEDRA", "PAPEL", "TESOURA"];
    let button = pegaSeletor('jokempo');
    
    escolha = 1;
    limpaTela()
    geradorDeItens(listaJokempo, 'button', "jokempo");
    adicinaEvento(voltar);
    adicinaEvento(button);
};

const magicBol = () => {
    console.log('magicBol')
}

const cacaNiquel = () => {
    console.log('cacaNiquel')
}

const cacaPalavra = () => {
    console.log('cacaPalavra')
}
