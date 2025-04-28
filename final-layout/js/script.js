const burgerIcon = document.querySelector('.burger-icon')
const body = document.querySelector('.body')
const navList = document.querySelector('.header__list')

burgerIcon.addEventListener('click', ()=>{
    body.classList.toggle('body--opened-menu')
})

navList.addEventListener('click', (event)=>{
    const target = event.target
    if (target.classList.contains('header__link')){
        body.classList.remove('body--opened-menu')
    }
})
