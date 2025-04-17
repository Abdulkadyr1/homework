const modalWindowOpen = document.querySelector('.btn-open')
const modal = document.querySelector('.modal__window')
const modalCloseBtn = document.querySelector('.modal__close')


modalWindowOpen.addEventListener('click', () => {
    modal.classList.add('modal--open')
})

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal__window')){
        modal.classList.remove('modal--open')
    }
})

modalCloseBtn.addEventListener('click', () =>{
    modal.classList.remove('modal--open')
})

document.addEventListener('keydown', (event) =>{
    if (event.code == 'Escape'){
        modal.classList.remove('modal--open')
    }
})