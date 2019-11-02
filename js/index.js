// Your code goes here
//1. funbus transition
let funBus = document.querySelector('img');
funBus.addEventListener('mouseenter', () =>  {
    funBus.style.transform="scale(0.8)";
    funBus.style.transition="all 0.4s";
});

funBus.addEventListener('mouseleave', () => {
    funBus.style.transform="scale(1)";
    funBus.style.transition="all 0.3s";
});

//2. 
let title = document.querySelector(".logo-heading");
title.addEventListener('click', ()=> {
    title.style.color= "blue";
});

//3.
let sizeChange = document.querySelector(".intro h2");
sizeChange.addEventListener('auxclick', ()=> {
    sizeChange.style.fontSize= "2rem";
});

//4.

//5.

//6.

//7.

//8.

//9.

//10.