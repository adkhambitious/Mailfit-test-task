const filterButtons = document.querySelectorAll(".js-country");
const countryCards = document.querySelectorAll(".js-card-container");
const filterResetButton = document.querySelector(".js-country-reset");

const severalCountries = [];

filterButtons.forEach(filterButton => {
    
    filterButton.addEventListener("click", event => {
        filterResetButton.classList.remove('dropdown__item_clicked');
        let filterDataAttr = event.target.dataset['city'];
        severalCountries.push(filterDataAttr);
        filterButton.classList.add('dropdown__item_clicked');
        
        countryCards.forEach(countryCard => {
            let country = countryCard.dataset.cityCard;
            countryCard.classList.remove('card-container_hidden');
            if (filterDataAttr !== country && !severalCountries.includes(country)) {

                countryCard.classList.add('card-container_hidden');
            }

        });
        
    })
})

filterResetButton.addEventListener("click", event => {
    filterResetButton.classList.add('dropdown__item_clicked');
    
    countryCards.forEach(countryCard => {
        countryCard.classList.remove('card-container_hidden');
    });
    
    filterButtons.forEach(filterButton => {
        filterButton.classList.remove('dropdown__item_clicked');
    });
    
    severalCountries.length = 0;

});


const dropdownButtonForMobile = document.querySelector(".js-dropdown-name");
const dropdownList = document.querySelector('.js-dropdown-list');

const dropdownOpen = document.querySelector('.dropdown');

dropdownButtonForMobile.addEventListener("click", event => {
        dropdownOpen.classList.toggle('dropdown_open');
})






