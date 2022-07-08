export function renderCountryMurkup(countryies) {
    for (const country of countryies) {
        const { name: official, capital, population, flags: svg, languages } = country;

        const langua = Object.values(languages).join(', ');
        
    return `<li>
<img src="${country.flags.svg}" alt="${country.name.official}" width="50">
<span> ${country.name.official} </span>
</li>
<li>Capital: ${capital}  </li>
<li>Population:  ${population} </li>
<li>Languages: ${langua} </li>`;       
    }      
} 