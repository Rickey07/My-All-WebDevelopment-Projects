console.log("Hi This is working");
let userName = prompt("Hi what's your Name?");

if (userName == null) {
    userName = "Default User"
}

showNotes();


// Show the text in the quote:-

let quoteName = document.getElementById('quoteName');
quoteName.innerText = `--By ${userName}`


// If user adds something add it to the localStorage

let addBtn = document.getElementById('addBtn').addEventListener( 'click' , () => {
    // e.preventdefault();
    console.log("clicked");
    let addTxt = document.getElementById('addTxt');

    if(addTxt.value == '') {
        return alert("Please Enter something")
    } else {
        let notes = localStorage.getItem("notes");
        let notesObj;
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(addTxt.value)
        localStorage.setItem("notes",JSON.stringify(notesObj));
        addTxt.value = '';
        showNotes();
    }
   
});


// Function to show notes from local storage

function showNotes () {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach((element,index) => {
        html += `<div class="card noteCard mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Task ${index+1}</h5>
          <p class="card-text filterTxt">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger delBtn">Delete</button>
        </div>
      </div>`
    })

    let notesContainer = document.getElementById('notes');
    if (notesObj.length !=0 ){
    notesContainer.innerHTML = html;
    } else {
        notesContainer.innerHTML = `<h1>Hi ${userName} Please Add Something! Nothing to display as of now</h1>`
    }
}

// Function to delete note

function deleteNote (index) {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes()
}


// Code to search the notes
let searchTxt = document.querySelector('#searchTxt');
// code to change the theme to dark

console.log(addBtn);
console.log(addTxt);
console.log(searchTxt);