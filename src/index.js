import './css/styles.css';

const refs = {
    counrtyCards: document.querySelector('.country-list'),
    input: document.querySelector('#search-box')
}

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', onInput)

function fetchCountry(countryName) {
    return fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json();
        }); 
}   

function renderCountryList(countryies) {
    for (const country of countryies) {
        const { name: official, capital, population, flags: svg, languages } = country;

        const langua = Object.values(languages).join(', ');
        
    const murkup = `<li>
<img src="${country.flags.svg}" alt="${country.name.official}" width="50">
<span> ${country.name.official} </span>
</li>
<li>Capital: ${capital}  </li>
<li>Population:  ${population} </li>
<li>Languages: ${langua} </li>`;
        
    refs.counrtyCards.innerHTML = murkup;
    }    
}

function onInput() {
    
    fetchCountry(peru)
    .then(renderCountryList)
    .catch(error => {
        console.log(error);
    });
}


   

