import * as bootstrap from 'bootstrap';



//NAVIGATION
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide = () => {
    //Toggle Nav
    burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    //Animation links
    navLinks.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation =`navLinkFade 0.5s ease forwards ${index/7 + 1.5}s`
        }
        
     
    })
    //Burger Animation 
    burger.classList.toggle('toggle');   
  })
}

navSlide()