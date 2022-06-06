const container = document.getElementById("container");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");
const books = document.getElementById("books");

submitBtn.setAttribute("id", "submit-button");

let myLibrary = []

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function() {
        let info = this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.status;
        return info;
    }
}

function addBookToLibrary() {
    submitBtn.addEventListener('click', function(event){
        event.preventDefault();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const status = document.getElementById("status").value;
        const book = new Book(title, author, pages, status);

        
        myLibrary.push(book);
        document.forms[0].reset();
    })
}
addBookToLibrary();



function displayBooks() {
    submitBtn.addEventListener('click', () => {
        let myLibraryReversed = myLibrary.reverse()
        const card = document.createElement("div");
        card.setAttribute('class', 'book-card')
        books.appendChild(card);
        const displayedTitle = document.createElement("p");
        const displayedAuthor = document.createElement("p");
        const displayedPages = document.createElement("p");
        const displayedStatus = document.createElement("p");
        card.appendChild(displayedTitle);
        card.appendChild(displayedAuthor);
        card.appendChild(displayedPages);
        card.appendChild(displayedStatus);
        displayedTitle.textContent = myLibraryReversed[0].title;
        displayedAuthor.textContent = 'by ' + myLibraryReversed[0].author;
        displayedPages.textContent = myLibraryReversed[0].pages + ' pages';
        displayedStatus.textContent = myLibraryReversed[0].status;
        myLibraryReversed.reverse();
    })
}
displayBooks();

// creates new book button
const newBookBtn = document.createElement("button");
newBookBtn.setAttribute("id", "new-book-btn");
newBookBtn.textContent = '+ Add Book';
container.appendChild(newBookBtn);


form.style.display = 'none';
function showForm() {
    newBookBtn.addEventListener('click', () => {
        if (form.style.display === 'none') {
            form.style.display = 'block';
        }
    })
}
showForm();


//styles
function changeAddBtnOnHover() {
    newBookBtn.addEventListener('mouseover', () => {
        newBookBtn.style.backgroundColor = "#e0e7ff";
        newBookBtn.style.borderRadius = "15px";
    })
    newBookBtn.addEventListener('mouseleave', () => {
        newBookBtn.style.backgroundColor = '#c7d2fe';
    })
}
changeAddBtnOnHover();

submitBtn.addEventListener('mouseover', () => {
    submitBtn.style.backgroundColor = '#e0e7ff';
})

submitBtn.addEventListener('mouseleave', () => {
    submitBtn.style.backgroundColor = '#c7d2fe';
})