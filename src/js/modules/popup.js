const popup = document.querySelector('.popup');
const body = document.querySelector('body');
const main = document.querySelector('main')

export function popupHandleChange(btnOpen, btnClose) {
  document.addEventListener('click', (e) => {
    if(e.target === btnOpen){
      popup.style.top = 0;
      body.style.position = 'fixed';
    } else if(e.target === btnClose || e.target.parentNode === main){
      popup.style.top = '-100vh';
      body.style.position = '';
    }
  })
}