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
    const input = button.previousElementSibling; // button "+"
    const currentValue = parseInt(input.value, 10) || 0;
    input.value = currentValue + 1; // valore +1
    updateSpinnerColor(input); // cambia colore
}

function decrementValue(button) {
    const input = button.nextElementSibling; // button "-"
    const currentValue = parseInt(input.value, 10) || 0;
    if (currentValue > 0) {
        input.value = currentValue - 1; // valore -1 non meno di 0
    }
    updateSpinnerColor(input); // cambia colore
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
    "Lime": "Planet",
    "ODK Melograno": "Planet",
    "ODK Frutti di Bosco": "Planet",
    "ODK Cocco": "Planet",
    "ODK Ananas": "Planet",
    "Axilu": "Stefano",
    "Endrizzi DOC": "Stefano",
    "Gewurztraminer": "Stefano",
    "Corona Cero": "Stefano",
    "Fusto Bud": "Stefano",
    "Coca Lattina": "Stefano",
    "Coca Zero Lattina": "Stefano",
    "Tè Pesca": "Stefano",
    "Tè Limone": "Stefano",
    "Limoncello": "Stefano",
    "Fanta": "Stefano",
    "Leffe": "Stefano",
    "Ginger Beer": "Stefano",
    "Fusto Coca": "Stefano",
    "Mirtilli": "metro",
    "Zucchero x Caffè": "metro",
    "Cioccolatini": "metro",
    "Birra Los Amigos": "metro",
    "Ghiaccio Cubo": "metro",
    "Ghiaccio Trit": "metro",
    "Succo Mango": "metro",
    "Polpa Mango": "metro",
    "Jalapenos": "metro",
    "Caffè": "metro",
    "Caffè Deca": "metro",
    "Caffè Ginseng": "metro",
    "Borghetti": "metro",
    "Alpino": "metro",
    "Acqua Nat": "metro",
    "Acqua Friz": "metro",
    "Tajin": "metro",
    "ODK Lime": "metro",
    "Sale Rosa": "metro",
    "Wood Smoke": "metro",
    "Succo Arancia": "metro",
    "Succo Melograno": "metro",
    "Succo Ananas": "metro",
    "Schiroppo di Agave": "metro",
    "Pompelmo Soda": "metro",
    "Sangria": "metro",
    "Lugana": "metro",
    "Bepin": "metro",
    "Teroldego": "metro",
    "Tarapacà": "metro",
    "Lemonsoda": "metro",
    "La Señorita": "metro",
    "El Musico": "metro",
    "Modelo Special": "metro",
    "Los Amantes": "metro",
    "San Miguel": "metro",
    "Rooster Rojo": "metro",
    "Don Ramon Plata": "metro",
    "Butterfly Cannon Cristalino": "metro",
    "El Jimador Reposado": "metro",
    "Altos Reposado": "metro",
    "Casamigos Reposado": "metro",
    "Sierra Antigo Añejo": "metro",
    "1800 Añejo": "metro",
    "Rooster Rojo Añejo": "metro",
    "Ron Prohibido": "metro",
    "Ron Uruapan Charanda": "metro",
    "Whisky Prieto": "metro",
    "San Cosme": "metro",
    "Ojo de Tigre Blanco": "metro",
    "Bruxo": "metro",
    "Alipus San Juan": "metro",
    "Alipus Baltazar": "metro",
    "Monte Alban": "metro",
    "Ojo de Tigre Reposado": "metro"
};
//unità
const productUnits = {
    //todo - unità di ogniuno prodotto
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
        const unit = productUnits[name] || "unità";

        if (quantity > 0) {
            result += `${name}, ${quantity} ${unit}; \n`;
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
            const unit = productUnits[name] || "unidade";

            if (supplier === "Planet") {
                planetMessage += `${name}, ${quantity} ${unit}; \n`;
                planetHasProducts = true; // prodotti planet
            } else if (supplier === "Stefano") {
                stefanoMessage += `${name}, ${quantity} ${unit}; \n`;
                stefanoHasProducts = true; // prodotti stefano
            } else if (supplier === "metro") {
                metroMessage += `${name}, ${quantity} ${unit}; \n`;
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

