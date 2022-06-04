const container = document.getElementById("container");
const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submitBtn = document.getElementById("submit");
const books = document.getElementById("books");

let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        let info = this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read;
        return info;
    }
}


const template = new Book('Book Title', 'Book Author', 295, 'true');
console.log(template.info());

const wimpyKid = new Book('Wimpy Kid', 'jeff', 101, 'true');


function addBookToLibrary() {
    myLibrary.push(template, wimpyKid);
}
addBookToLibrary();

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log('test');
        const card = document.createElement("div");
        card.setAttribute('class', 'book-card')
        books.appendChild(card);
        card.textContent = myLibrary[i].info();
    }
}
displayBooks();

// creates new book button
const newBook = document.createElement("button");
newBook.setAttribute("id", "new-book-btn");
newBook.textContent = 'Add Book';
container.appendChild(newBook);

form.style.display = 'none';
function showForm() {
    newBook.addEventListener('click', () => {
        if (form.style.display === 'none') {
            form.style.display = 'block';
        }
    })
}
showForm();

