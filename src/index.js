import './css/styles.css';
import { fetchCountry } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { renderCountryMurkup } from './js/renderCountryMurkup';
import { renderCountryListMarkup } from './js/renderCountryListMarkup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
    counrtyCards: document.querySelector('.country-list'),
    input: document.querySelector('#search-box')
}

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
    let inputValue = event.target.value.trim();

    if (inputValue === '' || inputValue === " ") {
        refs.counrtyCards.innerHTML = '';
        return Notify.warning('Search query is empty!');
    }
    
fetchCountry(inputValue)
        .then(country => {
            if (country.length < 2) {
                refs.counrtyCards.innerHTML = renderCountryMurkup(country)
            } else if (country.length >= 2 && country.length <= 10) {
                refs.counrtyCards.innerHTML = renderCountryListMarkup(country);             
            } else if (country.length > 10) {
                refs.counrtyCards.innerHTML = '';
                Notify.info("Too many matches found. Please enter a more specific name.");
            }     
        })
    .catch(() => {
        refs.counrtyCards.innerHTML = '';
            Notify.failure('Oops, there is no country with that name');
        });
}

    

    
       


   

