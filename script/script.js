const menuList = document.getElementById('menu-list')
const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')

menuList.style.maxHeight = '0px'
menuList.style.padding = '0px'


function toggleMenu() {
    if(menuList.style.maxHeight === '0px') {
        menuList.style.maxHeight = '300px'
        menuList.style.padding = '32px 16px'
        menuBtn.style.display = 'none'
        closeBtn.style.display = 'block'
    }   else {
        menuList.style.maxHeight = '0px'
        menuList.style.padding = '0px'
        menuBtn.style.display = 'block'
        closeBtn.style.display = 'none'
    }
}