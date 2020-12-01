import { createNewElement } from "./createNewElement";

const createSlide = (city, cityCode, country, countryCode, imagePath, index) => createNewElement(`
<div class="swiper-slide js-swiper-slide" data-country="${countryCode}">
    <div  data-info-abt-city="${cityCode}" data-order="${index}" class="card-container js-card-container">
        <div class="card js-card">
            <img class="image" src="${imagePath}" alt="">
            <p class="card__country city">${city}</p>
            <p class="card__country">${country}</p>
        </div>
    </div>
</div>`);
                            
export { createSlide };
