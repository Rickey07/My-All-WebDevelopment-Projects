// Get ref to all the elements 


const puppyImage = document.querySelector('#puppyImage');
const likeButton = document.querySelector('#likeButton');
const likeIcon = document.querySelector('#likeIcon');
const bodyEle = document.querySelector('.dark-light');

let liked = false;

function likeUnLike () {
    if (liked === false) {
        puppyImage.src = './images/white-puppy-liked-img.png';
        likeButton.style.backgroundColor = '#0967d2';
        likeIcon.style.color = '#0967d2';
        liked = true;
        bodyEle.classList.toggle('active');
    } else {
        puppyImage.src = './images/white-puppy-img.png';
        likeButton.style.backgroundColor = '#cbd2d9';
        likeIcon.style.color = '#cbd2d9';
        liked = false;
        bodyEle.classList.toggle('active');
    }
}

likeButton.addEventListener('click', likeUnLike);

