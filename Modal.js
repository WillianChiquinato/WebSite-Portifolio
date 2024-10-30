const modaisData = {
    modal1: {
        titulo: 'Catastroph 2022',
        imagem: 'Imagens/Pi - Foto 1.png',
        imagem2: 'Imagens/Lility.png',
        imagem3: 'Imagens/Pi - Foto 1.png',
        corpo: '"Catastroph", Um jogo 2d no estilo metroidvania, baseado em Hollow Knight, BloodBorne e Elden Ring. O jogo foi criado com um propósito de conscientizar e divertir o consumidor a partir de uma história baseado em romance epistolar e Souls Like, a narrativa do jogo narra a história de Luara em uma cidade de pescadores que adoram a Lua como uma deusa, a cidade passa por momentos difíceis desde o desaparecimento do sol e da lua nos céus, como consequência do uso indevido da magia proporcionada pelos dois astros. O jogador controlará o gato Astroph, um determinado herói que busca encontrar a sua amiga Beth, para isso o jogador passará por diversos desafios dentro da cidade de Luara. Por conta do desaparecimento do Astro Rei e do Satélite da Terra, a pesca, atividade chave na economia e sustento de Luara, os pescadores locais usaram de uma magia proibida para atrair os peixes, mas essa magia acaba tendo um efeito colateral que transformava as pessoas que consumiam os peixes em animais marinhos aos poucos, criando assim aberrações de humanos amalgamados com peixes, águas-vivas, lagostas etc. A infecção também se alastrou para outros tipos de formas de vidas além dos humanos, os peixes infectados foram consumidos por outros peixes maiores e até mesmo por gaivotas, contaminado assim todo o eco sistema.'
    },
    modal2: {
        titulo: 'Lility Search Truth',
        imagem: 'Imagens/Lility.png',
        imagem2: 'Imagens/Lility.png',
        imagem3: 'Imagens/Lility.png',
        corpo: 'Este é o jogo chamado Lility: Keys of Power, um jogo side scrolling 2D metroidvania com investigação em desenvolvimento, Lility é uma criança de 15 anos e esta atrás de seu querido pai robert, que foi raptado pela mão do governo e setenciado a morte logo após, por descobrir "Segredos de estado" que nunca deveriam ser revelados, não sabendo do ocorrido, lility embarca em uma aventura nas cidades inferiores atrás dessas informações, enfrentando desafios terriveis nas cidades e fugindo da guarda real..., para saber mais clique no link https://willianchiquinato.github.io/Lility_Search_Truth/, esse é o site oficial do jogo para quem quiser saber mais, espero que gostem :)'
    },
    modal3: {
        titulo: 'Black Brothers',
        imagem: 'Imagens/Pi - Foto 1.png',
        imagem2: 'Imagens/Pi - Foto 1.png',
        imagem3: 'Imagens/Pi - Foto 1.png',
        corpo: 'Atualmente, o ramo fitness e das academias tem ganhado cada vez mais espaço na sociedade uma vez que o público tem buscado mais por esse estilo de vida. Entretanto, muitas academias, principalmente as de pequeno e médio porte, não costumam adotar um aplicativo ou sistema para oferecer aos seus alunos. Apresentando uma ideia para essa situação e tendo como base um cliente real, a academia Black Brothers, está sendo desenvolvido um aplicativo que atende a necessidade desse cliente como academia ao fornecer recursos de acompanhamento de treinos e, também o banco de dados para permitir que a armazenamento de informações do aplicativo possa satisfazer o serviço oferecido pelo cliente ao seu público, Em seguida, design de interfaces do aplicativo, os primeiros protótipos das telas se desenvolvem na plataforma Figma e são submetidos à aprovação da empresa. Com base no feedback inicial, há o refinamento do layout para melhorar a usabilidade e iniciar o processo de construção da interface através da programação com um emulador no ambiente de desenvolvimento Flutter através de códigos. Para seguir, tem-se os modelos de banco de dados que contemplam todas as entidades e atributos necessários para a construção física do banco de dados do aplicativo a ser oferecido para a empresa Black Brothers, utilizando o MySQL.'
    },
    modal4: {
        titulo: 'Bot feito em Dart',
        imagem: 'Imagens/oi.png',
        imagem2: 'Imagens/oi.png',
        imagem3: 'Imagens/oi.png',
        corpo: 'Foi desenvolvido um ChatBot pessoal que atende as suas perguntas pessoais, como o horario atual ou qual dia é hoje, um Bot criado com perguntas locais mas simulando assincronismo para "Informações externas" como banco de dados e APIs, aprendendo como manipular informações assincronas com Future e Stream, streams para manipular o tempo de execução do Bot para nao sobrecarregar, construtores e métodos para a criação da verificação de perguntas, assim fazendo uma estrutura para adicionar mais perguntas conforme os seus critérios...'
    },
    modal5: {
        titulo: 'Spotify Front-end',
        imagem: 'Imagens/Spotify.png',
        imagem2: 'Imagens/Spotify.png',
        imagem3: 'Imagens/Spotify.png',
        corpo: 'Foi desenvolvido a interface do Spotify, um software streamer de músicas, analizada a situação, construí uma versão do front-end em HTML5, CSS3 e Javascript...'
    },
    modal6: {
        titulo: 'Diario de Martin',
        imagem: 'Imagens/FundoPreto.jpg',
        imagem2: 'Imagens/FundoPreto.jpg',
        imagem3: 'Imagens/FundoPreto.jpg',
        corpo: 'Em breve'
    },
    modal7: {
        titulo: 'Claws Barbers',
        imagem: 'Imagens/FundoPreto.jpg',
        imagem2: 'Imagens/FundoPreto.jpg',
        imagem3: 'Imagens/FundoPreto.jpg',
        corpo: 'Em breve'
    },
    // Ver essa logica depois
    modalChamar: {
        titulo: 'Contatos',
        imagem: 'Imagens/Icon_tell.png',
        imagem2: 'Imagens/Icon_tell.png',
        imagem3: 'Imagens/Icon_tell.png',
        corpo: 'Tell: (11)94864-1187',
        corpo2: 'E-mail: willianchiquinato@hotmail.com',
        corpo3: 'Espero que tenham gostado'
    },
};

const fade = document.getElementById("fade");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image1");
const modalImage2 = document.getElementById("modal-image2");
const modalImage3 = document.getElementById("modal-image3");
const modalBody = document.getElementById("modal-body");
const modalBody2 = document.getElementById("modal-body2");
const modalBody3 = document.getElementById("modal-body3");

// Função para abrir o modal e atualizar seu conteúdo
const openModal = (modalId) => {
    const modalContent = modaisData[modalId];
    if (modalContent) {
        modalTitle.textContent = modalContent.titulo;
        modalImage.src = modalContent.imagem;
        modalImage2.src = modalContent.imagem2;
        modalImage3.src = modalContent.imagem3;
        modalBody.textContent = modalContent.corpo;
        modalBody2.textContent = modalContent.corpo2;
        modalBody3.textContent = modalContent.corpo3;
        modal.classList.remove("hide");
        fade.classList.remove("hide");
    }
};

// Função para fechar o modal
const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

// Adiciona eventos a todos os botões de abrir modal
document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", () => {
        openModal(button.getAttribute("data-modal"));
    });
});

document.querySelectorAll(".Botao-Chamar").forEach(button => {
    button.addEventListener("click", () => {
        openModal(button.getAttribute("data-modal"));
    });
});

document.querySelectorAll(".modal-contact").forEach(button => {
    button.addEventListener("click", () => {
        openModal(button.getAttribute("data-modal"));
    });
});

// Evento para fechar o modal
document.getElementById("fechar-modal").addEventListener("click", toggleModal);
fade.addEventListener("click", toggleModal);
