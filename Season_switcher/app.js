// Get Ref to all elements 

const btnSpring = document.querySelector('#btnSpring');
const btnSummer = document.querySelector('#btnSummer');
const btnAutmn = document.querySelector('#btnAutmn');
const btnWinter = document.querySelector('#btnWinter');
const imgChange = document.querySelector('#seasonSmallImage');


let value = '';

btnSpring.addEventListener('click' , () => {
    imgChange.src = './Images/seasons-switcher-spring-xs-img.png';
});

btnSummer.addEventListener('click',() => {
    imgChange.src = './Images/seasons-switcher-summer-xs-img.png';
});

btnAutmn.addEventListener('click',() => {
    imgChange.src = './Images/seasons-switcher-autumn-xs-img.png';
});

btnWinter.addEventListener('click',() => {
    imgChange.src = './Images/seasons-switcher-winter-xs-img.png';
});
// function to change the image 
