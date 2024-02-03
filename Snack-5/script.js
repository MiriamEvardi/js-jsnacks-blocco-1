//Stampa il cubo dei primi N numeri,
//(partendo da 1, il numero N indicato dall'utente è compreso)
//dove N è un numero indicato dall’utente.

//chiedi all'utente un numero
//for con il cubo di n numeri
//controllo per numeri interi (con if?)

let userChoice = prompt("Inserisci un numero");

for (let i = 1; i <= userChoice; i++) {

    let cube = i * i * i;


    document.getElementById("result").innerHTML += cube + "<br>";
}