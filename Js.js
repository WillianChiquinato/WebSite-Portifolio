var btn = document.getElementById('toggle-button');

btn.addEventListener('click', function() {
    var krl = document.querySelector('.Sobre-Mim');
    var imagemBtn = document.getElementById("ImagemBtn");
    krl.classList.toggle('active');

    if (krl.classList.contains('active')) {
        return imagemBtn.src = "Imagens/Seta cima.png";
    }
    else
    {
        return imagemBtn.src = "Imagens/Seta baixo.png";
    }
});