import './css/styles.css';
import { fetchCountry } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { renderCountryMurkup } from './js/renderCountryMurkup';
import { renderCountryListMarkup } from './js/renderCountryListMarkup';


const refs = {
    counrtyCards: document.querySelector('.country-list'),
    input: document.querySelector('#search-box')
}

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
    let inputValue = event.target.value.trim();

    if (inputValue === '') {
        refs.counrtyCards.innerHTML = '';
        
    } 
    
    fetchCountry(inputValue)
        .then(country => {
            if (country.length < 2) {
                refs.counrtyCards.innerHTML = renderCountryMurkup(country)
                console.log(country.length);
            } else if (country.length > 2 & country.length < 10) {
                refs.counrtyCards.innerHTML = renderCountryListMarkup(country)
                console.log(country.length);
            } console.log("Too many matches found. Please enter a more specific name.");





            
        })
        .catch();
    
    
    
    
    
    

    // fetchCountry(inputValue)
    //     .then(country => {
    //         if (country.length > 10) {
    //             console.log(little);
    //         } else if (countryies.length > 2 & countryies.length < 10) {
    //             renderCountryMurkup();
    //         } else {
    //             renderCountryListMarkup();
    //         }
    //     })
    //     .catch(error => { error })
    //     .finally(() => {
        
    //     });
}

    

    
       


   

