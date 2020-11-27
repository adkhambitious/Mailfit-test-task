import closeSvg from './icons/close.svg';
import { travels } from './travels';
import { createNewElement } from './createNewElement';

const createFullCard = (cityName, countryName, description, imagePath, shiftValue, order) => createNewElement(`
    <div style="left: ${shiftValue}px" class="full-card ${order ? "full-card_order_reverse" : ''} js-full-card">
        <img class="full-card__picture" src="${imagePath}" alt="The city you chose">
        <p class="current__city disposition_absolute">${cityName}</p>
        <p class="current__country disposition_absolute">${countryName}</p>
        <div class="card-about">
            <p class="full-card__text">
                ${description}
            </p>
            <a class="card-about__button" href="#">Подробнее</a>
            <button class="closeIcon"><img class="icon__img" src="${closeSvg}"></button>
        </div>
    </div>
`);

const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperContainerRightBorder = swiperWrapper.parentElement.getBoundingClientRect().right;
const FULL_CARD_WIDTH = 570;

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

            const travel = travels[cityCode];
        
            const imagePath = countryCardContainer.querySelector('img').src;
            const expectedRightBorder = event.currentTarget.getBoundingClientRect().left + FULL_CARD_WIDTH;
            order = expectedRightBorder > swiperContainerRightBorder;
            const fullCountryCard = createFullCard(
                travel.city, 
                travel.country, 
                travel.information, 
                imagePath, 
                shiftValue, 
                order
            );
            countryCardContainer.append(fullCountryCard);
            previousFullCard = fullCountryCard;

            const closeIcon = fullCountryCard.querySelector(".icon-close");
            closeIcon.addEventListener("click", event => {
                countryCardContainer.removeChild(fullCountryCard);
            })
        })
    });
}

export { initSlidesEventListeners };



