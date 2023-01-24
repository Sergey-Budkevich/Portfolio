const btnOpen = document.querySelector('.header__menu--open');
const btnClose = document.querySelector('.header__menu--close');
const navbar = document.querySelector('.header__navigation-items');


export function openBurger(){
  btnOpen.addEventListener('click', () => {
    btnOpen.style.display = 'none';
    navbar.style.display = 'flex';
    btnClose.style.display = 'block';
  })
}


export function closeBurger() {
  btnClose.addEventListener('click', () => {
    btnOpen.style.display = 'block';
    navbar.style.display = 'none';
    btnClose.style.display = 'none';
  })
}