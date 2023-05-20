// const p = document.querySelector("p");
// p.className= "test colorRed"

// p.classList.add("colorRed");
// p.classList.add("bgColorYellow");

// p.classList.remove("color");

// p.className="colorRed bgColorYellow"





// Dropdown yaratmaq basladi




// const button = document.querySelector("button");
// const modal = document.querySelector(".modal");

// const dropFunc = () =>{
//     if(modal.className==="modal close"){
//         modal.className="modal open";
//     }
//     else{
//         modal.className="modal close";
//     }
// }

// button.onclick=dropFunc;


// Dropdown yaratmaq bitti


// OFFCANVAS yaratmaq basladi



const button = document.querySelector("button");
const mybody = document.querySelector(".mybody");
const closeBtn = document.querySelector(".closeBtn");


// mybody.style.transition

button.onclick =()=>{
    if(mybody.className ==="mybody close"){
        mybody.classList.remove("close");
        mybody.classList.add("open");
    }
    else{
        mybody.classList.remove("open");
        mybody.classList.add("close");
    }
};

const closeFunc =()=>{
    mybody.className = "mybody close"
}
closeBtn.onclick = closeFunc;





// OFFCANVAS yaratmaq bitti





