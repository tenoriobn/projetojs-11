const classificacao = document.querySelector(".classificacao");
const paginaDeSelcionarNumero = document.querySelector(".selecionar__numero")
const paginaDeFeedback = document.querySelector(".numero__selecionado");

const classificacaoNumerica = document.querySelector(".classificacao__numerica");
// Aqui foi criado os botões de maneira dinâmica
for (let i = 1; i <= 5; i++) {
    const containerBtn = document.createElement('div');
    containerBtn.innerHTML = `<button class="btn" id="btn" value="${i}">${i}</button>`;
    classificacaoNumerica.appendChild(containerBtn);
}

const btns = document.querySelectorAll(".btn");
const paragrafoClassificacao = document.querySelector(".classificacao__selected");
const btnSubmit = document.querySelector(".btn__classificacao");

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const textoBotao = btn.innerText;
        console.log(textoBotao)
            
        btn.classList.toggle('btn--selecionado');
    
        btns.forEach(novaSelecaoBtn => {
            if (novaSelecaoBtn != btn) {
                novaSelecaoBtn.classList.remove('btn--selecionado');
            }
        });
    });
});


btnSubmit.addEventListener("click", () => {
    const btnSelecionado = document.querySelector('.btn--selecionado');
    if(btnSelecionado) {
        const textoBotao = btnSelecionado.innerText;
        paragrafoClassificacao.innerText = "You selected " + textoBotao + " out of 5";

        paginaDeSelcionarNumero.style.display = "none"
        paginaDeFeedback.style.display = "flex";
    } else {
        alert("Selecione um botão")
    }
})