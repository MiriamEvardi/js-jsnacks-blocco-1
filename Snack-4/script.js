//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.

let number = prompt("Inserisci un numero di 4 cifre");

if (number.length == 4) {

    let sumElement = 0;

    for (let i = 0; i < number.length; i++) {

        sumElement += Number(number[i]);
    }
    document.getElementById("result").innerText = "La somma delle cifre è: " + sumElement;

} else {
    document.getElementById("result").innerText = "Il numero deve essere di 4 cifre."
}
