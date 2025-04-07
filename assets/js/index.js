const productCategories = [
    {
        category: "bibite",
        products: [
            { name: "Coca Lattina", unit: "ct", supplier: "Stefano" },
            { name: "Coca Zero Lattina", unit: "ct", supplier: "Stefano" },
            { name: "Tè Pesca", unit: "ct", supplier: "Stefano" },
            { name: "Tè Limone", unit: "ct", supplier: "Stefano" },
            { name: "Fanta", unit: "ct", supplier: "Stefano" },
            { name: "Ginger Beer", unit: "ct", supplier: "Stefano" },
            { name: "Succo Mango", unit: "", supplier: "metro" },
            { name: "Polpa Mango", unit: "", supplier: "metro" },
            { name: "Acqua Nat", unit: "ct", supplier: "metro" },
            { name: "Acqua Friz", unit: "ct", supplier: "metro" },
            { name: "Succo Arancia", unit: "ct", supplier: "metro" },
            { name: "Succo Melograno", unit: "ct", supplier: "metro" },
            { name: "Succo Ananas", unit: "ct", supplier: "metro" },
            { name: "Pompelmo Soda", unit: "ct", supplier: "metro" },
            { name: "Lemonsoda", unit: "ct", supplier: "metro" }
        ]
    },
    {
        category: "birre",
        products: [
            { name: "Corona Cero", unit: "ct", supplier: "Stefano" },
            { name: "Leffe", unit: "ct", supplier: "Stefano" },
            { name: "Birra Los Amigos", unit: "ct", supplier: "metro" },
            { name: "La Señorita", unit: "ct", supplier: "metro" },
            { name: "El Musico", unit: "ct", supplier: "metro" },
            { name: "Modelo Special", unit: "ct", supplier: "metro" },
            { name: "Los Amantes", unit: "ct", supplier: "metro" },
            { name: "San Miguel", unit: "ct", supplier: "metro" }
        ]
    },
    {
        category: "caffè",
        products: [
            { name: "Caffè", unit: "ct", supplier: "metro" },
            { name: "Caffè Deca", unit: "ct", supplier: "metro" },
            { name: "Caffè Ginseng", unit: "ct", supplier: "metro" }
        ]
    },
    {
        category: "distillati",
        products: [
            { name: "Ron Prohibido", unit: "", supplier: "metro" },
            { name: "Ron Uruapan Charanda", unit: "", supplier: "metro" },
            { name: "Whisky Prieto", unit: "", supplier: "metro" }
        ]
    },
    {
        category: "drink",
        products: [
            { name: "Triplesec", unit: "bt", supplier: "Planet" },
            { name: "Carpano", unit: "bt", supplier: "Planet" },
            { name: "Campari", unit: "bt", supplier: "Planet" },
            { name: "Rum", unit: "ct", supplier: "Planet" },
            { name: "Tequila Espolon Promo", unit: "", supplier: "Planet" }
        ]
    },
    {
        category: "fusto",
        products: [
            { name: "Bombolla", unit: "", supplier: "Planet" },
            { name: "Fusto Bud", unit: "", supplier: "Stefano" },
            { name: "Fusto Coca", unit: "", supplier: "Stefano" }
        ]
    },
    {
        category: "mezcal blanco",
        products: [
            { name: "San Cosme", unit: "", supplier: "metro" },
            { name: "Ojo de Tigre Blanco", unit: "", supplier: "metro" },
            { name: "Bruxo", unit: "", supplier: "metro" },
            { name: "Alipus San Juan", unit: "", supplier: "metro" },
            { name: "Alipus Baltazar", unit: "", supplier: "metro" }
        ]
    },
    {
        category: "mezcal reposado",
        products: [
            { name: "Monte Alban", unit: "", supplier: "metro" },
            { name: "Ojo de Tigre Reposado", unit: "", supplier: "metro" }
        ]
    },
    {
        category: "sciroppi",
        products: [
            { name: "Caramello Salato", unit: "bt", supplier: "Planet" },
            { name: "Schiroppo di Lime", unit: "ct", supplier: "Planet" },
            { name: "ODK Melograno", unit: "bt", supplier: "Planet" },
            { name: "ODK Frutti di Bosco", unit: "bt", supplier: "Planet" },
            { name: "ODK Cocco", unit: "bt", supplier: "Planet" },
            { name: "ODK Ananas", unit: "bt", supplier: "Planet" },
            { name: "Schiroppo di Agave", unit: "bt", supplier: "metro" }
        ]
    },
    {
        category: "tequila añejo",
        products: [
            { name: "Sierra Antigo Añejo", unit: "", supplier: "metro" },
            { name: "1800 Añejo", unit: "", supplier: "metro" },
            { name: "Rooster Rojo Añejo", unit: "", supplier: "metro" }
        ]
    },
    {
        category: "tequila blanco",
        products: [
            { name: "Rooster Rojo", unit: "", supplier: "metro" },
            { name: "Don Ramon Plata", unit: "", supplier: "metro" },
            { name: "Butterfly Cannon Cristalino", unit: "", supplier: "metro" }
        ]
    },
    {
        category: "tequila reposado",
        products: [
            { name: "El Jimador Reposado", unit: "", supplier: "metro" },
            { name: "Altos Reposado", unit: "", supplier: "metro" },
            { name: "Casamigos Reposado", unit: "", supplier: "metro" }
        ]
    },
    {
        category: "vini",
        products: [
            { name: "Axilu", unit: "ct", supplier: "Stefano" },
            { name: "Endrizzi DOC", unit: "ct", supplier: "Stefano" },
            { name: "Gewurztraminer", unit: "ct", supplier: "Stefano" },
            { name: "Sangria", unit: "ct", supplier: "metro" },
            { name: "Lugana", unit: "ct", supplier: "metro" },
            { name: "Bepin", unit: "ct", supplier: "metro" },
            { name: "Teroldego", unit: "ct", supplier: "metro" },
            { name: "Tarapacà", unit: "ct", supplier: "metro" }
        ]
    },
    {
        category: "amari",
        products: [
            { name: "Limoncello", unit: "bt", supplier: "Stefano" },
            { name: "Borghetti", unit: "bt", supplier: "metro" },
            { name: "Alpino", unit: "bt", supplier: "metro" }
        ]
    },
    {
        category: "altri",
        products: [
            { name: "Mirtilli", unit: "", supplier: "metro" },
            { name: "Zucchero x Caffè", unit: "", supplier: "metro" },
            { name: "Cioccolatini", unit: "", supplier: "metro" },
            { name: "Ghiaccio Cubo", unit: "", supplier: "metro" },
            { name: "Ghiaccio Trit", unit: "", supplier: "metro" },
            { name: "Jalapenos", unit: "", supplier: "metro" },
            { name: "Tajin", unit: "", supplier: "metro" },
            { name: "Lime", unit: "ct", supplier: "metro" },
            { name: "Sale Rosa", unit: "", supplier: "metro" },
            { name: "Wood Smoke", unit: "", supplier: "metro" }
        ]
    },
    {
        category: "prova",
        products: [
            { name: "Prova metro", unit: "", supplier: "metro" },
            { name: "Prova stefano", unit: "", supplier: "stefano" },
            { name: "Prova planet", unit: "", supplier: "planet" }
        ]
    }
];

let selectedProducts = [];

// crea categorie
function loadCategories() {
    const categoryContainer = document.getElementById("category-container");
    productCategories.forEach(cat => {
        const button = document.createElement("button");
        button.textContent = cat.category;
        button.className = "category-button";
        button.onclick = () => displayProducts(cat.products);
        categoryContainer.appendChild(button);
    });
}
const allProducts = productCategories.reduce((acc, category) => acc.concat(category.products), []);

document.addEventListener("DOMContentLoaded", () => {
    displayProducts(allProducts);
});

// Eapparire i prodotti secondo la categoria
function displayProducts(products) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Limpa o conteúdo antes de exibir

    products.forEach(prod => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        const productName = document.createElement("span");
        productName.textContent = prod.name;

        const spinnerDiv = document.createElement("div");
        spinnerDiv.className = "custom-spinner";

        // Verificar se o produto já está selecionado e obter a quantidade
        const existingProduct = selectedProducts.find(p => p.name === prod.name);
        const initialQuantity = existingProduct ? existingProduct.quantity : 0;

        // Campo de entrada para exibir/alterar quantidade
        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.className = "custom-number";
        quantityInput.value = initialQuantity; // Preservar a quantidade existente
        quantityInput.min = 0;

        // Ajustar cor com base na quantidade inicial
        updateSpinnerColor(spinnerDiv, initialQuantity);

        const decreaseButton = document.createElement("button");
        decreaseButton.className = "spinner-btn";
        decreaseButton.textContent = "-";
        decreaseButton.onclick = () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 0) {
                quantityInput.value = currentValue - 1;
                updateQuantity(prod, currentValue - 1);
                updateSpinnerColor(spinnerDiv, currentValue - 1);
            }
        };

        const increaseButton = document.createElement("button");
        increaseButton.className = "spinner-btn";
        increaseButton.textContent = "+";
        increaseButton.onclick = () => {
            const currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
            updateQuantity(prod, currentValue + 1);
            updateSpinnerColor(spinnerDiv, currentValue + 1);
        };

        quantityInput.oninput = (e) => {
            const newQuantity = parseInt(e.target.value);
            updateQuantity(prod, newQuantity);
            updateSpinnerColor(spinnerDiv, newQuantity);
        };

        spinnerDiv.appendChild(decreaseButton);
        spinnerDiv.appendChild(quantityInput);
        spinnerDiv.appendChild(increaseButton);

        productDiv.appendChild(productName);
        productDiv.appendChild(spinnerDiv);
        productContainer.appendChild(productDiv);
    });
}

// Atualizar quantidade de um produto
function updateQuantity(product, newQuantity) {
    const existingProduct = selectedProducts.find(p => p.name === product.name);
    if (existingProduct) {
        existingProduct.quantity = newQuantity;
        if (newQuantity <= 0) {
            selectedProducts = selectedProducts.filter(p => p.name !== product.name);
        }
    } else if (newQuantity > 0) {
        selectedProducts.push({ ...product, quantity: newQuantity });
    }
}


function updateSpinnerColor(spinnerElement, quantity) {
    if (quantity > 0) {
        spinnerElement.style.backgroundColor = "#BD59D7"; // Cor desejada
    } else {
        spinnerElement.style.backgroundColor = ""; // Retorna à cor original (transparente)
    }
}

// Filtrar produtos na barra de pesquisa
function searchProduct() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const matchingProducts = [];
    productCategories.forEach(cat => {
        matchingProducts.push(
            ...cat.products.filter(prod => prod.name.toLowerCase().includes(searchQuery))
        );
    });
    displayProducts(matchingProducts);
}

// Limpar barra de pesquisa
function clearSearch() {
    document.getElementById("search-bar").value = "";
    displayProducts(allProducts);
}

// Gerar mensagem principal
function generateMainMessage() {
    let mainMessage = "Ciao Ale, abbiamo bisogno di:\n";

    selectedProducts.forEach(prod => {
        mainMessage += `${prod.name}, ${prod.quantity} ${prod.unit}\n`;
    });

    document.getElementById("main-message").value = mainMessage.trim();
}

// Gerar mensagens por fornecedor
function generateSupplierMessages() {
    const supplierMessages = {
        metro: [],
        stefano: [],
        planet: []
    };

    selectedProducts.forEach(prod => {
        const supplier = prod.supplier.toLowerCase();
        if (supplier === "metro") {
            supplierMessages.metro.push(`${prod.name}, ${prod.quantity} ${prod.unit}`);
        } else if (supplier === "stefano") {
            supplierMessages.stefano.push(`${prod.name}, ${prod.quantity} ${prod.unit}`);
        } else if (supplier === "planet") {
            supplierMessages.planet.push(`${prod.name}, ${prod.quantity} ${prod.unit}`);
        }
    });

    const metroMessage = supplierMessages.metro.length > 0
        ? `Ciao Raffaele, per cortesia, abbiamo bisogno di:\n${supplierMessages.metro.join("\n")}`
        : "";

    const stefanoMessage = supplierMessages.stefano.length > 0
        ? `Ciao Stefano, per cortesia, abbiamo bisogno di:\n${supplierMessages.stefano.join("\n")}`
        : "";

    const planetMessage = supplierMessages.planet.length > 0
        ? `Ciao Ale, abbiamo bisogno di:\n${supplierMessages.planet.join("\n")}`
        : "";

    document.getElementById("metro-message").value = metroMessage;
    document.getElementById("stefano-message").value = stefanoMessage;
    document.getElementById("planet-message").value = planetMessage;
}

// Inicializar página
document.addEventListener("DOMContentLoaded", () => {
    loadCategories();
});

function loadCategories() {
    const categoryContainer = document.getElementById("category-container");

    // Limpa as categorias existentes
    categoryContainer.innerHTML = "";

    productCategories.forEach(cat => {
        const button = document.createElement("button");
        button.textContent = cat.category.toUpperCase();
        button.className = "category-button";

        // Clique na categoria
        button.onclick = () => {
            // Remove a classe 'selected' de todas as categorias
            const allButtons = document.querySelectorAll(".category-button");
            allButtons.forEach(btn => btn.classList.remove("selected"));

            // Adiciona a classe 'selected' ao botão clicado
            button.classList.add("selected");

            // Exibe os produtos da categoria
            displayProducts(cat.products);
        };

        categoryContainer.appendChild(button);
    });
}


function sendToWhatsApp(messageId, phoneNumber) {
    const messageText = document.getElementById(messageId).value; // Capturar o conteúdo da mensagem
    if (messageText.trim() !== "") {
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
        window.open(whatsappLink, "_blank"); // Abre o WhatsApp em uma nova aba
    } else {
        alert("A mensagem está vazia. Por favor, escreva algo antes de enviar."); // Aviso caso a mensagem esteja vazia
    }
}

// funzionalitá tasti finali
// Captura os botões e os contêineres
const prodottiButton = document.querySelector(".prodotti");
const ordiniButton = document.querySelector(".ordini");
const prodottiContainer = document.querySelector(".prodotti-container");
const messagiContainer = document.querySelector(".messagi-container");

// Quando clicar no botão "Prodotti"
prodottiButton.addEventListener("click", () => {
    prodottiContainer.style.display = "block"; // Mostra o prodotti-container
    messagiContainer.style.display = "none"; // Esconde o messagi-container
});

// Quando clicar no botão "Ordini"
ordiniButton.addEventListener("click", () => {
    prodottiContainer.style.display = "none"; // Esconde o prodotti-container
    messagiContainer.style.display = "block"; // Mostra o messagi-container
});
