const button = document.querySelector('.bar');
const backButton = document.querySelector('.menu-button')
const body = document.querySelector('body');
const div = document.querySelector('.leftSide')
const menu = document.querySelector('.menu')

button.addEventListener('click', () => {
    div.classList.remove('hidden');
    menu.classList.add('visible');
});

menu.addEventListener('click', (event) => {
    if (event.target.classList.contains('menu-button')) {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
    }
});