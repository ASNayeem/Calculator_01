// Selector

const output= document.querySelector(".output");
const result= document.querySelector(".result");
const keys= document.querySelectorAll("button");


//Event listener
keys.forEach(key => {    
    key.addEventListener("click", calculate);
});


function calculate(){
    let buttonText = this.innerText; //innerHTML = innerText = textContent
    if(buttonText==="AC"){
        output.innerText = "";
        result.innerText = "0";

        result.style.animation ="";
        output.style.animation ="";
        return;
    }
    if(buttonText==="DEL"){
        output.textContent = output.textContent.substring(0,output.innerHTML.length-1);
        return;
    }
    if(buttonText === "="){
     result.innerText = eval(output.innerHTML); //innerHTML = innerText = textContent

    //  Animation
     result.style.animation ="big 0.5s ease-in-out";
     output.style.animation ="small 0.5s ease-in-out";
     result.style.animationFillMode = "forwards";
     output.style.animationFillMode = "forwards";

    }
    else{
        output.innerHTML +=buttonText;
    }
}
