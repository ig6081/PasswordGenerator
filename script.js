const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
generateBtn = document.querySelector(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}
const generatePassword = () => {
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = lengthSlider.value;

    options.forEach(option => {
        if(option.checked){
            if(option.id !== "exe-duplicate" && option.id !== "spaces")
                staticPassword += characters[option.id];
            else if(option.id === "spaces"){
                staticPassword += ` ${staticPassword} `;
            }
            else {
                excludeDuplicate = true;
            }
        } 
    });
    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random()* staticPassword.length)];    
        if(excludeDuplicate){
            !randomPassword.contains(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        }
        else randomPassword += randomChar;
    }
    console.log(randomPassword);
}


const updateSlider = () => {
    console.log(lengthSlider.value);
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
}
updateSlider();

lengthSlider.addEventListener("input",updateSlider);
generateBtn.addEventListener("click",generatePassword);