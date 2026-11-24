
console.log("Portfólio carregado com sucesso!");

// Atualiza automaticamente o ano do rodapé

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

// Fecha o menu após clicar em um link no celular

const linksMenu = document.querySelectorAll(".navbar-nav .nav-link");

const menu = document.getElementById("menu");

linksMenu.forEach(function(link) {
    link.addEventListener("click", function() {

        if (window.innerWidth < 992 && menu.classList.contains("show")) {
            const botao = document.querySelector(".navbar-toggler");

            if (botao) {
                botao.click();
            }
        }

    });
});
