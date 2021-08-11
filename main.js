/* abrir e esconder o menu toggle/hamburguer */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for( let element of toggle) {
    element.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}

/* fechar o menu ao clicar no link/seção */
const menu = document.querySelectorAll('.menu ul')

for (let link of menu){
    link.addEventListener('click', ()=>{
        nav.classList.remove('show')
    })
}


/* Testimonials caroussel slider swiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    mousewheel: true,
    keyboard: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });