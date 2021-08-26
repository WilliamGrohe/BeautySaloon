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
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  });

/* scrollreveal: animação ao rolar a página */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
})

if(window.screen.width < 610){
    scrollReveal.reveal(
        `#home .image, #home .text,
        #about .image, #abut .text,
        #services .text, #services .card,
        #testemonials header, #testemonials .testimonials,
        #contact .text, #contact .whatsappButton, #contact .infoContact
        `,
        {interval: 100}
    )
}


/* back-to-top voltar para o inicio */
const backToTopButton = document.querySelector(".back-to-top")

window.addEventListener('scroll', function() {
    if(window.scrollY >= 560 && window.screen.availWidth < 610){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
})