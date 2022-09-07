let searchInput = document.getElementById("searchInput")
let resultCountriesE1 = document.getElementById("resultCountries")
let searchInputval = ""
let spinner = document.getElementById("spinner")
let countries = []
let url = 'https://apis.ccbp.in/countries-data';
let options = {
    method:"GET"
}

function createElement(data) {
    let countryCard = document.createElement('div');
    countryCard.classList.add('country-card','col-11','col-md-5','mr-auto','ml-auto','d-flex','flex-row');
     
    resultCountriesE1.appendChild(countryCard);
    
    let countryFlag = document.createElement('img');
    countryFlag.src = data.flag;
    countryFlag.classList.add('country-flag','mt-auto','mb-auto');
    countryCard.appendChild(countryFlag);
    
    let countryInfo = document.createElement('div');
    countryInfo.classList.add('d-flex','flex-column','ml-4');
    countryCard.appendChild(countryInfo);
    
    let countryName = document.createElement('h2');
    countryName.classList.add('country-name');
    countryName.textContent = data.name
    countryInfo.appendChild(countryName);
    
    let countryPopulation = document.createElement('p');
    countryPopulation.classList.add('country-population');
    countryPopulation.textContent = data.population
    countryInfo.appendChild(countryPopulation)
    
}

function getResults () {
    fetch (url,options)
    .then ((response) => {
        return response.json()
    })
    .then ((jsonData) => {
        for (let data of jsonData ) {
            createElement(data);
            countries.push(data);
        }
    })
}

function displaySearchResults () {
    resultCountriesE1.textContent = '';
    for (let country of countries) {
        let countryName = country.name;
        if (countryName.includes(searchInputval)) {
            createElement(country);
        }
    }
}

getResults();

function onSearch (event) {
    searchInputval = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
   searchInputval = searchInputval.trim();
    displaySearchResults ();
}

searchInput.addEventListener("keyup", onSearch)
