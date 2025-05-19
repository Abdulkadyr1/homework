const solutionMenu = document.querySelector(".nav__solutions")
const solutionItem = document.querySelector(".nav__link-icon")
const solutionArrow = solutionItem.querySelector('svg')

solutionItem.addEventListener('click', () => {
    if (!solutionMenu.classList.contains('show')) {
        solutionArrow.style.transform = 'rotate(-90deg)'
    }
    else {
        solutionArrow.style.transform = 'rotate(0deg)'
    }
    solutionMenu.classList.toggle('show')
})


const headerTop = document.querySelector('.header__top')
const burgerIcon = document.querySelector('.burger-icon')
const body = document.querySelector('body')

burgerIcon.addEventListener('click', (event) => {
    event.preventDefault()
    headerTop.classList.toggle('header__menu-open')
    body.classList.toggle('no-scroll')
})

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


const tags = document.querySelectorAll(".tag-1")
const inputWord = document.querySelector(".search__input")

for (i=0; i < tags.length; i++){
    tags[i].addEventListener('click', function(event){
        event.preventDefault()
        inputWord.value = this.innerText
        inputWord.focus();
    })
}