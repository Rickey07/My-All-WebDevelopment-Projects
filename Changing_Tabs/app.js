// Get ref to all the elements 

const btnAbout = document.querySelector('#btnAbout');
const btnTime = document.querySelector('#btnTime');
const btnAttractions = document.querySelector('#btnAttractions');
const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
const para3 = document.querySelector('.para3');


 let btnAboutFunc = btnAbout.addEventListener('click' , () => {
    btnAbout.classList.add('active');
    para2.style.display = 'none';
    para3.style.display = 'none';
    para1.style.display = 'block';
    btnAttractions.classList.remove('active');
    btnTime.classList.remove('active');
})
btnTime.addEventListener('click' , () => {
    btnTime.classList.add('active');
    para1.style.display = 'none';
    para3.style.display = 'none';
    para2.style.display = 'block';
    btnAbout.classList.remove('active');
    btnAttractions.classList.remove('active');
})
btnAttractions.addEventListener('click' , () => {
    btnAttractions.classList.add('active');
    para1.style.display = 'none';
    para3.style.display = 'block';
    para2.style.display = 'none';  
    btnAbout.classList.remove('active');
    btnTime.classList.remove('active');
})