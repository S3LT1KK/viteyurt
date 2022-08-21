import './src/fonts.css';
import './src/normalize.css';
import './style.css';
import './src/header.css';
import './src/main.css';
import './src/camping.css';
import './src/booking.css';
import './src/micromodaltest.css';
import './src/accordeon.css';
import './src/footer.css';
import './src/map.css';
import './src/slider.css';

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

document.querySelectorAll(".header__link").forEach(function (elem) {
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

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 3,
   slidesPerColumn: 2,
   spaceBetween: '5%',
   // autoplay: {
   //    delay: 5000,
   //    disableOnInteraction: false,
   // },

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


const accordeon = () => {
   const charItem = document.querySelectorAll('.characteristics__item');
   charItem.forEach((i) => {
      const charButton = i.querySelector('.characteristics__title');
      const charContent = i.querySelector('.characteristics__description');

      charButton.addEventListener('click', () => {
         if (charContent.classList.contains('open')) {
            charContent.style.height = '';
         } else {
            charContent.style.height = charContent.scrollHeight + 'px';
         }
         charButton.classList.toggle('active');
         charContent.classList.toggle('open');

      })
   })

}
accordeon();