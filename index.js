const get = element => document.getElementById(element);

const open = get("menu-btn");
const nav = get("nav");
const exit = get("exit-btn");

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})