//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//Solo se è dispari inseriscilo nell’array.
//Stampa a schermo il contenuto dell'array

const oddNumberElement = [];

console.log(oddNumberElement)
for (let i = 0; i < 6; i++) {
    let number = Number(prompt("Inserisci un numero"));

    if (number % 2 !== 0) {
        oddNumberElement.push(number);

    }
}

document.getElementById("odd").innerText = "I numeri dispari che hai inserito sono: " + oddNumberElement;
