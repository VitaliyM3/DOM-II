// Your code goes here
//1. funbus transition
let funBus = document.querySelector('img');
funBus.addEventListener('mouseenter', () =>  {
    funBus.style.transform="scale(0.8)";
    funBus.style.transition="all 0.4s";
});

//2. 
funBus.addEventListener('mouseleave', () => {
    funBus.style.transform="scale(1)";
    funBus.style.transition="all 0.3s";
});

//3.
let title = document.querySelector(".logo-heading");
title.addEventListener('click', ()=> {
    title.style.color= "blue";
});

//4.
let sizeChange = document.querySelector(".intro h2");
sizeChange.addEventListener('auxclick', ()=> {
    sizeChange.style.fontSize= "2rem";
});

//5.
let bgChange = document.querySelector("body");
bgChange.addEventListener('dblclick', ()=> {
    bgChange.style.backgroundColor= "#F5FAB1";
});

//6.
window.addEventListener('resize', ()=> {
    bgChange.style.backgroundColor= "#d2faf9";
});

//7.
let paragraphs = document.querySelectorAll("p");
paragraphs[1].addEventListener('mouseover', ()=> {
    alert("Wanna Go?");
});

//8.
paragraphs[3].addEventListener('mousemove', ()=> {
    paragraphs[3].style.color = "red";
});

//9.
paragraphs[5].addEventListener('copy', ()=> {
    paragraphs[5].style.fontSize = "2.5rem";
});

//10.
paragraphs[6].addEventListener('contextmenu', e => {
    e.preventDefault();
  });


let nav = document.querySelectorAll('a');
  nav.addEventListener('click', (e)=> {
    e.preventDefault();
  });