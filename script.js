const container = document.getElementById("container");
const form = document.getElementById("form");
//const title = document.getElementById("title");
//const author = document.getElementById("author");
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

const template = new Book('Book Title', 'Book Author', 295, 'true')
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

const newBook = document.createElement("button");
newBook.setAttribute("id", "new-book-btn");
newBook.textContent = 'Add Book';
container.appendChild(newBook);

function displayForm() {
    newBook.addEventListener('click', () => {
        const form = document.createElement("form");
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        const titleLabel = document.createElement("label");
        const title = document.createElement("input");
        const authorLabel = document.createElement("label")
        const author = document.createElement("input");
        const pagesLabel = document.createElement("label");
        const pages = document.createElement("input");
        const readLabel = document.createElement("label");
        const read = document.createElement("input");
        const submit = document.createElement("button");

        form.setAttribute("id", "form");
        form.setAttribute("method", "get");
        form.setAttribute("action", "/");
        titleLabel.setAttribute("for", "title");
        title.setAttribute("type", "text");
        title.setAttribute("name", "title");
        title.setAttribute("id", "title");
        title.setAttribute("required", "");
        authorLabel.setAttribute("for", "author");
        author.setAttribute("type", "text");
        author.setAttribute("name", "author");
        author.setAttribute("id", "author");
        author.setAttribute("required", "");
        pagesLabel.setAttribute("for", "pages");
        pages.setAttribute("type", "text");
        pages.setAttribute("name", "pages");
        pages.setAttribute("id", "pages");
        pages.setAttribute("required", "");
        readLabel.setAttribute("for", "read");
        read.setAttribute("type", "checkbox");
        read.setAttribute("name", "read");
        read.setAttribute("id", "read");
        submit.setAttribute("type", "submit");
        submit.setAttribute("id", "submit");

        legend.innerHTML = 'Book Details';
        titleLabel.innerHTML = "Title:";
        authorLabel.innerHTML = "Author:"
        pagesLabel.innerHTML = "Pages:";
        readLabel.innerHTML = "Read:";
        submit.innerHTML = "Submit";

        container.appendChild(form);
        form.appendChild(fieldset);
        fieldset.appendChild(legend);
        fieldset.appendChild(titleLabel);
        fieldset.appendChild(title);
        fieldset.appendChild(authorLabel);
        fieldset.appendChild(author);
        fieldset.appendChild(pagesLabel);
        fieldset.appendChild(pages);
        fieldset.appendChild(readLabel);
        fieldset.appendChild(read);
        fieldset.appendChild(submit);
    })
}
displayForm();
