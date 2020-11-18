import closeSvg from './icons/close.svg';

const travels = {
    milan: {
        city: "Милан", 
        country: "Италия", 
        information: "Милан –<br>крупный город на севере Италии, расположенный в Ломбардии, мировая столица дизайна и моды."
    },
    venice: {
        city: "Венеция",
        country: "Италия",
        information: "Венеция –<br>столица одноименной области на севере Италии. Город расположен на более чем 100 небольших островах в лагуне Адриатического моря.",
    },
    berlin: {
        city: "Берлин",
        country: "Германия",
        information: "Берлин –<br>столица Германии, история которой восходит к XIII в. О непростой истории города в XX в. напоминают Мемориал жертвам Холокоста и граффити на руинах Берлинской стены",
    },
    fraiburg: {
        city: "Фрайбург",
        country: "Германия",
        information: "Фрайбург-им-Брайсгау –<br>оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."
    },
    athens: {
        city: "Афины",
        country: "Греция",
        information: "Афины –<br>столица современной Греции и центр древнегреческой цивилизации, которая славилась своим могуществом в эпоху античности."
    },
    madrid: {
        city: "Мадрид",
        country: "Испания",
        information: "Мадрид – столица Испании в центре Пиренейского полуострова, город элегантных бульваров и огромных ухоженных парков, к числу которых относится парк Буэн-Ретиро."
    },
    barcelona: {
        city: "Барселона",
        country: "Испания",
        information: "Барселона – столица автономной области Каталония. Этот многонациональный город знаменит своей архитектурой и искусством."
    },
    portu: {
        city: "Порту",
        country: "Португалия",
        information: "Порту -<br>второй по величине (после Лиссабона) город в Португалии, центр одноимённого округа и муниципалитета."
    },
    lissbon: {
        city: "Лиссабон",
        country: "Португалия",
        information: "Лиссабон – <br>столица Португалии, расположенная на нескольких холмах и омываемая водами Атлантического океана."
    },
    vicenze: {
        city: "Виченца",
        country: "Италия",
        information: "Виче́нца — город в итальянской области Венеция, административный центр одноимённой провинции."
    },
    kash: {
        city: "Каш",
        country: "Турция",
        information: "Каш — город и порт на средиземноморском побережье Турции, центр одноименного района провинции Анталья."
    },
    antaliya: {
        city: "Анталия",
        country: "Турция",
        information: "Анталья – курортный город, который славится своей Старой гаванью, где швартуются яхты, и пляжами, окруженными огромными отелями."
    },
}

const createNewElement = (htmlString) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;

    return tempElement.firstElementChild;
}

const createFullCard = (cityName, countryName, description, imagePath, isReverse = false) => createNewElement(`
    <div class="full-card ${isReverse ? "full-card_order_reverse" : ''} js-full-card">
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


const currentCity = document.querySelector(".current__city"); // Город
const currentCountry = document.querySelector(".current__country"); // Страна
const fullCardText = document.querySelector(".full-card__text"); // Инфромация о стране
const fullCardPicture = document.querySelector(".full-card__picture"); // Картинка карточки
const cardImage = document.querySelector(".image");

const countryCardContainers = document.querySelectorAll(".js-card-container"); // Все кнопки карточек
const deleteLastFullCard = [];
let previousFullCard;

countryCardContainers.forEach((countryCardContainer) => {
    
    countryCardContainer.querySelector('.js-card').addEventListener("click", event => {
        if(previousFullCard !== undefined) {
            previousFullCard.remove();
        }
        previousFullCard = countryCardContainer;
        
        let cityInformation = countryCardContainer.dataset.infoAbtCity;
        const countryData = travels[cityInformation];
        const imagePath = countryCardContainer.querySelector('img').src;
        const fullCountryCard = createFullCard(countryData.city, countryData.country, countryData.information, imagePath);
        countryCardContainer.append(fullCountryCard);
        previousFullCard = fullCountryCard;
        
        
        const icon = fullCountryCard.querySelector(".icon");
        icon.addEventListener("click", event => {
            countryCardContainer.removeChild(fullCountryCard);
        })
    })
});






