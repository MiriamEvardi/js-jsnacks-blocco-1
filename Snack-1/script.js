//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("Inserisci la prima parola");
const secondWord = prompt("Inserisci la seconda parola");


if (firstWord.length < secondWord.length) {

    document.getElementById("weaker").innerText = "La parola più corta è: " + firstWord;
    document.getElementById("longer").innerText = "La parola più lunga è: " + secondWord;

} else if (firstWord.length > secondWord.length) {

    document.getElementById("longer").innerText = "La parola più lunga è: " + secondWord;
    document.getElementById("weaker").innerText = "La parola più corta è: " + firstWord;

} else {
    document.getElementById("weaker").innerText = `Le parole ${firstWord} e ${secondWord} hanno la stessa lunghezza`;

}