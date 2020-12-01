import milanPath from '/images/milan.png';
import berlinPath from '/images/berlin.png';
import venicePath from '/images/venice.png';
import vicenzePath from '/images/vicenze.png';
import barcelonaPath from '/images/barcelona.png';
import madridPath from '/images/madrid.png';
import fraiburgPath from '/images/fraiburg.png';
import kashPath from '/images/kash.png';
import antaliyaPath from '/images/antaliya.jpg';
import athensPath from '/images/athens.png';
import portuPath from '/images/portu.png';
import lissbonPath from '/images/lissbon.png';

import tokioPath from '/images/tokio.jpg';
import miamiPath from '/images/miami.jpg';
import kazanPath from '/images/kazan.jpg';


const travels = {
    milan: {
        cityCode: "milan",
        countryCode: "italy",
        city: "Милан", 
        country: "Италия", 
        information: "Милан –<br>крупный город на севере Италии, расположенный в Ломбардии, мировая столица дизайна и моды.",
        imagePath: milanPath
    },
    venice: {
        cityCode: "venice",
        countryCode: "italy",
        city: "Венеция",
        country: "Италия",
        information: "Венеция –<br>столица одноименной области на севере Италии. Город расположен на более чем 100 небольших островах в лагуне Адриатического моря.",
        imagePath: venicePath
    },
    berlin: {
        cityCode: "berlin",
        countryCode: "germany",
        city: "Берлин",
        country: "Германия",
        information: "Берлин –<br>столица Германии, история которой восходит к XIII в. О непростой истории города в XX в. напоминают Мемориал жертвам Холокоста и граффити на руинах Берлинской стены",
        imagePath: berlinPath
    },
    fraiburg: {
        cityCode: "fraiburg",
        countryCode: "germany",
        city: "Фрайбург",
        country: "Германия",
        information: "Фрайбург-им-Брайсгау –<br>оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.",
        imagePath: fraiburgPath
    },
    athens: {
        cityCode: "athens",
        countryCode: "greece",
        city: "Афины",
        country: "Греция",
        information: "Афины –<br>столица современной Греции и центр древнегреческой цивилизации, которая славилась своим могуществом в эпоху античности.",
        imagePath: athensPath
    },
    madrid: {
        cityCode: "madrid",
        countryCode: "spain",
        city: "Мадрид",
        country: "Испания",
        information: "Мадрид – <br>столица Испании в центре Пиренейского полуострова, город элегантных бульваров и огромных ухоженных парков, к числу которых относится парк Буэн-Ретиро.",
        imagePath: madridPath
    },
    barcelona: {
        cityCode: "barcelona",
        countryCode: "spain",
        city: "Барселона",
        country: "Испания",
        information: "Барселона – <br>столица автономной области Каталония. Этот многонациональный город знаменит своей архитектурой и искусством.",
        imagePath: barcelonaPath
    },
    portu: {
        cityCode: "portu",
        countryCode: "portugal",
        city: "Порту",
        country: "Португалия",
        information: "Порту -<br>второй по величине (после Лиссабона) город в Португалии, центр одноимённого округа и муниципалитета.",
        imagePath: portuPath
    },
    lissbon: {
        cityCode: "lissbon",
        countryCode: "portugal",
        city: "Лиссабон",
        country: "Португалия",
        information: "Лиссабон – <br>столица Португалии, расположенная на нескольких холмах и омываемая водами Атлантического океана.",
        imagePath: lissbonPath
    },
    vicenze: {
        cityCode: "vicenze",
        countryCode: "italy",
        city: "Виченца",
        country: "Италия",
        information: "Виче́нца — <br>город в итальянской области Венеция, административный центр одноимённой провинции.",
        imagePath: vicenzePath
    },
    kash: {
        cityCode: "kash",
        countryCode: "turkey",
        city: "Каш",
        country: "Турция",
        information: "Каш — <br>город и порт на средиземноморском побережье Турции, центр одноименного района провинции Анталья.",
        imagePath: kashPath
    },
    antaliya: {
        cityCode: "antaliya",
        countryCode: "turkey",
        city: "Анталия",
        country: "Турция",
        information: "Анталья – <br>курортный город, который славится своей Старой гаванью, где швартуются яхты, и пляжами, окруженными огромными отелями.",
        imagePath: antaliyaPath
    },
    tokio: {
        cityCode: "tokio",
        countryCode: "japan",
        city: "Токио",
        country: "Япония",
        information: "Токио — <br>столица Японии, её административный, финансовый, промышленный и политический центр. Крупнейшая городская экономика мира.",
        imagePath: tokioPath,
    },
    miami: {
        cityCode: "miami",
        countryCode: "usa",
        city: "Майами",
        country: "США",
        information: "Майами-Бич – <br>город на юге штата Флорида. Он расположен на острове, а с Майами соединен мостами. Широкие пляжи Майами-Бич простираются от парка Норт-Шор-Опен-Спейс до парка Саут-Пойнт, пересекая парк Луммус.",
        imagePath: miamiPath,
    },
    kazan: {
        cityCode: "kazan",
        countryCode: "russia",
        city: "Казань",
        country: "Россия",
        information: "Казань – <br>город на юго-западе России, расположенный на берегах Волги и Казанки. В столице находится древний кремль – крепость, известная своими музеями и святыми местами.",
        imagePath: kazanPath,
    },
    
}


export { travels };
