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
        
        let div = document.createElement('div')
        div.innerHTML =     '<div class="text"> <h4 class="title">'+ element.title +'</h4>' +
                            '<h5 class="author">'+ element.author +'</h5> </div>' + 
                            '<div class="buttons"> <button class="read">Read </button>'+
                            '<button class="delete"><img src="deleteIcon.png" alt="Trash bin"> </button></div>';
           
        div.classList.add('book')
                        

        books.appendChild(div)
    });
}

displayBooks()

function clearBooks() {
    for(let i=book.length-1; i>-1; i--)
        {
    console.log(i)
    book[i].remove()
        }
}

let form = document.querySelector('.popup')

function openForm() {
    let form = document.querySelector('.popup')
    form.style.display = 'flex';
}

function closeForm() {
    let form = document.querySelector('.popup')
    form.style.display = 'none';
}

function  newBook (){
    let title = document.querySelector('#titleInput').value;
    let author = document.querySelector('#authorInput').value;
    new Book(title, author);
    document.querySelector(".form").reset()
    closeForm();
    clearBooks()
    displayBooks()
}

