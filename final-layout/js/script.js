const burgerIcon = document.querySelector('.burger-icon')
const body = document.querySelector('.body')
const navList = document.querySelector('.header__list')
const modalGift = document.querySelector('.about__modal-link')
const modalWindowOpen = document.querySelector('.modal__window')
const modalWindowClose = document.querySelector('.modal__window-cancel')

burgerIcon.addEventListener('click', ()=>{
    body.classList.toggle('body--opened-menu')
})

navList.addEventListener('click', (event)=>{
    const target = event.target
    if (target.classList.contains('header__link')){
        body.classList.remove('body--opened-menu')
    }
})

modalGift.addEventListener('click', (event) =>{
    event.preventDefault()
    modalWindowOpen.classList.add('modal-open')
})

modalWindowOpen.addEventListener('click', (event) =>{
    if (event.target && event.target.classList.contains('modal__window')){
        modalWindowOpen.classList.remove('modal-open')
        console.log("HElo")
    }
})

modalWindowClose.addEventListener('click', (event) =>{
    event.preventDefault()
    modalWindowOpen.classList.remove('modal-open')
})
