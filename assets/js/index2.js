document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".loginBtn").addEventListener("click", function() {
        window.location.href = "utente/preleva.html"; // Redireciona para a página desejada
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            // Remove a classe 'active' de todos os itens
            menuItems.forEach(i => i.classList.remove("active"));

            // Adiciona a classe 'active' ao item clicado
            this.classList.add("active");
        });
    });
});

