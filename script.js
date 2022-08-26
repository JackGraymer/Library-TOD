let myLibrary = [];

function Book(title, author) {
  // the constructor...
  this.id = myLibrary.length
  this.title = title;
  this.author = author;
  myLibrary.push(this)
  
}

function addBookToLibrary() {
  // do stuff here
  new Book(prompt(), prompt())
}

let harry = new Book('harry', 'jkrowling')

let potter = new Book('legolas', 'tolkien')

const books = document.getElementById('books')

let book = document.getElementsByClassName('book')

function displayBooks() {
    myLibrary.forEach(element => {
        let clone = book[0].cloneNode(true)
        //Creates the title of books
        title = document.createElement('h3')
        titleText = document.createTextNode(element.title)
        title.appendChild(titleText)
        clone.appendChild(title)
        books.appendChild(clone)   
        
        //Creates author element in book  
        author = document.createElement('h3')
        authorText = document.createTextNode(element.author)
        author.appendChild(authorText)
        clone.appendChild(author)
        books.appendChild(clone)   

    });
}

displayBooks()

let form = document.querySelector('.popup')

function openForm() {
    let form = document.querySelector('.popup')
    form.style.display = 'flex';
}

function closeForm() {
    let form = document.querySelector('.popup')
    form.style.display = 'none';
}

