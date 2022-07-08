export function renderCountryListMarkup(countryies) {
    for (const country of countryies) {
        const { name: official, capital, population, flags: svg, languages } = country;
  
         return countryies.map(country => `<li>
<img src="${country.flags.svg}" alt="${country.name.official}" width="50">
<span> ${country.name.official} </span>
</li>`).join('');
    }   
    
};