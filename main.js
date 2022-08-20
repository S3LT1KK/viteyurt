import './src/fonts.css';
import './src/normalize.css';
import './style.css';
import './src/header.css';
import './src/main.css';
import './src/camping.css';
import './src/booking.css';
import './src/micromodaltest.css';

MicroModal.init({
   disableScroll: true
});

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

document.querySelectorAll("li").forEach(function (elem) {
   elem.addEventListener('click', function (ev) {
      document.body.classList.remove('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
})

const slider = new Swiper('.slider__bl', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 1,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});
