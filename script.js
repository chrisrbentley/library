const container = document.getElementById("container");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");
const books = document.getElementById("books");

let myLibrary = []

function addBookToLibrary() {
    submitBtn.addEventListener('click', function(event){
        event.preventDefault();
        let book = {
            title: document.getElementById("title").value,
            author: document.getElementById("author").value,
            pages: document.getElementById("pages").value,
            status: document.getElementById("status").value,
            info: function() {
                let info = this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.status;
            return info;
            }
        }
        myLibrary.push(book);
        document.forms[0].reset()
    })
}
addBookToLibrary();

function displayBooks() {
    submitBtn.addEventListener('click', () => {
        for (let i = 0; i < myLibrary.length; i++) {
            console.log('test');
            const card = document.createElement("div");
            card.setAttribute('class', 'book-card')
            books.appendChild(card);
            card.textContent = myLibrary[i].info();
        }
    })
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
