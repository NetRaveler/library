let myLibrary = [];
let bookShelf = document.getElementById('bookShelf');
let addButton = document.getElementById('addBookButton');
let sumbit = document.getElementById("submitBook");
let checkReadYet = document.getElementById("readYet");

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
sumbit.addEventListener("click", addBookToLibrary);
sumbit.addEventListener("click", formVisibility);
sumbit.addEventListener("click", createCard);


function createCard() {
    // Displays content of myLibrary array
    bookShelf.textContent = " ";

    for (i = 0; i < myLibrary.length; i++) {
        let cardDiv = document.createElement("div");
        let textCard = document.createElement("div");
        let bookTitle = document.createElement("h3");
        let bookAuthor = document.createElement("p");
        let bookPages = document.createElement("p");
        let bookRead = document.createElement("p");

        cardDiv.classList.add("book");
        textCard.classList.add("textCard");
        cardDiv.appendChild(textCard);

        bookTitle.textContent = myLibrary[i].title;
        bookTitle.classList.add("bookTitle");
        textCard.appendChild(bookTitle);

        bookAuthor.textContent = myLibrary[i].author;
        bookAuthor.classList.add("bookAuthor");
        textCard.appendChild(bookAuthor);

        bookPages.textContent = myLibrary[i].pages;
        bookPages.classList.add("bookPages");
        textCard.appendChild(bookPages);

        if (checkReadYet.checked) {

        }
        bookRead.textContent = myLibrary[i].read;
        bookRead.classList.add("bookRead");
        textCard.appendChild(bookRead);

        bookShelf.appendChild(cardDiv);

        console.log(myLibrary[i].info());
    }
}

function addBookToLibrary() {
    // adds the book to myLibrary array
    let bookTitle = document.getElementById("bookTitle").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    if (checkReadYet.checked) {
        readYet = "Read";
    } else {
        readYet = "Not Read";
    }
    let bookObj = new Book(bookTitle, author, pages, readYet);
    myLibrary.splice(1, 0, bookObj);

    return myLibrary;
}

function formVisibility() {
    // toggles visibility of the book creation form
    if (formDisplay.style.display == 'flex') {
        formDisplay.style.display = 'none';
        console.log("hide");
    } else {
        formDisplay.style.display = 'flex';
        console.log("show");
    }
}