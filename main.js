let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
//   this.info = function() {
//       console.log(Book)
//   }
}  

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render()
}

function addBookToLibrary(){
  let title = document.getElementById("title").value; //maybe remove #?
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  console.log(newBook);
  myLibrary.push(newBook);
  render();
  // do stuff here
}

function render() {
  let libraryElement = document.getElementById("library");
  libraryElement.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let Book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.setAttribute("class", "book-card");
    // NEED TO APPEND THE INPUT AS NEW DIVS (MAKE THEM STAY WHEN PRESSING "ADD BOOK" BTN)
    bookElement.innerHTML = `
              <label for="title">Title: </label>
              <input type="text" id="title">
              <label for="author">Author: </label>
              <input type="text" id="author">
              <label for="pages">Pages: </label>
              <input type="text" id="pages">
              <label for="read">Read: </label>
              <input type="checkbox" id="read">
              <input type="submit" value="Add Book">   
        `;
    libraryElement.appendChild(bookElement);
  } 
}

// addBook.prototype.Book = function() {
//     myLibrary.appendChild(index, 2);
//     render();
// }

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}
//function to SAVE BOOK to library

let newBookBtn = document.getElementById("new-book-btn");
newBookbtn.addEventListener("click", function() {
  let newBookForm = document.getElementById("new-book-form");
  newBookForm.style.display = "block";
})

document.getElementById("new-book-form").addEventListener("submit", function(event) {
  e.preventDefault();
  addBookToLibrary();
})


// troubleshooting savebookbtn!!
// function saveBook(Book) {
//   const bookContainer = document.querySelector("#bookContainer");
//   //add book to grid
//   let div = document.createElement("div");
//   let hasRead = "";
//   let clr = "";
//   if(book.read) {
//     hasRead = "read";
//     clr = "green";
//   } else {
//     hasRead = "not read";
//     clr = "red";
//   } 
//   div.setAttribute("data-num", counter);
//   div.innerHTML = 
//   <p class="BookTitle">"${book.title}"</p>
//   <p class="BookPages">${book.author}</p>
//   <p class="BookPages">${book.pages}</p>

//   bookContainer.appendChild(div);
//   book.dataNum = `${counter}`;

//   counter++;
//   console.log(book);
// }









// const book1 = new Book('Deep Trouble', 'R.L. Stine', 117, 'read')
//console.log(deepTrouble.info());