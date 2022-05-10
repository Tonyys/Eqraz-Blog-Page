const menuBtn = document.querySelector('.posts__mobile__btn')
const menuContent = document.querySelector('.posts__mobile__content')
menuBtn?.addEventListener('click',function () {
    menuBtn.classList.toggle('active')
    menuContent.classList.toggle('active')
})
// swiper
 const swiperJs = new Swiper ('.showcase-swiper', {
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
         }
     }
 });
