const menuBtn = document.querySelector('.posts__mobile__btn')
const menuContent = document.querySelector('.posts__mobile__content')
menuBtn.addEventListener('click',()=> {
    menuBtn.classList.toggle('active')
    menuContent.classList.toggle('active')
})
