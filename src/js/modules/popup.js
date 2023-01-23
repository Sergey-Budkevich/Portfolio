const popup = document.querySelector('.popup');
const body = document.querySelector('body');
const main = document.querySelector('main')

export function popupHandleChange(btnOpen, btnClose) {
  document.addEventListener('click', (e) => {
    if(e.target === btnOpen){
      popup.style.display = 'block';
      setTimeout(()=>{
        body.style.position = 'fixed';
        popup.style.top = 0;
      },0)

    } else if(e.target === btnClose || e.target.parentNode === main){
      popup.style.top = '-100vh';
      body.style.position = '';
      setTimeout(()=>{
        popup.style.display = 'none'
      }, 1000);
    }
  })
}