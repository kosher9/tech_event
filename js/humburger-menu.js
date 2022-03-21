const hMenu = document.getElementById('menu-list');
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('menu-close');

menuButton.addEventListener('click', () => {
  hMenu.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  hMenu.style.display = 'none';
});