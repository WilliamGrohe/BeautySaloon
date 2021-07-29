const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for( let element of toggle) {
    element.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}