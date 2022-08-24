// Get ref to all the elements 

const image = document.querySelector('#image');
const imageWidth = document.querySelector('#imageWidth');
const decrementBtn = document.querySelector('#decrementBtn');
const incrementBtn = document.querySelector('#incrementBtn');
const maxWidth = 300;
const minWidth = 100;
const errorMessagePara = document.querySelector('#warningMessage');
let currentWidth = image.width;




decrementBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    if (currentWidth <= 100) {
        errorMessagePara.textContent = 'Cannot be reduced more than 100px'
    } else {
        let updatedImageWidth = currentWidth-5;
        currentWidth = updatedImageWidth;
        image.style.width = `${currentWidth}px`;
        imageWidth.textContent = `${currentWidth}px`;
    }
})

incrementBtn.addEventListener('click',(e) => {
    e.preventDefault();
    if (currentWidth ==300) {
        errorMessagePara.textContent = 'Cannot be increased more than 300px'
    } else {
        let updatedImageWidth = currentWidth+5;
        currentWidth = updatedImageWidth;
        image.style.width = `${currentWidth}px`
        imageWidth.textContent = `${currentWidth}px`
    }
})






// function checkWidth () {
//     if (image.width == maxWidth) {
//         errorMessagePara.textContent = "Image Width cannot be more than 300px";
//         image.style.width = `${maxWidth}px`
//         console.log(currentWidth);
//         return true;
//     } else if (image.width <= minWidth) {
//         errorMessagePara.textContent = "Image width cannot be lower than 100px";
//         image.style.width = `${minWidth}px`
//         console.log(currentWidth);
//         return true;
//     } 
// }

// function incrementDecrement (e) {
//     if (e.target.id == "decrementBtn") {
//         console.log(e);
//         console.log("yes");
//         let updatedImageWidth = currentWidth-5;
//         currentWidth = updatedImageWidth;
//         image.style.width = `${currentWidth}px`
//     } else {
//         let updatedImageWidth = currentWidth+5;
//         currentWidth = updatedImageWidth;
//         image.style.width = `${currentWidth}px`
//     }
// }