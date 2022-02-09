let myLibrary = [];
let bookShelf = document.getElementById('bookShelf');
let addButton = document.getElementById('addBookButton');

function Book(title, author, pages, read) {
    // the book constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (this.title + " by " + this.author + " " + this.pages + " pages " + this.read);
    }
}

addButton.addEventListener("click", formVisibility);

function createCard() {
    // Displays content of myLibrary array


    for (i = 0; i < myLibrary.length; i++) {
        let cardDiv = document.createElement("div");
        let bookTitle = document.createElement("h3");
        let bookAuthor = document.createElement("p");
        let bookPages = document.createElement("p");
        let bookRead = document.createElement("p");

        cardDiv.classList.add("book");

        bookTitle.textContent = myLibrary[i].title;
        bookTitle.classList.add("bookTitle");
        cardDiv.appendChild(bookTitle);

        bookAuthor.textContent = myLibrary[i].author;
        bookAuthor.classList.add("bookAuthor");
        cardDiv.appendChild(bookAuthor);

        bookPages.textContent = myLibrary[i].pages;
        bookPages.classList.add("bookPages");
        cardDiv.appendChild(bookPages);

        bookRead.textContent = myLibrary[i].read;
        bookRead.classList.add("bookRead");
        cardDiv.appendChild(bookRead);

        bookShelf.appendChild(cardDiv);

        console.log(myLibrary[i].info());
    }
}

function addBookToLibrary(bookObj) {
    // adds the book to myLibrary array
    myLibrary.splice(1, 0, bookObj);
    return myLibrary;
}

function formVisibility() {

    if (formDisplay.style.display == 'flex') {
        formDisplay.style.display = 'none';
        console.log("hide");
    } else {
        formDisplay.style.display = 'flex';
        console.log("show");
    }
}