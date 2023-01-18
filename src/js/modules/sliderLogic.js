// const btnNext = document.querySelector('.slider__button--right');
// const btnPrev = document.querySelector('.slider__button--left');
const sliderLine = document.querySelector('.slider__line');
let itemWidth = 100;
let offset = 0;

function nextSlider(btnNext){
  btnNext.addEventListener('click',() => {
      offset += itemWidth;
      if (offset > itemWidth * 2){
          offset = 0 ;
      }
      sliderLine.style.left = -offset + '%';
  })
}

function prevSlider(btnPrev){
  btnPrev.addEventListener('click',() => {
      offset -= itemWidth;
      if (offset < 0){
          offset = itemWidth * 2 ;
      }
      sliderLine.style.left = -offset + '%';
  })
}

export {prevSlider, nextSlider}