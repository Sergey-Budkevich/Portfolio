import { nextSlider,prevSlider } from "./modules/sliderLogic.js";
import {sidebarHandleChange} from "./modules/sidebar.js"
import { popupHandleChange } from "./modules/popup.js";
import { openBurger , closeBurger} from "./modules/burger.js"

const sidebarBtn = document.querySelector('.sidebar__btn');

const btnNext = document.querySelector('.slider__button--right');
const btnPrev = document.querySelector('.slider__button--left');

const btnOpen = document.querySelector('.profile__description-btn');
const btnClose = document.querySelector('.popup__btn');




btnNext && nextSlider(btnNext);
btnPrev && prevSlider(btnPrev);

sidebarBtn && sidebarHandleChange(sidebarBtn);

(btnOpen && btnClose) && popupHandleChange(btnOpen, btnClose);

openBurger()
closeBurger()
