
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
    document.querySelector('section').innerText = '';
    myLibrary.forEach((obj) => {
        const section = document.querySelector('section');
        const card = document.createElement("div");
        const button = document.createElement('button');
        button.textContent = 'delete';
        button.className = 'delete-book';

        card.setAttribute('data-book-num', myLibrary.indexOf(obj));
        for (let property in obj) {
            let p = document.createElement("p");
            p.textContent = obj[property];
            card.appendChild(p);
        }
        card.appendChild(button);
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
}

const submitBook = document.querySelector('#add-book');
submitBook.addEventListener('click', addBook);

//Delete book from library
let getDeleteBtn = document.getElementsByClassName('delete-book');

getDeleteBtn.forEach(button => {
    button.addEventListener('click', thisBook);
});

function thisBook(obj) {
    //Get parent element of button
    const button = obj.target.parentNode;
    console.log(button);
}

/*
const deleteBook = document.querySelector('.delete-book');

function thisBook(obj) {
    //Get parent element of button
    const button = obj.target.parentNode;
    console.log(button);
}

deleteBook.addEventListener('click', thisBook);
*/
/* NOTES
-the click event listener is only applied to the first delete button rn. use getElementsByClassName to return the elements as an array then apply the event listener through iteration.

- Currently I'm adding the delete buttons through JS. Feels like crossing code.
 */
