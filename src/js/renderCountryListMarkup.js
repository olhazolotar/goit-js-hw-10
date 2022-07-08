export function renderCountryListMarkup(countryies) {
    for (const country of countryies) {
        const { name: official, capital, population, flags: svg, languages } = country;
  
         return countryies.map(country => `<li class='country-list__item'>
<img class='country-list__img' src="${country.flags.svg}" alt="${country.name.official}" width="50">
<span class='country-list__name-list'> ${country.name.official} </span>
</li>`).join('');
    }   
    
};