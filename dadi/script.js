// Genero il numero del giocatore (da 1 a 6 e intero)
let user_number = Math.floor(Math.random() * 6) + 1
console.log(user_number);

// Genero il numero del computer (da 1 a 6 e intero)
let cpu_number = Math.floor(Math.random() * 6) + 1
console.log(cpu_number);

// Controllo chi fa il punteggio più alto e stampo il messaggio in base a chi ha vinto
if (user_number > cpu_number) {
    console.log('HAI VINTO');
    
} else if (user_number === cpu_number) {
    console.log('I NUMERI SONO UGUALI');
    
} else {
    console.log('HAI PERSO');
    
}