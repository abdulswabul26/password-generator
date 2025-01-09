
let button = document.getElementById("button");
let output = document.getElementById("output");


function generatePassword(length, lowercase,uppercase, numbers, symbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";
    
    allowedChars += lowercase ? lowercaseChars : "";
    allowedChars += uppercase ? uppercaseChars : "";
    allowedChars += numbers ? numberChars : "";
    allowedChars += symbols ? symbolChars : "";

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    output.innerText = password;


}

button.onclick = function(){
    const passwordLength = 12;
    const includesLowercase = true;
    const includesUppercase = true;
    const includesNumbers = true;
    const includesSymbols = true;

    generatePassword(passwordLength, includesLowercase, includesUppercase, includesNumbers, includesSymbols);
}
