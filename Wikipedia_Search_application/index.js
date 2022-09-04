const searchInputEl = document.getElementById('searchInput');
let searchResultsContainer = document.getElementById('searchResults');
let spinner = document.getElementById('spinner');


function createAndAppendResults (result) {
    // Creating a result element 
    let resultItemEl = document.createElement('div');
    resultItemEl.classList.add('result-item');
    searchResultsContainer.appendChild(resultItemEl);

    // creating Title 
    let {link,title,description} = result;
    let titleEl = document.createElement('a');
    titleEl.link = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add('result-title');
    resultItemEl.appendChild(titleEl);

    // creating break element 
    let breakElement = document.createElement('br');
    resultItemEl.appendChild(breakElement);

    // creating URL element
    let urlElement = document.createElement('a');
    urlElement.classList.add('result-url');
    urlElement.href = link;
    urlElement.target = "_blank";
    urlElement.textContent = link;
    resultItemEl.appendChild(urlElement);

    // creating break element 
    let breakElementEL = document.createElement('br');
    resultItemEl.appendChild(breakElementEL);
    
    // creating description element
    let descriptionEl = document.createElement('p');
    descriptionEl.textContent = description;
    descriptionEl.classList.add('link-description');
    resultItemEl.appendChild(descriptionEl);
}

function displayResults (searchResults) {
    let results = searchResults;
    spinner.classList.toggle('d-none');
    for (let result of results ) {
        createAndAppendResults (result);
    }
}

function searchNow (event) {
    if (event.key === "Enter") {
        searchResultsContainer.textContent = ''
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search/?search="+searchInput;
        let options = {
            method:"GET"
        }
        spinner.classList.toggle('d-none');
        fetch(url,options)
        .then (function (response) {
            return response.json();
        })
        .then (function (data) {
            let {search_results} = data;
            displayResults (search_results);
        })
    }
}

searchInputEl.addEventListener('keydown', searchNow)