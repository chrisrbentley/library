const container = document.getElementById("container");
const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submitBtn = document.getElementById("submit");


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
console.log(template.info())

function addBookToLibrary() {
    myLibrary.push(template);
}
addBookToLibrary();

/*function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log('test');
        const card = document.createElement("div");
    }
}
displayBooks();*/