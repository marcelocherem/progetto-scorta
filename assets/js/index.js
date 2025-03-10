//stilizando bottoni quantita prodotti
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
    const input = button.previousElementSibling; // Seleciona o campo antes do botão "+"
    const currentValue = parseInt(input.value, 10) || 0;
    input.value = currentValue + 1; // Incrementa o valor
    updateSpinnerColor(input); // Atualiza a cor após incrementar
}

function decrementValue(button) {
    const input = button.nextElementSibling; // Seleciona o campo após o botão "-"
    const currentValue = parseInt(input.value, 10) || 0;
    if (currentValue > 0) {
        input.value = currentValue - 1; // Decrementa o valor sem ir abaixo de 0
    }
    updateSpinnerColor(input); // Atualiza a cor após decrementar
}



// prodotti - fornitori
const productSuppliers = {
    "Triplesec": "Planet",
    "Carpano": "Planet",
    "Campari": "Planet",
    "Rum": "Planet",
    "Tequila Espolon Promo": "Planet",
    "Bombolla": "Planet",
    "Caramello Salato": "Planet",
    "lime": "Planet",
    "melograno": "Planet",
    "frutti di bosco": "Planet",
    "cocco": "Planet",
    "ananas": "Planet",
    "axilu": "Stefano",
    "endrizzi DOC": "Stefano",
    "gewurztraminer": "Stefano",
    "corona Cero": "Stefano",
    "fusto Bud": "Stefano",
    "coca Lattina": "Stefano",
    "coca Zero Lattina": "Stefano",
    "tè Pesca": "Stefano",
    "tè Limone": "Stefano",
    "limoncello": "Stefano",
    "fanta": "Stefano",
    "Leffe": "Stefano",
    "ginger beer": "Stefano",
    "fusto coca": "Stefano",
    "mirtilli": "metro",
    "zucchero x caffè": "metro",
    "cioccolatini": "metro",
    "birra los amigos": "metro",
    "ghiaccio cubbo": "metro",
    "ghiaccio trit": "metro",
    "succo mango": "metro",
    "polpa mango": "metro",
    "jalapenos": "metro",
    "caffè": "metro",
    "caffè deca": "metro",
    "caffè ginseng": "metro",
    "borghetti": "metro",
    "alpino": "metro",
    "acqua nat": "metro",
    "acqua friz": "metro",
    "tagin": "metro",
    "lime": "metro",
    "sale rosa": "metro",
    "wood smoke": "metro",
    "succo Arancia": "metro",
    "succo melograno": "metro",
    "succo ananas": "metro",
    "schiroppo di agave": "metro",
    "pompelmo soda": "metro",
    "sangria": "metro",
    "lugana": "metro",
    "bepim": "metro",
    "teroldego": "metro",
    "tarapacà": "metro",
    "lemonsoda": "metro",
    "la señorita": "metro",
    "el musico": "metro",
    "modelo special": "metro",
    "los amantes": "metro",
    "sam migel": "metro",
    "rooster rojo": "metro",
    "don ramon plata": "metro",
    "butterfly cannon cristalino": "metro",
    "el jimador reposado": "metro",
    "altos reposado": "metro",
    "casamigos reposado": "metro",
    "sierra antigo añejo": "metro",
    "1800 añejo": "metro",
    "rooster rojo añejo": "metro",
    "ron prohibido": "metro",
    "rom uruapan charanda": "metro",
    "whisky pietro": "metro",
    "san cosme": "metro",
    "ojo de tigre blanco": "metro",
    "bruxo": "metro",
    "alipus san juan": "metro",
    "alipus baltazar": "metro",
    "monte alban": "metro",
    "ojo de tigre reposado": "metro"
};

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('show'); // apparire/nasconderere prodotti
}

// primo messagio di prova
function saveSelection() {
    const products = document.querySelectorAll('.product');
    let result = "Ciao Ale, ecco la lista delle ordini: \n";
    let hasSelectedProduct = false; // Flag

    products.forEach(product => {
        const name = product.querySelector('span').innerText;
        const quantity = parseInt(product.querySelector('input').value, 10) || 0;
        if (quantity > 0) {
            result += `${name}, ${quantity}; \n`;
            hasSelectedProduct = true;
        }
    });

    if (!hasSelectedProduct) {
        result = "Selezionare prodotti";
    }

    document.getElementById('output').value = result;
}


function generateMessages() {
    const now = new Date();
    const greeting = now.getHours() >= 12 ? "buonasera" : "buongiorno";

    let planetMessage = `Ciao Raffaele, ${greeting}, per cortesia, abbiamo bisogno di: \n`;
    let stefanoMessage = `Ciao Stefano, ${greeting}, per cortesia, abbiamo bisogno di: \n`;
    let metroMessage = `Ciao Ale, abbiamo bisogno di: \n`;

    const products = document.querySelectorAll('.product');
    let planetHasProducts = false;
    let stefanoHasProducts = false;
    let metroHasProducts = false;

    products.forEach(product => {
        const name = product.querySelector('span').innerText;
        const quantityInput = product.querySelector('input[type="number"]');
        const quantity = quantityInput.value;

        if (quantity && quantity > 0) {
            const supplier = productSuppliers[name]; // cerca fornitore
            if (supplier === "Planet") {
                planetMessage += `${name}, ${quantity}; \n`;
                planetHasProducts = true; // prodotti planet
            } else if (supplier === "Stefano") {
                stefanoMessage += `${name}, ${quantity}; \n`;
                stefanoHasProducts = true; // prodotti stefano
            } else if (supplier === "metro") {
                metroMessage += `${name}, ${quantity}; \n`;
                metroHasProducts = true; // prodotti metro
            }
        }
    });

    // crea messagi
    const planetMessageBox = document.getElementById('planetMessage');
    const stefanoMessageBox = document.getElementById('enterpriseMessage');
    const metroMessageBox = document.getElementById('metroMessage');

    if (planetHasProducts) {
        planetMessageBox.value = planetMessage;
    } else {
        planetMessageBox.value = ''; // se vuoto, non c`e niente
    }

    if (stefanoHasProducts) {
        stefanoMessageBox.value = stefanoMessage;
    } else {
        stefanoMessageBox.value = '';  // se vuoto, non c`e niente
    }

    if (metroHasProducts) {
        metroMessageBox.value = metroMessage;
    } else {
        metroMessageBox.value = '';  // se vuoto, non c`e niente
    }
}


// send to whatsapp
function sendToWhatsApp(button, whatsappNumber) {
    const textarea = button.previousElementSibling;
    const message = textarea.value.trim(); 
    if (!message) {
        alert('Il testo è vuoto! Per favore, scrivi qualcosa prima di inviare.');
        return;
    }
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

