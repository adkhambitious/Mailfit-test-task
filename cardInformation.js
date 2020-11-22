import closeSvg from './icons/close.svg';
import { travels } from './travels';
import { createNewElement } from './createNewElement';

const createFullCard = (cityName, countryName, description, imagePath, shiftValue, order) => createNewElement(`
    <div style="left: ${shiftValue}px" class="full-card ${(order > 3 && order < 6) || order > 9 ? "full-card_order_reverse" : ''} js-full-card">
        <img class="full-card__picture" src="${imagePath}" alt="The city you chose">
        <p class="current__city disposition_absolute">${cityName}</p>
        <p class="current__country disposition_absolute">${countryName}</p>
        <div class="card-about">
            <p class="full-card__text">
                ${description}
            </p>
            <a class="card-about__button" href="#">Подробнее</a>
            <button class="icon"><img class="icon__img" src="${closeSvg}"></button>
        </div>
    </div>
`);

const swiperWrapper = document.querySelector('.swiper-wrapper');

const deleteLastFullCard = [];
let previousFullCard;

const initSlidesEventListeners = () => {
    const countryCardContainers = document.querySelectorAll(".js-card-container");
    countryCardContainers.forEach((countryCardContainer) => {
        countryCardContainer.querySelector('.js-card').addEventListener("click", event => {
            if(previousFullCard !== undefined) {
                previousFullCard.remove();
            }
            const values = swiperWrapper.style.transform.split(',').map(item => item.replace('translate3d(', '').replace(')', '').replace('px', ''));
            let shiftValue = Math.abs(values[0]);

            let cityCode = countryCardContainer.dataset.infoAbtCity;
            let order = countryCardContainer.dataset.order;
            console.log((order > 2 && order > 8) && order < 6);
            console.log(order);

            const travel = travels[cityCode];
        
            console.log(travel);
            const imagePath = countryCardContainer.querySelector('img').src;
            const fullCountryCard = createFullCard(travel.city, travel.country, travel.information, imagePath, shiftValue, order);
            countryCardContainer.append(fullCountryCard);
            console.log(fullCountryCard, countryCardContainer)
            previousFullCard = fullCountryCard;

            const icon = fullCountryCard.querySelector(".icon");
            icon.addEventListener("click", event => {
                countryCardContainer.removeChild(fullCountryCard);
            })
        })
    });
}

export { initSlidesEventListeners };



