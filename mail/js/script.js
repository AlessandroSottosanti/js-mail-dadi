

// DATI

const authorizedMails = [
    'pippo@gmail.com',
    'paperino@gmail.com',
    'topolino@gmail.com'
]
let authorized = false;
const userMail = prompt("Inserire la popria email di accesso");
let numIterazioni = 0;
console.log(userMail);
console.log(authorizedMails);

// ESECUZIONE LOGICA

if(userMail !== null && userMail !== ''){

    for(let i = 0; i < authorizedMails.length; i++){
        currentEmail = authorizedMails[i];
        if(currentEmail === userMail){
            authorized = true;
            numIterazioni += 1;
            break;
        }
        numIterazioni += 1;
    }
    
}
// OUTPUT

if(authorized === true){
    console.log("Accesso eseguito con successo!");
    console.log("Numero di iterazioni: ", numIterazioni);
}
else{
    console.log("Email non autorizzata all'accesso.");
    console.log("Numero di iterazioni: ", numIterazioni);
}