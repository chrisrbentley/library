const container = document.getElementById("container");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");
const books = document.getElementById("books");
const card = document.createElement("div");
const removeButton = document.createElement("button");
const displayedStatus = document.createElement("button");

submitBtn.setAttribute("id", "submit-button");

let myLibrary = []

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.id = Date.now()
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
        let status = document.querySelector('#status').checked;
        if (status === true) {
            status = 'Read'
        } else {
            status = 'Not read'
        }
        const book = new Book(title, author, pages, status);
        
        myLibrary.push(book);
        document.forms[0].reset();
    })
}
addBookToLibrary();



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

Book.prototype.toggleStatus = function() {
    if (this.status === 'Read') {
        this.status = 'Not read';
    } else if (this.status === 'Not read') {
        this.status = 'Read';
    }
}


function displayBooks() {
    submitBtn.addEventListener('click', () => {
        let myLibraryReversed = myLibrary.reverse();
        const card = document.createElement("div");
        card.setAttribute('class', 'book-card');
        books.appendChild(card);
        const displayedTitle = document.createElement("p");
        const displayedAuthor = document.createElement("p");
        const displayedPages = document.createElement("p");
        const displayedStatus = document.createElement("button");
        const removeButton = document.createElement("button");
        displayedStatus.setAttribute("class", "status-btn");
        card.appendChild(displayedTitle);
        card.appendChild(displayedAuthor);
        card.appendChild(displayedPages);
        card.appendChild(displayedStatus);
        card.appendChild(removeButton);
        removeButton.setAttribute("class", "remove-btn")
        displayedTitle.textContent = myLibraryReversed[0].title;
        displayedAuthor.textContent = 'by ' + myLibraryReversed[0].author;
        displayedPages.textContent = myLibraryReversed[0].pages + ' pages';
        displayedStatus.textContent = myLibraryReversed[0].status;
        removeButton.textContent = 'Remove';
        myLibraryReversed.reverse();


        // set id equal to book id
        for (let i = 0; i < myLibrary.length; i++) {
            card.id = myLibrary[i].id;
            removeButton.id = card.id;
            displayedStatus.id = card.id;
            //Number(displayedStatus.id);
        }

        //
        removeButton.addEventListener('click', () => {
            myLibrary = myLibrary.filter(function(o) {
                return o.id != removeButton.id;
            });
            card.remove();
        })

        displayedStatus.addEventListener('click', () => {
            let tempID = displayedStatus.id;
            let foundBook = myLibrary.find(x => x.id === Number(tempID));
            foundBook.toggleStatus();
            displayedStatus.textContent = foundBook.status;
        });
    })
}
displayBooks();