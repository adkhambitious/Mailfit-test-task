import Swiper from 'swiper';
import "swiper/swiper-bundle.css";

export const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    slidesPerColumnFill: 'row',
    slidesPerColumn: 2,
    spaceBetween: 9,
    noSwipingClass: 'full-card',
    height: 230,
    breakpoints: {
        768: {
            slidesPerView: 3,
            height: 670,
            noSwipingClass: 'full-card',
        },
        1440: {
            slidesPerView: 6,
            spaceBetween: 0,
            spaceBetween: 30,
            noSwipingClass: 'full-card',
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


