// Get ref to all the elements 

const goButton = document.getElementById('goButton');
const stopButton = document.getElementById('stopButton');
const readyButton = document.getElementById('readyButton');
const stopLightBulb = document.getElementById('stopLight');
const readyLightBulb = document.getElementById('readyLight');
const goLightBulb = document.getElementById('goLight');

goButton.addEventListener('click', (e) => {
    e.preventDefault();
    goLightBulb.style.backgroundColor = '#199473';
    goButton.style.backgroundColor ='#199473';
    readyButton.style.backgroundColor = '#4b5069';
    readyLightBulb.style.backgroundColor = '#4b5069';
    stopButton.style.backgroundColor = '#4b5069';
    stopLightBulb.style.backgroundColor ='#4b5069';
})
stopButton.addEventListener('click', (e) => {
    e.preventDefault();
    goLightBulb.style.backgroundColor = '#4b5069';
    goButton.style.backgroundColor ='#4b5069';
    stopButton.style.backgroundColor = '#cf1124';
    stopLightBulb.style.backgroundColor ='#cf1124';
    readyButton.style.backgroundColor = '#4b5069';
    readyLightBulb.style.backgroundColor = '#4b5069'
})
readyButton.addEventListener('click', (e) => {
    e.preventDefault();
    goLightBulb.style.backgroundColor = '#4b5069';
    goButton.style.backgroundColor ='#4b5069';
    stopButton.style.backgroundColor = '#4b5069';
    stopLightBulb.style.backgroundColor ='#4b5069';
    readyButton.style.backgroundColor = '#f7c948';
    readyLightBulb.style.backgroundColor = '#f7c948';

})

