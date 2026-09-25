const filtros = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".gift-card");

filtros.forEach(filtro => {

    filtro.addEventListener("click", () => {

        // Remove o active de todos os botões
        filtros.forEach(botao => {
            botao.classList.remove("active");
        });

        // Ativa o botão clicado
        filtro.classList.add("active");

        // Pega o texto do botão
        const categoriaSelecionada = filtro.textContent.trim();

        // Mostra ou esconde os cards
        cards.forEach(card => {

            const categoria = card
                .querySelector(".category")
                .textContent
                .trim();

            if (
                categoriaSelecionada === "Todos" ||
                categoria === categoriaSelecionada
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

function copiarPix() {

    const pixKey = document
        .getElementById("pixKey")
        .textContent
        .trim();

    navigator.clipboard.writeText(pixKey);

    const mensagem = document.getElementById("copyMessage");

    mensagem.classList.add("show");

    setTimeout(() => {

        mensagem.classList.remove("show");

    }, 2500);

}