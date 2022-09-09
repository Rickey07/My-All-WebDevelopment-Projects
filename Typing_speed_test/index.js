let submitBtn = document.getElementById("submitBtn")
let resetBtn = document.getElementById("resetBtn")
let quoteDisplay = document.getElementById("quoteDisplay")
let timer = document.getElementById("timer")
let quoteInput = document.getElementById("quoteInput")
let result = document.getElementById("result")
let spinner = document.getElementById("spinner")
let quote = '';
let wpmEl = document.getElementById('getWpm');

let count = 0;

const countTime =  setInterval((function() {
        count++;
        timer.textContent = count + " Seconds";
    }), 1000);
 

function stopTime () {
    clearInterval(countTime);
}


function showPara (data) {
    quoteDisplay.textContent = data.content;
}

function getPara () {
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method:"GET"
    }
    fetch(url,options)
    .then ((response) => {
        return response.json()
    })
    .then ((data) => {
        showPara(data);
    })
    .catch ((error) => {
        console.log(error);
    });
    count = 0;
    countTime;
    result.textContent = '';
    quoteInput.value = '';
}

function calculateWpm () {
    let minutes = count/60;
    console.log(minutes);
    let characterCount = quoteInput.value.length;
    console.log(characterCount);
    let perWord = characterCount/5;
    console.log(perWord);
    let grossWPM = perWord/minutes;
    wpmEl.textContent =  `Gross WPM:- ${Math.floor(grossWPM)} WPM`
    wpmEl.classList.add('success');
    
}

function validatePara () {
    if (quoteDisplay.textContent === quoteInput.value) {
        result.textContent = `Congrats you've typed the correct sentence in ${count} seconds`
        stopTime();
        result.classList.add('success');
        calculateWpm();
    } else  {
        console.log("Correct IT");
        result.textContent = 'Incorrect Sentence! Correct IT';
        result.classList.add('warning');
    }
    
}

submitBtn.addEventListener('click' , validatePara);
resetBtn.addEventListener('click' , getPara);
getPara();