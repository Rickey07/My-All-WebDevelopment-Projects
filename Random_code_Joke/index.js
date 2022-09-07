let jokeTextQuestion = document.getElementById("jokeTextQue");
let jokeTextAns = document.getElementById("jokeTextAns");
let jokeBtn = document.getElementById("jokeBtn");
let spinner = document.getElementById('spinner');
let authorPara = document.getElementById('authorPara');
authorPara.style.color = '#ffffff';


// Typing Effect Creation.

// let text = "Made with by Prabadhya"
// let i = 0;
// let speed = 50;

// function typeWriter () {
//     if (i < text.length) {
//         authorPara.innerHTML += text.charAt(i);
//         i++
//         setTimeout(typeWriter , speed);
//     }
// }

// typeWriter();

function generateJoke () {
    let url = 'https://backend-omega-seven.vercel.app/api/getjoke';
    let options = {
        method:"GET"
    }
    spinner.classList.remove('d-none');
    fetch(url,options)
    .then ((response) => {
        return response.json();
    })
    .then ((jsonData) => {
        spinner.classList.add('d-none');
        jokeTextQuestion.textContent = `Question:- ${jsonData[0].question}` ;
        jokeTextAns.textContent = `Answer:-${jsonData[0].punchline}`;
    })
}

jokeBtn.addEventListener("click", generateJoke)

