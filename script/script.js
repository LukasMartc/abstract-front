const menuList = document.getElementById('menu-list')
const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const nav = document.getElementById('nav-line')

menuList.style.maxHeight = '0px'
menuList.style.padding = '0px'

function toggleMenu() {
    if(menuList.style.maxHeight === '0px') {
        menuList.style.maxHeight = '300px'
        menuList.style.padding = '32px 16px'
        menuBtn.style.display = 'none'
        closeBtn.style.display = 'block'
        nav.style.border = '2px solid #d4d4d4'
    }   else {
        menuList.style.maxHeight = '0px'
        menuList.style.padding = '0px'
        menuBtn.style.display = 'block'
        closeBtn.style.display = 'none'
        nav.style.border = 'none'
    }
}