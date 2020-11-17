let data = [
{englishVersion: "milan", city: "Милан", country: "Италия", picture: "/images/milan.png",
    information: "Милан –<br>крупный город на севере Италии, расположенный в Ломбардии, мировая столица дизайна и моды."},
{englishVersion: "venice", city: "Венеция", country: "Италия", picture: "/images/venice.png",
    information: "Венеция –<br>столица одноименной области на севере Италии. Город расположен на более чем 100 небольших островах в лагуне Адриатического моря."},
{englishVersion: "berlin", city: "Берлин", country: "Германия", picture: "/images/berlin.png",
    information: "Берлин –<br>столица Германии, история которой восходит к XIII в. О непростой истории города в XX в. напоминают Мемориал жертвам Холокоста и граффити на руинах Берлинской стены"},
{englishVersion: "fraiburg", city: "Фрайбург", country: "Германия", picture: "/images/fraiburg-desc.png",
    information: "Фрайбург-им-Брайсгау –<br>оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},
{englishVersion: "athens", city: "Афины", country: "Греция", picture: "/images/athens.png",
    information: "Афины –<br>столица современной Греции и центр древнегреческой цивилизации, которая славилась своим могуществом в эпоху античности."},
{englishVersion: "madrid", city: "Мадрид", country: "Испания",  picture: "/images/madrid.png",
    information: "Мадрид – столица Испании в центре Пиренейского полуострова, город элегантных бульваров и огромных ухоженных парков, к числу которых относится парк Буэн-Ретиро."},
{englishVersion: "barcelona", city: "Барселона", country: "Испания", picture: "/images/barcelona.png",
    information: "Барселона – столица автономной области Каталония. Этот многонациональный город знаменит своей архитектурой и искусством."},
{englishVersion: "portu", city: "Порту", country: "Португалия", picture: "/images/portu.png",
    information: "Порту -<br>второй по величине (после Лиссабона) город в Португалии, центр одноимённого округа и муниципалитета."},
{englishVersion: "lissbon", city: "Лиссабон", country: "Португалия", picture: "/images/lissbon.png",
    information: "Лиссабон – <br>столица Португалии, расположенная на нескольких холмах и омываемая водами Атлантического океана."},
{englishVersion: "vicenze", city: "Виченца", country: "Италия", picture: "images/vicenze.png",
    information: "Виче́нца — город в итальянской области Венеция, административный центр одноимённой провинции."},
{englishVersion: "kash", city: "Каш", country: "Турция", picture: "/images/kash.png",
    information: "Каш — город и порт на средиземноморском побережье Турции, центр одноименного района провинции Анталья."},
{englishVersion: "antaliya", city: "Анталия", country: "Турция", picture: "/images/antaliya.png",
    information: "Анталья – курортный город, который славится своей Старой гаванью, где швартуются яхты, и пляжами, окруженными огромными отелями."},
]


const currentCity = document.querySelector(".current__city"); // Город
const currentCountry = document.querySelector(".current__country"); // Страна
const fullCardText = document.querySelector(".full-card__text"); // Инфромация о стране
const fullCardPicture = document.querySelector(".full-card__picture") // Картинка карточки
const cardImage = document.querySelector(".image");


const countryCards = document.querySelectorAll(".js-card-container"); // Все кнопки карточек
let fullCard = document.querySelector(".full-card"); // Целая карточка для того, чтобы она могла исчезать


countryCards.forEach((countryCard) => {
    countryCard.addEventListener("click", event => {
        let cityInformation = event.currentTarget.dataset.infoAbtCity;
        for (let i = 0; i < data.length; i += 1) {
            if(data[i].englishVersion === cityInformation) {
                currentCity.innerHTML = data[i].city;
                currentCountry.innerHTML = data[i].country;
                
                fullCardText.innerHTML = data[i].information;
                fullCardPicture.src = countryCard.querySelector('img').src;
            }
        }
        fullCard.classList.add("full-card__clicked");
        console.log("2 раза проскочил")
    })
})

const icon = document.querySelector(".card-about__button");

icon.addEventListener("click", event => {
    console.log(event.currentTarget);
    fullCard.classList.remove("full-card__clicked");
})




