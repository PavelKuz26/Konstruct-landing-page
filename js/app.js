const navMenu = document.getElementById('navigation');
const hamburgerBtn = document.getElementById('nav__toggle');
const closeBtn = document.getElementById('close__btn');

if(hamburgerBtn){
    hamburgerBtn.addEventListener('click', () =>{
        navMenu.classList.add('show__menu')
    })
}

if(closeBtn){
    closeBtn.addEventListener('click', () =>{
        navMenu.classList.remove('show__menu')
    })
}