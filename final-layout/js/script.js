const burgerIcon = document.querySelector('.burger-icon')
const body = document.querySelector('.body')
const navList = document.querySelector('.header__list')
const modalGift = document.querySelector('.about__modal-link')
const modalWindowOpen = document.querySelector('.modal__window')
const modalWindowClose = document.querySelector('.modal__window-cancel')

burgerIcon.addEventListener('click', () => {
    body.classList.toggle('body--opened-menu')
})

navList.addEventListener('click', (event) => {
    const target = event.target
    if (target.classList.contains('header__link')) {
        body.classList.remove('body--opened-menu')
    }
})

modalGift.addEventListener('click', (event) => {
    event.preventDefault()
    modalWindowOpen.classList.add('modal-open')
})

modalWindowOpen.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('modal__window')) {
        modalWindowOpen.classList.remove('modal-open')
        console.log("HElo")
    }
})

modalWindowClose.addEventListener('click', (event) => {
    event.preventDefault()
    modalWindowOpen.classList.remove('modal-open')
})

const tabLink = document.getElementsByClassName('tab-link')
const tabContent = document.getElementsByClassName("tab-content")


for (i = 0; i < tabLink.length; i++) {
    tabLink[i].addEventListener('click', (event) => {
        event.preventDefault()
        for (j = 0; j < tabLink.length; j++) {
            event.preventDefault()
            if (tabLink[j].classList.contains('tab-link--active')) {
                tabLink[j].classList.remove('tab-link--active')
                break
            }
        }
        event.target.classList.add('tab-link--active')
        const tabIndex = event.target.getAttribute('href')
        for (j = 0; j < tabContent.length; j++) {
            event.preventDefault()
            if (tabContent[j].classList.contains('tab-content--active')) {
                tabContent[j].classList.remove('tab-content--active')
                break
            }
        }
        tabContent[tabIndex].classList.add('tab-content--active')
    })
}


const accordionList = document.querySelectorAll('.accordion-list')

for (i = 0; i < accordionList.length; i++) {
    accordionList[i].addEventListener('click', (event) => {
        const accordionButton = event.target.closest('.accordion-list-button')
        if (!accordionButton) {
            return
        }
        const accordionItem = accordionButton.parentElement;
        const accordionContent = accordionButton.nextElementSibling

        const accordionListContainer = accordionItem.closest('.accordion-list')

        const accordionItemArr = accordionListContainer.querySelectorAll('.accordion__item--open')
        for (j = 0; j < accordionItemArr.length; j++) {
            if (accordionItemArr[j].classList.contains('accordion__item--open') && accordionItemArr[j] != accordionItem) {
                accordionItemArr[j].classList.remove('accordion__item--open')
                accordionItemArr[j].querySelector('.accordion-list__content').style.maxHeight = null
            }
        }

        accordionItem.classList.toggle('accordion__item--open')
        if (accordionItem.classList.contains('accordion__item--open')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        } else {
            accordionContent.style.maxHeight = null
        }

    })
}


const swiper = new Swiper('.gallery__slider', {
    spaceBetween: 20,
    slidesPerView: 2,

    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 3,
        },

        1101: {
            slidesPerView: 4,
            spaceBetween: 32,
        }
    }
});

new Swiper('.testimonials__slider', {
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },

    scrollbar: {
        el: '.testimonials__scrollbar',
        draggable: true,
    },

    breakpoints: {
        851: {
            slidesPerView: 1.5,
        },

        1101: {
            slidesPerView: 2,
        }
    },
});