document.addEventListener('DOMContentLoaded', () => {
    const gerarCartasBtn = document.getElementById('gerarcartas');
    const cartaImagem = document.getElementById('cartaImagem');
    const cartaImagem2 = document.getElementById('cartaImagem2');

    const cartas = [
        "dados/dado_1-removebg-preview.png",
        "dados/dado_2-removebg-preview.png",
        "dados/dado_3-removebg-preview.png",
        "dados/dado_4-removebg-preview.png",
        "dados/dado_5-removebg-preview.png",
        "dados/dado_6-removebg-preview.png",
    ];

    if (gerarCartasBtn && cartaImagem && cartaImagem2) {
        gerarCartasBtn.addEventListener('click', () => {
            let indiceAleatorio1 = Math.floor(Math.random() * cartas.length);
            let indiceAleatorio2;
            do {
                indiceAleatorio2 = Math.floor(Math.random() * cartas.length);
            } while (indiceAleatorio2 === indiceAleatorio1);

            cartaImagem.src = cartas[indiceAleatorio1];
            cartaImagem2.src = cartas[indiceAleatorio2];
        });
    } else {
        console.error('Elementos gerarCartas, cartaImagem ou cartaImagem2 não encontrados!');
    }
});