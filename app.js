const hamburger = document.querySelector('.hamburger')
const menu_close = document.querySelector('.menu-close')
const mobile_menu = document.querySelector('.mobile-menu')
const mobile_links = document.querySelectorAll('.mobile-link')

hamburger.addEventListener('click', () => {
    mobile_menu.classList.remove('display-none')
})

menu_close.addEventListener('click', () => {
    mobile_menu.classList.add('display-none')
})

mobile_links.forEach(link => {
    link.addEventListener('click', () => {
        mobile_menu.classList.add('display-none')
    })
})