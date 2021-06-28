
/*
Toggle add book form
 */
let isFormOpen = false;

const togForm = document.querySelector(".form-tog");
togForm.addEventListener('click', openClose);


function openClose() {
    const form = document.querySelector('#book-form');
    if (!isFormOpen) {
       form.style.display = "block";
       isFormOpen = true;
    } else {
        form.style.display = "none";
        isFormOpen = false;
    }
}

/*
Library app
*/

let myLibrary = [
    {
        title: 'Black Leopard, Red Wolf',
        author: 'Marlon James',
        pages: 640,
        read: "Haven't read"
    },
    {
        title: 'Vinland Saga Book 2',
        author: 'Makoto Yukimura',
        pages: 432,
        read: 'Haven\'t read yet'
    },
    {
        title: 'Sex, Drugs, and Tales of Wonder',
        author: 'Yanko Tsvetkov',
        pages: 123,
        read: 'Haven\'t read'
    }
];

//constructor
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

//display library

function showLib() {
    //set the contents of the section element to nothing.
    document.querySelector('section').innerText = '';
    myLibrary.forEach((obj) => {
        const section = document.querySelector('section');
        const card = document.createElement("div");
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        deleteButton.className = 'delete-book';
        const toggleRead = document.createElement('button');
        toggleRead.textContent = 'toggle read status';
        toggleRead.className = 'toggle-read';

        //this code could've used a comment explaining what it does
        card.setAttribute('data-book-num', myLibrary.indexOf(obj));
        for (let property in obj) {
            let p = document.createElement("p");
            p.textContent = obj[property];
            card.appendChild(p);
        }
        card.appendChild(toggleRead);
        card.appendChild(deleteButton);
        section.appendChild(card);
    });
}

showLib();

//Add book to library
function addBook() {
    const title = document.querySelector('#book-name').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    const read = document.querySelector('#book-read').value;
    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
    showLib();
    addDeleteBtn();
}

const submitBook = document.querySelector('#add-book');
submitBook.addEventListener('click', addBook);

//Delete book from library
let getDeleteBtn = document.getElementsByClassName('delete-book');

function addDeleteBtn() {
    Array.from(getDeleteBtn).forEach( element => {
        element.addEventListener('click', thisBook);
    });
}

addDeleteBtn();

function thisBook(obj) {
    //Get parent element of button
    const book = obj.target.parentNode;

    const bookNum = book.getAttribute('data-book-num');
    myLibrary.splice(bookNum, 1);
    showLib();
    addDeleteBtn();
}

/* NOTES/Changelog
X- After adding a book, none of the delete buttons work. | turned the code that added event listeners onto the delete button into a function. Added function call to the addBook function so the library AND event listeners are refreshed.
X- the click event listener is only applied to the first delete button rn. use getElementsByClassName to return the elements as an array then apply the event listener through iteration.

- Currently I'm adding the delete buttons through JS. Feels like crossing code.
 */
