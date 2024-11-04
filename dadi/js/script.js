

// DATI
const playerNum = Math.floor(Math.random() *6) + 1;
const cmpNum = Math.floor(Math.random() *6) + 1;


console.log("Player: ", playerNum);
console.log("Computer: ", cmpNum);

console.log("");

// ESECUZIONE LOGICA & OUTPUT
if(playerNum > cmpNum) {
    console.log("You Won!");
}
else if(playerNum == cmpNum){
    console.log("Tie.");
}
else{
    console.log("Wasted.");
}