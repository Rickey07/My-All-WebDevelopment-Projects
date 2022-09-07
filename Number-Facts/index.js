let input = document.getElementById("userInput")
let factTxt = document.getElementById("fact");
let spinner = document.getElementById("spinner");

function fetchFacts () {
    if (input.value === '') {
        alert ("Please Enter Something")
    } else {
        let url = `https://apis.ccbp.in/numbers-fact?number=${input.value}`;
        let options = {
            method:"GET"
        }
        spinner.classList.remove('d-none');
        fetch(url,options) 
        .then ((response) => {
            return response.json()
        })
        .then ((data) => {
            spinner.classList.add('d-none');
            factTxt.textContent = data.fact;
        })
    }
}

function fetch1 (event) {
    if (event.key === "Enter") {
        fetchFacts()
    } else {
        return false;
    }
}

input.addEventListener("keydown", fetch1)