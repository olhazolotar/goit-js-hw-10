!function(){var n={counrtyCards:document.querySelector(".country-list"),input:document.querySelector("#search-box")};function t(t){var a=!0,o=!1,c=void 0;try{for(var i,e=t[Symbol.iterator]();!(a=(i=e.next()).done);a=!0){var l=i.value,r=(l.name,l.capital),u=l.population,s=(l.flags,l.languages),f=Object.values(s).join(", "),p='<li>\n<img src="'.concat(l.flags.svg,'" alt="').concat(l.name.official,'" width="50">\n<span> ').concat(l.name.official," </span>\n</li>\n<li>Capital: ").concat(r,"  </li>\n<li>Population:  ").concat(u," </li>\n<li>Languages: ").concat(f," </li>");n.counrtyCards.innerHTML=p}}catch(n){o=!0,c=n}finally{try{a||null==e.return||e.return()}finally{if(o)throw c}}}n.input.addEventListener("input",(function(){(n=peru,fetch("https://restcountries.com/v3.1/name/".concat(n,"?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))).then(t).catch((function(n){console.log(n)}));var n}))}();
//# sourceMappingURL=index.7768d1ee.js.map
