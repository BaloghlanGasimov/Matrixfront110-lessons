// import { data } from "./data";
// import { data } from "./data"

import { data } from "./data.js";

const navlink = document.querySelectorAll('.nav-link');
const langBtn = document.querySelector('.langBtn');


console.log(data);

// azn[1]
// price.dolar

// console.log(data);
// console.log(data.en[10]);
// console.log(data.price.dolar[1]);



// for(let i=0;i<5;i++){
//     navlink[i].textContent = data.az[i];
// }

const changeLangFunc =()=>{
    if(langBtn.innerHTML=="AZ"){
        for(let i=0;i<5;i++){
            navlink[i].textContent = data.az[i];
            langBtn.textContent = "EN";
        }
    }else{
        for(let i=0;i<5;i++){
            navlink[i].textContent = data.en[i];
            langBtn.textContent = "AZ";
        }
    }
}

langBtn.onclick = changeLangFunc;


let x = Math.floor(Math.random() * 10);

console.log("random number: " + x);