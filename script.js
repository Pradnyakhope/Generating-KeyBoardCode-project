
const input = document.querySelector("input");
const log = document.getElementById("log");
const displayKey = document.getElementById("displayKey");
let keyCode = document.getElementById('keyCode');

// let inputName = document.getElementById('name');
// let namehere = document.getElementById("namehere");

input.addEventListener("keyup",logKey);

function logKey(e){
    log.textContent = e.key;  // "hey this is Chirag"
    keyCode.textContent = e.keyCode;
    setTimeout(() => {
        input.value ="";
    }, 1000);
    
}

// let name123 = "Ravi";
// inputName.addEventListener('keyup',(e)=>{
//     namehere.innerText = `Hey this is ${e.target.value}`;
// })