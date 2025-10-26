document.addEventListener("DOMContentLoaded", function() {
    const mensagem = document.createElement("div");
    mensagem.textContent = "🏐 Bem-vindo ao Destaque CTV!";
    mensagem.classList.add("mensagem-boasvindas");
    document.body.appendChild(mensagem);

    setTimeout(() => {
        mensagem.remove();
    }, 4000);
});

document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("tema");
    const body = document.body;

    botao.addEventListener("click", function() {
        body.classList.toggle("modo-escuro");
        if (body.classList.contains("modo-escuro")) {
            localStorage.setItem("tema", "escuro");
        } else {
            localStorage.setItem("tema", "claro");
        }
    });
    
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        body.classList.add("modo-escuro");
    }
});