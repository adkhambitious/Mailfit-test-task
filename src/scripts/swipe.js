import { travels } from './travels';
import { createSlide } from './elements/createSlide';
import { initSlidesEventListeners } from './elements/cardInformation';
import Swiper, { Navigation, Pagination } from 'swiper';
import "swiper/swiper-bundle.css";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

export const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    slidesPerColumnFill: 'row',
    slidesPerColumn: 2,
    spaceBetween: 18,
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
        el: '.js-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

swiper.appendSlide(
    Object.values(travels).map((travel, index) => createSlide(travel.city, travel.cityCode, travel.country, travel.countryCode, travel.imagePath, index))
);

initSlidesEventListeners();
