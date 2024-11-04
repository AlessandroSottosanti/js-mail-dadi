// generare 10 numeri random e salvarli in un array

const numbers = [];

for(let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNum);
}

console.log(numbers);

for(let i = 0; i < numbers.length; i++) {
    const curItem = numbers[i];
    console.log(`index ${i}, valore ${curItem}`);

    if (curItem % 2 === 0) {
        console.log("Pari")
    }
    else{
        console.log("Dispari");
    }

}

console.log("")

console.log("stampa elementi dell'array con index dispari:")


for(let i = 0; i < numbers.length; i++) {
    // i è l'index/posizione

    const curItem = numbers[i];
    // curItem è il valore a quell'index

    
    // Stampa index dispari
    if(i % 2 !== 0) {
        console.log(`posizione dispari : index ${i}, valore ${curItem}`);
    }
    else {
        console.log(`index ${i}, valore ${curItem}`);
    }
}
