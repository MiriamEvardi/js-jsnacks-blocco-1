//Calcola la somma e la media dei primi 10 numeri.

let sumNumber = 0;

//dichiaro la i così che io possa riutilizzarla al di fuori del ciclo for
let i;

for (i = 1; i <= 10; i++) {
    sumNumber += i;
    document.getElementById("sum-result").innerText = "La somma dei primi 10 numeri è: " + sumNumber;
}

//la i ha il valore del numero massimo iterato quindi in questoo caso 10, per assicurarmi
//che se mettessi più di 10 numeri la media rimanga esclusivamente ai primi 10 numeri 

//unico "problema" è che mi conta la i come se avesse fatto 11 cicli, l'unica soluzione (non so se sia giusta) che ho trovato
//è stata quella di aggiungere (i - 1) all'operazione della media
let average = sumNumber / (i - 1);
document.getElementById("average-result").innerText = "La media dei primi 10 numeri è: " + average;

console.log(i)
console.log(sumNumber);
console.log(average);