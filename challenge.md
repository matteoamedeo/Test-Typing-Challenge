
-----------------------------------------------------------------
| Sviluppare una applicazione per allenare e migliorare la      |
| velocità di scrittura.                                        |
-----------------------------------------------------------------

Informazioni sul test:

- Il test deve contenere un riquadro di 100 parole (o più) che l'utente dovrà digitare all'interno dell'input "digita parola".

- La parola che l'utente dovrà digitare deve essere evidenziata ad esempio con un riquadro grigio.

- Se l'utente digiterà la parola in modo corretto, la parola dovrà diventare di colore verde, altrimenti di colore rosso per segnalare l'errore.

- Il test dovrà avviarsi (con relativo timer) quando l'utente digiterà la prima lettera nell'input "digita parola".

- Il test ha la durata di 60 secondi.

- Al termine del test bisognerà segnalare all'utente il numero di parole correttamente digitate e il numero di parole sbagliate.

Allego le parole che ho utilizzato per il test:

const dizionario = [
    'mare', 'sole', 'pulito', 'gioco', 'gancio', 'montagna', 'musica',
    'italiano', 'miraggio', 'corso', 'maestro', 'gara', 'idea', 'si',
    'no', 'forse', 'giardino', 'cancello', 'giornale', 'quadro', 'goccia',
    'cantare', 'chitarra', 'suono', 'martello', 'roccia', 'stalla',
    'sincrono', 'fra', 'ma', 'sicuro', 'salire', 'dirupo', 'tramonto',
    'torta', 'grigio', 'solito', 'forza', 'vela', 'telo', 'pizza',
    'paese', 'canoa', 'fiume', 'tronco', 'foglia', 'quaderno', 'ricco',
    'storia', 'bravo', 'recinto', 'strada', 'vicolo', 'mito', 'potere',
    'il', 'clima', 'finestra', 'fuoco', 'conoscenza', 'saggezza'
];
