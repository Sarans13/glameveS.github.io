let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

function setActive(i){
    for(slide of slides)
    slide.classList.remove('active');
    slides[i].classList.add('active');
    for(dot of dots)
    dot.classList.remove('active');
    dots[i].classList.add('active');
}

for(let j=0;j<dots.length;j++){
    dots[j].addEventListener('click',function(){
        setActive(j);
    })
}