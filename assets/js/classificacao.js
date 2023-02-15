const classificacaoNumerica = document.querySelector(".classificacao__numerica");

for (let i = 1; i <= 5; i++) {
    const containerBtn = document.createElement('div');
    containerBtn.innerHTML = `<button class="btn">${i}</button>`;
    classificacaoNumerica.appendChild(containerBtn);
}