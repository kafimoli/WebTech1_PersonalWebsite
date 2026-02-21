const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', ()=>{
    document.body.style.overflow = navLinks.classList.contains('active') ? 'auto' : 'hidden';
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')){
        mobileMenu.innerHTML = 'X';
        mobileMenu.style.color = 'white';
    }else{
        mobileMenu.innerHTML = '☰';
        mobileMenu.style.color = 'black';
    }
    console.log("working");
});