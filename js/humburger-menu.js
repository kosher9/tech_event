let hMenu = document.getElementById('menu-list')
let menuButton = document.getElementById('menu-button')
let closeButton = document.getElementById('menu-close')

menuButton.addEventListener('click', () => {
    hMenu.style.display = 'flex'
})

closeButton.addEventListener('click', () => {
    hMenu.style.display = 'none'
})