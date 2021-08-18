const hamb = document.querySelector('#hamb');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
// possible with this too 
// const headermenu = document.querySelector('.header__menu');
const fadeElems = document.querySelectorAll('.has-fade');

hamb.addEventListener('click',()=>{
console.log("helo");

if(header.classList.contains('open')){//close
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
    // headermenu.classList.add('has-fade');
}
else{//open
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function (element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    });
    
    // headermenu.classList.remove('has-fade');
}
});