// Creo la lista di mail
let allowed_mails = ['pino@gmail.com', 'piero@gmail.com', 'pietro@gmail.com', 'pina@gmail.com', 'piera@gmail.com']

// Chiedo a user la mail
let user_mail = prompt('Inserisci la mail');

// Creo la variabile per il match
let match = false;

// Creo il ciclo for per controllare che la mail sia nella lista
for (let i = 0; i < allowed_mails.length; i++) {
    if (user_mail === allowed_mails[i]) {
        match = true
        
    }
}

// Stampo i risultati
if (match === true) {
    console.log('sei ammesso');
    
} else {
    console.log('non sei ammesso');
    
}