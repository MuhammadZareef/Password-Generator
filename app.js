
function generatePassword() {

    let length = document.getElementById("length").value;
    let numbers = document.getElementById("numbers").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let uppercase = document.getElementById("uppercase").checked;
    let symbols = document.getElementById("symbols").checked;

    let characters = "";
    if (numbers) {
        characters += "0123456789";
    }

    if (lowercase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (uppercase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(symbols) {
        characters += "!@#$%^&*()-_=+{}[]|;:,.'<>?/\|~`";
    }

    if (!characters) {
        alert("Please select at least one character type!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random()*characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("password-output").textContent = password;
}
