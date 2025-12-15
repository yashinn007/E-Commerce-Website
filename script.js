let bar = document.querySelector("#bar");
let close = document.querySelector("#close");
let nav = document.querySelector("#navbar");

if(bar){
    bar.addEventListener("click", ()=>{
     nav.classList.add('actived');
    })
}

if(close){
    close.addEventListener("click", ()=>{
     nav.classList.remove('actived');
    })
}