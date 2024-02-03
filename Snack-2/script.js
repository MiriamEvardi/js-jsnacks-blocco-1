let sumElement = 0


for (let i = 0; i < 10; i++) {

    let number = Number(prompt(`Inserisci un numero`));

    sumElement += Number(number);
}

document.getElementById("sum").innerText = `La somma di tutti i numeri è di ${sumElement}`;