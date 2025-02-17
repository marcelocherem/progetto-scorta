Progetto di Gestione dell'Inventario per Ristoranti
Descrizione
Un progetto per la gestione dell'inventario nei ristoranti con la possibilità di ordinare i prodotti.

Passaggi
Creazione del Sito Front-end a. Pagina di login/registrazione b. Area riservata dell'amministratore 1. Prodotti 1.1. Aggiunta 1.2. Modifica 1.3. Eliminazione 2. Utenti 2.1. Aggiunta 2.2. Modifica 2.3. Eliminazione 3. Fornitori 3.1. Aggiunta 3.2. Modifica 3.3. Eliminazione 4. Gestione 4.1. Rimozione dei prodotti 4.2. Aggiunta dei prodotti c. Area riservata dell'utente 1. Gestione 1.1. Rimozione dei prodotti 1.2. Aggiunta dei prodotti

Creazione delle Tabelle nel Database a. Inventario 1. ID del prodotto 2. Nome del prodotto 3. Quantità 4. Quantità minima 5. Quantità massima 6. Fornitore b. Utenti 1. ID dell'utente 2. Nome 3. Cognome 4. Livello c. Fornitori 1. ID del fornitore 2. Nome dell'azienda del fornitore 3. Telefono 4. Email 5. Preferenza di contatto d. Rimozioni/Aggiunte 1. ID della rimozione 2. ID del prodotto 3. ID dell'utente 4. Data 5. Quantità

Gestione
Inserimento del nome del prodotto e della quantità rimossa.

Inviando i dati, si crea una riga nella tabella delle rimozioni e si modifica il numero di prodotti nell'inventario. Se la quantità è uguale o inferiore alla quantità minima, viene creato un avviso che informa che l'inventario di quel prodotto è basso ed è ora di creare un ordine.

Ordini
Si crea l'ordine dei prodotti, separati per fornitore, indicando la quantità suggerita per mantenere l'inventario al massimo, che può essere modificata.

Osservazioni
Aumentare la quantità oltre il limite massimo dell'inventario crea un avviso rosso: "La quantità supera il limite massimo approvato da 'nome dell'amministratore'".