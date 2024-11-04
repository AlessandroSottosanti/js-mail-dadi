

// DATI

const authorizedMails = [
    'pippo@gmail.com',
    'paperino@gmail.com',
    'topolino@gmail.com'
]
authorized = false;
userMail = prompt("Inserire la popria email di accesso");

console.log(userMail);
console.log(authorizedMails);

// ESECUZIONE LOGICA

for(let i = 0; i < authorizedMails.length; i++){
    currentEmail = authorizedMails[i];
    if(currentEmail === userMail){
        authorized = true;
    }
}

// OUTPUT

if(authorized === true){
    console.log("Accesso eseguito con successo!");
}
else{
    console.log("Email non autorizzata all'accesso.");
}