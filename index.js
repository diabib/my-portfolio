const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})


document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener('click',()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))



for (let i = 0; i < document.querySelectorAll('.grid-item-img').length; i++) {
    document.querySelectorAll('.grid-item-img')[i].addEventListener('mouseover', function() {
        this.classList.add('move-item');
        setTimeout(() => {
            this.classList.toggle('move-item');
        }, 1000); // 1000 milliseconds (1 second) delay before removing the class
    });
}
