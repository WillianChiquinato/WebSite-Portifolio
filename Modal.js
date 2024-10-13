const modaisData = {
    modal1: {
        titulo: 'Catastroph 2022',
        imagem: 'Imagens/Pi - Foto 1.png',
        corpo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, illo quisquam minima veritatis, maiores laudantium ex commodi voluptatem eius id at beatae autem.Cum optio corporis, minima ut culpa reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque optio voluptatibus reiciendis esse delectus explicabo quae eius? Nesciunt perspiciatis inventore aspernatur sint unde necessitatibus atque cumque laboriosam aut doloribus!, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, illo quisquam minima veritatis, maiores laudantium ex commodi voluptatem eius id at beatae autem.Cum optio corporis, minima ut culpa reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque optio voluptatibus reiciendis esse delectus explicabo quae eius? Nesciunt perspiciatis inventore aspernatur sint unde necessitatibus atque cumque laboriosam aut doloribus!, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, illo quisquam minima veritatis, maiores laudantium ex commodi voluptatem eius id at beatae autem.Cum optio corporis, minima ut culpa reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque optio voluptatibus reiciendis esse delectus explicabo quae eius? Nesciunt perspiciatis inventore aspernatur sint unde necessitatibus atque cumque laboriosam aut doloribus!, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, illo quisquam minima veritatis, maiores laudantium ex commodi voluptatem eius id at beatae autem.Cum optio corporis, minima ut culpa reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque optio voluptatibus reiciendis esse delectus explicabo quae eius? Nesciunt perspiciatis inventore aspernatur sint unde necessitatibus atque cumque laboriosam aut doloribus!'
    },
    modal2: {
        titulo: 'Lility Search Truth',
        imagem: 'Imagens/Pi - Foto 1.png',
        corpo: 'Informações detalhadas sobre o projeto Lility Search Truth.'
    },
    modal3: {
        titulo: 'Black Brothers',
        imagem: 'Imagens/Pi - Foto 1.png',
        corpo: 'Informações detalhadas sobre o projeto Black Brothers.'
    },
    modal4: {
        titulo: 'Bot feito em Dart',
        imagem: 'Imagens/Pi - Foto 1.png',
        corpo: 'Informações detalhadas sobre o projeto feito em DART.'
    },
    modal5: {
        titulo: 'Spotify Front-end',
        imagem: 'Imagens/Pi - Foto 1.png',
        corpo: 'Informações detalhadas sobre o projeto Front-end.'
    },
    modal6: {
        titulo: 'Diario de Martin',
        imagem: 'Imagens/Pi - Foto 1.png',
        corpo: 'Em breve'
    },
    modal7: {
        titulo: 'Claws Barbers',
        imagem: 'Imagens/Pi - Foto 1.png',
        corpo: 'Em breve'
    },
};

const fade = document.getElementById("fade");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalBody = document.getElementById("modal-body");

// Função para abrir o modal e atualizar seu conteúdo
const openModal = (modalId) => {
    const modalContent = modaisData[modalId];
    if (modalContent) {
        modalTitle.textContent = modalContent.titulo;
        modalImage.src = modalContent.imagem;
        modalBody.textContent = modalContent.corpo;
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

// Evento para fechar o modal
document.getElementById("fechar-modal").addEventListener("click", toggleModal);
fade.addEventListener("click", toggleModal);
