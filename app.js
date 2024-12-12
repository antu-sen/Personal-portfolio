const ham= document.querySelector('.humburger');
const navL= document.querySelector('.nav-links');
const links= document.querySelector('.nav-links a');

//toogle menu

function tooglemenu(){
      ham.classList.toggle('active');
      navL.classList.toggle('active');
}

//close menu

function closeMenu(){


      ham.classList.remove('active');
      navL.classList.remove('active');
}

//event listnaer

ham.addEventListener('click', tooglemenu);
      
      

