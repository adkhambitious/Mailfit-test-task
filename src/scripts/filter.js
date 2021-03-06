import { swiper } from './swipe';
import { travels } from './travels';
import { initSlidesEventListeners } from './elements/cardInformation';
import { createSlide } from './elements/createSlide';

export const initFilters = () => {
    const filterButtons = document.querySelectorAll(".js-country");
    const filterResetButton = document.querySelector(".js-country-reset");
    const selectedCountries = [];

    filterButtons.forEach(filterButton => {
        filterButton.addEventListener("click", event => {
            filterResetButton.classList.remove('dropdown__item_clicked');
            let selectedCountry = event.target.dataset.country;

            selectedCountries.push(selectedCountry);
            filterButton.classList.add('dropdown__item_clicked'); 
            
            const filteredTravels = Object.values(travels)
                .filter((travel) => selectedCountries.includes(travel.countryCode))
                .map((travel, index) => createSlide(travel.city, travel.cityCode, travel.country, travel.countryCode, travel.imagePath, index));
            console.log(filteredTravels,selectedCountries);
            swiper.removeAllSlides();
            
            swiper.appendSlide(filteredTravels);
            initSlidesEventListeners();
        })
        
    })

    filterResetButton.addEventListener("click", event => {
        filterResetButton.classList.add('dropdown__item_clicked');
        filterButtons.forEach(filterButton => {
            filterButton.classList.remove('dropdown__item_clicked');
        });
        
        swiper.removeAllSlides();
        swiper.appendSlide(Object.values(travels).map((travel, index) => createSlide(travel.city, travel.cityCode, travel.country, travel.countryCode, travel.imagePath, index)));
        initSlidesEventListeners();
        selectedCountries.length = 0;
    });
}

// TODO: Check if this is needed (See Coverage tab in Chrome / аналитазор мертвого кода)
const dropdownButtonForMobile = document.querySelector(".js-dropdown-name");
const dropdownList = document.querySelector('.js-dropdown-list');

const dropdownOpen = document.querySelector('.dropdown');

dropdownButtonForMobile.addEventListener("click", () => {
        dropdownOpen.classList.toggle('dropdown_open');
});
