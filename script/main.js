// Currently gets rid of the info function when converted to JSON and back
let myLibrary = [];
let bookShelf = document.getElementById('bookShelf');
let addButton = document.getElementById('addBookButton');
let sumbit = document.getElementById("submitBook");
let checkReadYet = document.getElementById("readYet");
let removeToggle = document.getElementsByClassName("removeToggle");

function Book(title, author, pages, read) {
    // the book constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
// Event Listeners
// *************************************************
addButton.addEventListener("click", formVisibility);
sumbit.addEventListener("click", addBookToLibrary);
sumbit.addEventListener("click", formVisibility);
sumbit.addEventListener("click", createCard);
// **************************************************
createCard();

function putOnShelf() {
    // Stores the array in local storage
    window.localStorage.setItem("books", JSON.stringify(myLibrary));
}

function pullFromShelf() {
    // Pulls the array from local storage
    myLibrary = JSON.parse(localStorage.getItem("books"));

    return myLibrary;
}

function createCard() {
    // Displays content of myLibrary array
    // Clears all books from the page
    bookShelf.textContent = " ";
    // Pulls an available array from localstorage
    if (localStorage.length > 0) {
        pullFromShelf();
    }

    for (i = 0; i < myLibrary.length; i++) {
        let cardDiv = document.createElement("div");
        let textCard = document.createElement("div");
        let bookTitle = document.createElement("h3");
        let bookAuthor = document.createElement("p");
        let bookPages = document.createElement("p");
        let bookRead = document.createElement("p");
        let buttonSpawn = document.createElement("input");

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

        bookRead.textContent = myLibrary[i].read;
        bookRead.classList.add("bookRead");
        textCard.appendChild(bookRead);

        buttonSpawn.setAttribute('id', myLibrary[i].title);
        buttonSpawn.classList.add("removeToggle");
        buttonSpawn.setAttribute("type", "button");
        buttonSpawn.setAttribute("value", "Remove");
        buttonSpawn.addEventListener("click", getTitleOfButton);
        textCard.appendChild(buttonSpawn);



        bookShelf.appendChild(cardDiv);

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
    putOnShelf(bookObj);
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

// I need a function that removes an item from an array when toggled.
// I have the event listener, I need to bring in the button
// What if when the card is created the ID can be the title field.
// Now how to target the ID on the button click
// What if I change the creation of my array to where the array takes the data and makes new books each time a function is called
/* (title, author, pages, readStatus) -> create object(title, author, pages, readStatus, function) */
function getTitleOfButton() {
    let theTitle = this.getAttribute("id");
    removeFromLibrary(theTitle);


}

function removeFromLibrary(title) {
    let titleIndex = myLibrary.indexOf(title)
    myLibrary.splice(titleIndex, 1);
    putOnShelf();
    createCard();
}