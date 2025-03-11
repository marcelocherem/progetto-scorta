Triplesec
Carpano
Campari
Rum
Tequila Espolon Promo
Bombolla
Caramello Salato
ODK
lime
melograno
frutti di bosco
cocco
ananas
axilu
endrizzi DOC
gewurztraminer
corona Cero
fusto Bud
coca Lattina
coca Zero Lattina
tè Pesca
tè Limone
limoncello
fanta
Leffe
ginger beer
mirtilli
zucchero x caffè
cioccolatini
birra los amigos
ghiaccio cubbo
ghiaccio trit
succo mango
polpa mango
jalapenos
caffè
caffè deca
caffè ginseng
borghetti
alpino
acqua nat
acqua friz
tagin
lime
sale rosa
wood smoke
succo Arancia
succo melograno
succo ananas
schiroppo di agave
pomplemo soda
sangria
lugana
bepim
teroldego
tarapacà
lemonsoda
la señorita
el musico
modelo special
los amantes
sam migel
rooster rojo
don ramon plata
butterfly
cannon cristalino
el jimador reposado
altos reposado
casamigos reposado
sierra antigo añejo
1800 añejo
rooster rojo añejo
ron prohibido
rom uruapan charanda
whisky pietro
san cosme
ojo de tigre blanco
bruxo
alipus san juan
alipus baltazar
monte alban
ojo de tigre reposado





const productCategories = [
    {
        category: "bibite",
        products: [
            { name: "Coca Lattina", unit: "caixa", supplier: "Stefano" },
            { name: "Coca Zero Lattina", unit: "caixa", supplier: "Stefano" },
            { name: "Tè Pesca", unit: "caixa", supplier: "Stefano" },
            { name: "Tè Limone", unit: "caixa", supplier: "Stefano" },
            { name: "Fanta", unit: "caixa", supplier: "Stefano" },
            { name: "Ginger Beer", unit: "caixa", supplier: "Stefano" },
            { name: "Succo Mango", unit: "caixa", supplier: "metro" },
            { name: "Polpa Mango", unit: "caixa", supplier: "metro" },
            { name: "Acqua Nat", unit: "caixa", supplier: "metro" },
            { name: "Acqua Friz", unit: "caixa", supplier: "metro" },
            { name: "Succo Arancia", unit: "caixa", supplier: "metro" },
            { name: "Succo Melograno", unit: "caixa", supplier: "metro" },
            { name: "Succo Ananas", unit: "caixa", supplier: "metro" },
            { name: "Pompelmo Soda", unit: "caixa", supplier: "metro" },
            { name: "Lemonsoda", unit: "caixa", supplier: "metro" }
        ]
    },
    {
        category: "birre",
        products: [
            { name: "Corona Cero", unit: "caixa", supplier: "Stefano" },
            { name: "Leffe", unit: "caixa", supplier: "Stefano" },
            { name: "Birra Los Amigos", unit: "caixa", supplier: "metro" },
            { name: "La Señorita", unit: "caixa", supplier: "metro" },
            { name: "El Musico", unit: "caixa", supplier: "metro" },
            { name: "Modelo Special", unit: "caixa", supplier: "metro" },
            { name: "Los Amantes", unit: "caixa", supplier: "metro" },
            { name: "San Miguel", unit: "caixa", supplier: "metro" }
        ]
    },
    {
        category: "caffè",
        products: [
            { name: "Caffè", unit: "caixa", supplier: "metro" },
            { name: "Caffè Deca", unit: "caixa", supplier: "metro" },
            { name: "Caffè Ginseng", unit: "caixa", supplier: "metro" }
        ]
    },
    {
        category: "distillati",
        products: [
            { name: "Ron Prohibido", unit: "caixa", supplier: "metro" },
            { name: "Ron Uruapan Charanda", unit: "caixa", supplier: "metro" },
            { name: "Whisky Prieto", unit: "caixa", supplier: "metro" }
        ]
    },
    {
        category: "drink",
        products: [
            { name: "Triplesec", unit: "caixa", supplier: "Planet" },
            { name: "Carpano", unit: "caixa", supplier: "Planet" },
            { name: "Campari", unit: "caixa", supplier: "Planet" },
            { name: "Rum", unit: "caixa", supplier: "Planet" },
            { name: "Tequila Espolon Promo", unit: "caixa", supplier: "Planet" }
        ]
    },
    {
        category: "fusto",
        products: [
            { name: "Bombolla", unit: "caixa", supplier: "Planet" },
            { name: "Fusto Bud", unit: "caixa", supplier: "Stefano" },
            { name: "Fusto Coca", unit: "caixa", supplier: "Stefano" }
        ]
    },
    {
        category: "mescal blanco",
        products: [
            { name: "San Cosme", unit: "caixa", supplier: "metro" },
            { name: "Ojo de Tigre Blanco", unit: "caixa", supplier: "metro" },
            { name: "Bruxo", unit: "caixa", supplier: "metro" },
            { name: "Alipus San Juan", unit: "caixa", supplier: "metro" },
            { name: "Alipus Baltazar", unit: "caixa", supplier: "metro" }
        ]
    },
    {
        category: "mescal reposado",
        products: [
            { name: "Monte Alban", unit: "caixa", supplier: "metro" },
            { name: "Ojo de Tigre Reposado", unit: "caixa", supplier: "metro" }
        ]
    },
    {
        category: "sciroppi",
        products: [
            { name: "Caramello Salato", unit: "caixa", supplier: "Planet" },
            { name: "Lime", unit: "caixa", supplier: "Planet" },
            { name: "ODK Melograno", unit: "caixa", supplier: "Planet" },
            { name: "ODK Frutti di Bosco", unit: "caixa", supplier: "Planet" },
            { name: "ODK Cocco", unit: "caixa", supplier: "Planet" },
            { name: "ODK Ananas", unit: "caixa", supplier: "Planet" },
            { name: "Schiroppo di Agave", unit: "caixa", supplier: "metro" }
        ]
    },
    {
        category: "tequila añejo",
        products: [
            { name: "Sierra Antigo Añejo", unit: "caixa", supplier: "metro" },
            { name: "1800 Añejo", unit: "caixa", supplier: "metro" },
            { name: "Rooster Rojo Añejo", unit: "caixa", supplier: "metro" }
        ]
    },
    {
        category: "tequila blanco",
        products: [
            { name: "Rooster Rojo", unit: "caixa", supplier: "metro" },
            { name: "Don Ramon Plata", unit: "caixa", supplier: "metro" },
            { name: "Butterfly Cannon Cristalino", unit: "caixa", supplier: "metro" }
        ]
    },
    {
        category: "tequila reposado",
        products: [
            { name: "El Jimador Reposado", unit: "caixa", supplier: "metro" },
            { name: "Altos Reposado", unit: "caixa", supplier: "metro" },
            { name: "Casamigos Reposado", unit: "caixa", supplier: "metro" }
        ]
    },
    {
        category: "vini",
        products: [
            { name: "Axilu", unit: "caixa", supplier: "Stefano" },
            { name: "Endrizzi DOC", unit: "caixa", supplier: "Stefano" },
            { name: "Gewurztraminer", unit: "caixa", supplier: "Stefano" },
            { name: "Sangria", unit: "caixa", supplier: "metro" },
            { name: "Lugana", unit: "caixa", supplier: "metro" },
            { name: "Bepin", unit: "caixa", supplier: "metro" },
            { name: "Teroldego", unit: "caixa", supplier: "metro" },
            { name: "Tarapacà", unit: "caixa", supplier: "metro" }
        ]
    },
    {
        category: "amari",
        products: [
            { name: "Limoncello", unit: "caixa", supplier: "Stefano" },
            { name: "Borghetti", unit: "caixa", supplier: "metro" },
            { name: "Alpino", unit: "caixa", supplier: "metro" }
        ]
    },
    {
        category: "altri",
        products: [
            { name: "Mirtilli", unit: "caixa", supplier: "metro" },
            { name: "Zucchero x Caffè", unit: "caixa", supplier: "metro" },
            { name: "Cioccolatini", unit: "caixa", supplier: "metro" },
            { name: "Ghiaccio Cubo", unit: "caixa", supplier: "metro" },
            { name: "Ghiaccio Trit", unit: "caixa", supplier: "metro" },
            { name: "Jalapenos", unit: "caixa", supplier: "metro" },
            { name: "Tajin", unit: "caixa", supplier: "metro" },
            { name: "Lime", unit: "caixa", supplier: "metro" },
            { name: "Sale Rosa", unit: "caixa", supplier: "metro" },
            { name: "Wood Smoke", unit: "caixa", supplier: "metro" }
        ]
    }
];





























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










const productCategories = [
    {
        category: "caffè",
        products: [
            { name: "Caffè", unit: "caixa", supplier: "Planet" },
            { name: "Caffè Deca", unit: "caixa", supplier: "Stefano" },
            { name: "Caffè Ginseng", unit: "caixa", supplier: "metro" },
        ],
    },
    {
        category: "bevande",
        products: [
            { name: "Coca-Cola", unit: "garrafa", supplier: "Planet" },
            { name: "Fanta", unit: "garrafa", supplier: "Stefano" },
        ],
    },
    // Adicione mais categorias e produtos aqui
];