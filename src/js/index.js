import { nextSlider,prevSlider } from "./modules/sliderLogic.js";
import {sidebarHandleChange} from "./modules/sidebar.js"

const sidebarBtn = document.querySelector('.sidebar__btn');
const btnNext = document.querySelector('.slider__button--right');
const btnPrev = document.querySelector('.slider__button--left');


btnNext && nextSlider(btnNext);
btnPrev && prevSlider(btnPrev);

sidebarBtn && sidebarHandleChange(sidebarBtn);