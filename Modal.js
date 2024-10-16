const modaisData = {
    modal1: {
        titulo: 'Catastroph 2022',
        imagem: 'Imagens/Catastroph 1.png',
        corpo: '"Catastroph", um jogo de plataforma 2D que explora ODSs de desenvolvimento sustentável, vida na terra e vida na agua, jogo bem desenvolvido e com o intuito de passar informação de um acontecimento em luara, uma cidade de pesqueiros e de frente com o mar, assim, eu e meu grupo ganhamos como melhor projeto de TCC do ano em tecnologia...'
    },
    modal2: {
        titulo: 'Lility Search Truth',
        imagem: 'Imagens/Lility.png',
        corpo: 'Este é o jogo chamado lility search truth, um jogo side scrolling 2D com lility, sua personagem principal... Lility tem 15 anos e esta atrás de seu querido pai robert, que foi raptado pela mão do governo e setenciado logo após, por descobrir segredos de estado que nunca deveriam ser revelados, nao sabendo do ocorrido, lility embarcar em uma aventura nas cidades inferiores atrás dessas informações, enfrentando desafios terriveis nas cidades e fugindo da guarda real...'
    },
    modal3: {
        titulo: 'Black Brothers',
        imagem: 'Imagens/Pi - Foto 1.png',
        corpo: 'Desenvolvemos o protótipo de um aplicativo intitulado "Black Brothers", que tem a função de ser um app fitness para ser ultilizado por academias e seus alunos com o intuito de armazenar e compartilhar detalhes e progresso de cada usuário dentro de uma academia. Esse projeto se deu através de um estudo de caso real, onde foi realizada um pesquisa pela periferia de Guaianases e encontramos a academia Black Brothers, que nos forneceu dados sobre o seu negócio e como um aplicativo poderia favorecer o serviço oferecido aos clientes. O app que está em desenvolvimento utilizará a linguagem Dart/Flutter e SQL como banco de dados, para trazer funcionalidades de treinos com vídeos e descrições, registro de frequência, agendamento de consultas com nutricionista e inserção de dashboards em sua interface.'
    },
    modal4: {
        titulo: 'Bot feito em Dart',
        imagem: 'Imagens/oi.png',
        corpo: 'Foi desenvolvido em ChatBot pessoal que atende as suas perguntas pessoais, como o horario atual ou qual dia é hoje, um Bot criado com perguntas locais mas simulando assincronismo para "Informações externas" como banco de dados e APIs, aprendendo como manipular informações assincronas com Future e Stream, streams para manipular o tempo de execução do Bot para nao sobrecarregar, construtores e métodos para a criação da verificação de perguntas, assim fazendo uma estrutura para adicionar mais perguntas conforme os seus critérios...'
    },
    modal5: {
        titulo: 'Spotify Front-end',
        imagem: 'Imagens/Spotify.png',
        corpo: 'Foi criado o front-end do famoso Spotify, desenvolvido durante a IMERSAO FRONT-END da Alura, ilustramos o front-end da aplicação real utilizando HTML, CSS, JS e React'
    },
    modal6: {
        titulo: 'Diario de Martin',
        imagem: 'Imagens/FundoPreto.jpg',
        corpo: 'Em breve'
    },
    modal7: {
        titulo: 'Claws Barbers',
        imagem: 'Imagens/FundoPreto.jpg',
        corpo: 'Em breve'
    },
    modalChamar: {
        titulo: 'Contatos',
        imagem: 'Imagens/Icon_tell.png',
        corpo: 'Tell: (11)94864-1187',
        corpo2: 'E-mail: willianchiquinato@hotmail.com',
        corpo3: 'Espero que tenham gostado'
    },
};

const fade = document.getElementById("fade");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalBody = document.getElementById("modal-body");
const modalBody2 = document.getElementById("modal-body2");
const modalBody3 = document.getElementById("modal-body3");

// Função para abrir o modal e atualizar seu conteúdo
const openModal = (modalId) => {
    const modalContent = modaisData[modalId];
    if (modalContent) {
        modalTitle.textContent = modalContent.titulo;
        modalImage.src = modalContent.imagem;
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
