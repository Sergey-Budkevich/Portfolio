const sidebar = document.querySelector('.sidebar');
const bodyWidth = document.querySelector('.sidebar__body').offsetWidth;
// const sidebarBtn = document.querySelector('.sidebar__btn');
let position = parseInt(window.getComputedStyle(sidebar, null).getPropertyValue('left'));




export function sidebarHandleChange(button){
  button.addEventListener('click', () => {
    if(position < 0 ){
      sidebar.style.left = 0;
      position = 0;
      button.style.transform = 'rotate(180deg)';
    } else {
      sidebar.style.left = -bodyWidth + 'px';
      position = -bodyWidth
      button.style.transform = 'rotate(0deg)';
    }
  })
}
