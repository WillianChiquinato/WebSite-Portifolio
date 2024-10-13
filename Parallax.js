const Elementos = document.querySelectorAll('.Hidden');


// observar para fazer o parallax, se for true ou false
const myObserver = new IntersectionObserver( (observar) => {
    observar.forEach( (Entrada) => {
        // Se estiver observando, ele mostra os elementos
        if(Entrada.isIntersecting) {
            Entrada.target.classList.add('Show');
        } else {
            Entrada.target.classList.remove('Show');
        }
    })
})

Elementos.forEach((Elemento) => {
    myObserver.observe(Elemento)
});


