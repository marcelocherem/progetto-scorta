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
            { name: "Lime", unit: "ct", supplier: "Planet" },
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
    }
];


// Funzione di generazione di categorie
function generateCategories() {
    const container = document.getElementById('category-container');
    
    productCategories.forEach(category => {
        // Crea button categorie
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');
        
        const categoryButton = document.createElement('button');
        categoryButton.classList.add('category');
        categoryButton.textContent = category.category;
        categoryButton.setAttribute('onclick', `toggleDropdown('${category.category}')`);
        
        // Crea contenuto di categoria
        const dropdownContent = document.createElement('div');
        dropdownContent.classList.add('dropdown-content');
        dropdownContent.setAttribute('id', category.category);
        dropdownContent.style.display = "none"; // display inizia invisibile
        
        // Crea i prodotti dentri di categorie
        category.products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            
            productElement.innerHTML = `
                <span>${product.name}</span>
                <div class="custom-spinner">
                    <button class="spinner-btn" onclick="decrementValue(this)">-</button>
                    <input type="number" class="custom-number" value="0" min="0">
                    <button class="spinner-btn" onclick="incrementValue(this)">+</button>
                </div>
            `;
            dropdownContent.appendChild(productElement);
        });
        
        // Add button content
        dropdown.appendChild(categoryButton);
        dropdown.appendChild(dropdownContent);
        container.appendChild(dropdown);
    });
}

// Funzione fare funzionare dropdown
function toggleDropdown(categoryId) {
    const dropdownContent = document.getElementById(categoryId);
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
        dropdownContent.style.display = "flex";
    } else {
        dropdownContent.style.display = "none";
    }
}

// Funzione per quantità
function updateSpinnerColor(input) {
    const spinner = input.parentElement;
    const value = parseInt(input.value, 10) || 0;

    if (value > 0) {
        spinner.classList.add('greater');
    } else {
        spinner.classList.remove('greater');
    }
}
function incrementValue(button) {
    const input = button.parentElement.querySelector('input[type="number"]');
    input.value = parseInt(input.value) + 1;
    updateSpinnerColor(input);
}

function decrementValue(button) {
    const input = button.parentElement.querySelector('input[type="number"]');
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
        updateSpinnerColor(input);
    }
}

//funzione messagi prova
function saveSelection() {
    const products = document.querySelectorAll('.product');
    let result = "Ciao Ale, ecco la lista delle ordini: \n";
    let hasSelectedProduct = false; // Flag

    products.forEach(product => {
        const name = product.querySelector('span').innerText; // Nome prodotto no HTML
        const quantity = parseInt(product.querySelector('input').value, 10) || 0; // Quantità input
        
        // cerca il prodotto che corrisponde al array `productCategories`
        let productData;
        for (const category of productCategories) {
            productData = category.products.find(p => p.name === name);
            if (productData) break; // se trovato, si ferma
        }

        if (productData && quantity > 0) {
            const unit = productData.unit || "";
            result += `${name}, ${quantity} ${unit} \n`;
            hasSelectedProduct = true;
        }
    });

    if (!hasSelectedProduct) {
        result = "Selezionare prodotti";
    }

    document.getElementById('output').value = result;
}

// Funzione messagi separati
function generateMessages() {
    const now = new Date();
    const greeting = now.getHours() >= 12 ? "buonasera" : "buongiorno";

    // messagi vuote prima di iniziare
    let planetMessage = `Ciao Raffaele, ${greeting}, per cortesia, abbiamo bisogno di: \n`;
    let stefanoMessage = `Ciao Stefano, ${greeting}, per cortesia, abbiamo bisogno di: \n`;
    let metroMessage = `Ciao Ale, abbiamo bisogno di: \n`;

    // Flags per cercare se ogni messagio ha dei prodotti
    let hasPlanetProducts = false;
    let hasStefanoProducts = false;
    let hasMetroProducts = false;

    productCategories.forEach(category => {
        const dropdownContent = document.getElementById(category.category);
        
        if (!dropdownContent) {
            console.warn(`Categoria ${category.category} não encontrada no HTML.`);
            return;
        }
        
        dropdownContent.querySelectorAll('.product').forEach(product => {
            const name = product.querySelector('span').innerText; // Nome prodotto
            const quantityInput = product.querySelector('input[type="number"]');
            const quantity = parseInt(quantityInput.value, 10) || 0;
            
            // cerca prodotto nel array `productCategories`
            const productData = category.products.find(p => p.name === name);
            if (productData && quantity > 0) {
                const { supplier, unit } = productData; // fornitore e unità

                if (supplier === "Planet") {
                    planetMessage += `${name}, ${quantity} ${unit} \n`;
                    hasPlanetProducts = true;
                } else if (supplier === "Stefano") {
                    stefanoMessage += `${name}, ${quantity} ${unit} \n`;
                    hasStefanoProducts = true;
                } else if (supplier === "metro") {
                    metroMessage += `${name}, ${quantity} ${unit} \n`;
                    hasMetroProducts = true;
                }
            }
        });
    });

    // aggiorna le casse di messagi se ci sono prodotti
    document.getElementById('planetMessage').value = hasPlanetProducts ? planetMessage : "";
    document.getElementById('enterpriseMessage').value = hasStefanoProducts ? stefanoMessage : "";
    document.getElementById('metroMessage').value = hasMetroProducts ? metroMessage : "";
}


document.addEventListener("DOMContentLoaded", () => {
    generateCategories();
});

// Funzione searchbar
function searchProduct() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ""; // pulire spazio

    if (!searchTerm) return; // non fa niente se il campo è vuoto

    productCategories.forEach(category => {
        category.products.forEach(product => {
            if (product.name.toLowerCase().includes(searchTerm)) {
                const resultElement = document.createElement('div');
                resultElement.classList.add('product-search');

                // Identificare il prodottocorrispondente nella tabella principale
                const mainProduct = Array.from(document.querySelectorAll('.product')).find(p => {
                    return p.querySelector('span').innerText === product.name;
                });

                const mainInput = mainProduct
                    ? mainProduct.querySelector('input[type="number"]')
                    : { value: 0 };

                // Crea il elemento del risultato
                resultElement.innerHTML = `
                    <span>${product.name}</span>
                    <div class="custom-spinner">
                        <button class="spinner-btn" onclick="decrementSearchValue('${product.name}')">-</button>
                        <input 
                            type="number" 
                            class="custom-number" 
                            value="${mainInput.value}" 
                            min="0" 
                            oninput="syncQuantity('${product.name}', this.value)">
                        <button class="spinner-btn" onclick="incrementSearchValue('${product.name}')">+</button>
                    </div>
                `;
                searchResults.appendChild(resultElement);
            }
        });
    });
}

// Funzione per pulire la barra di ricerca
function clearSearch() {
    document.getElementById('search-bar').value = ""; // svuota campo
    document.getElementById('search-results').innerHTML = ""; // svuota i risultati
}

// sincronizzare tabelle
function syncQuantity(productName, value) {
    // Identificare i prodotti nella principale
    const mainProduct = Array.from(document.querySelectorAll('.product')).find(p => {
        return p.querySelector('span').innerText === productName;
    });

    if (mainProduct) {
        const mainInput = mainProduct.querySelector('input[type="number"]');
        mainInput.value = value; // Sincronizzare il valore della tabella principale
    }
}

// aggiornarre tabella principale
function incrementSearchValue(productName) {
    const mainProduct = Array.from(document.querySelectorAll('.product')).find(p => {
        return p.querySelector('span').innerText === productName;
    });

    if (mainProduct) {
        const mainInput = mainProduct.querySelector('input[type="number"]');
        mainInput.value = parseInt(mainInput.value) + 1; 

        const searchInput = Array.from(document.querySelectorAll('#search-results .product-search')).find(p => {
            return p.querySelector('span').innerText === productName;
        }).querySelector('input[type="number"]');

        if (searchInput) {
            searchInput.value = mainInput.value; 
            updateSpinnerColor(searchInput);
        }

        updateSpinnerColor(mainInput);
    }
}


function decrementSearchValue(productName) {
    
    const mainProduct = Array.from(document.querySelectorAll('.product')).find(p => {
        return p.querySelector('span').innerText === productName;
    });

    if (mainProduct) {
        const mainInput = mainProduct.querySelector('input[type="number"]');
        if (parseInt(mainInput.value) > 0) {
            mainInput.value = parseInt(mainInput.value) - 1; 

           
            const searchInput = Array.from(document.querySelectorAll('#search-results .product-search')).find(p => {
                return p.querySelector('span').innerText === productName;
            }).querySelector('input[type="number"]');

            if (searchInput) {
                searchInput.value = mainInput.value;
                updateSpinnerColor(searchInput);
            }

            
            updateSpinnerColor(mainInput);
        }
    }
}

