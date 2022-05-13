const menuBtn = document.querySelector('.posts__mobile__btn')
const menuContent = document.querySelector('.posts__mobile__content')
menuBtn?.addEventListener('click',function () {
    menuBtn.classList.toggle('active')
    menuContent.classList.toggle('active')
})
// swiper

document.querySelector('.showcase-swiper')?
    new Swiper ('.showcase-swiper', {
    loop: true,
     autoplay: {
        delay: 4000,
     },
     speed: 700,
     slidesPerView: 1.5,
     spaceBetween: 16,
     centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
    },
     breakpoints: {
         320: {
             slidesPerView: 1,
             spaceBetween: 16
         },
         1280: {
             slidesPerView: 1.5,
             spaceBetween: 16
         },
         1600: {
             slidesPerView: 1.8,
             spaceBetween: 24
         }
     }
 }) :null;
// load more
const loadmore = document.querySelector('.posts__btn');
let currentItems = 6;
loadmore?.addEventListener('click', (e) => {
    e.preventDefault()
    const elementList = [...document.querySelectorAll('.posts__card')];
    for (let i = currentItems; i < currentItems + 6; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
    }
    currentItems += 6;

    // Load more button will be hidden after list fully loaded
    if (currentItems >= elementList.length) {
        event.target.style.display = 'none';
    }

})

