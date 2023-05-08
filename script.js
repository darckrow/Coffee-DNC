const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const button = card.querySelector('.card-button');

    card.addEventListener('mouseover', () => {
        button.classList.add('visible');
    });

    card.addEventListener('mouseout', () => {
        button.classList.remove('visible');
    });
});

// Seleciona o botão "Funcionamento" e o modal
const btnFuncionamento = document.getElementById("funcionamento");
const modal = document.getElementById("myModal");

// Seleciona o botão de fechar e adiciona um evento de clique
const closeBtn = modal.querySelector(".button-close");
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Adiciona um evento de clique no botão "Funcionamento"
btnFuncionamento.addEventListener("click", () => {
    modal.style.display = "block";
});