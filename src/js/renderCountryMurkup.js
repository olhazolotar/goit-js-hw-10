export function renderCountryMurkup(countryies) {
    for (const country of countryies) {
        const { name: official, capital, population, flags: svg, languages } = country;

        const langua = Object.values(languages).join(', ');
        
    return `<li class='country-list__item'>
<img class='country-list__img' src="${country.flags.svg}" alt="${country.name.official}" width="100">
<span class='country-list__name'> ${country.name.official} </span>
</li>
<li>Capital: ${capital}  </li>
<li>Population:  ${population} </li>
<li>Languages: ${langua} </li>`;       
    }      
} 