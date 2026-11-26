const books = [
    'Мастер и Маргарита',
    'Гарри Поттер',
    'Над пропастью во ржи',
    'Властелин колец',
    'Дюна',
    'Отцы и дети',
];

const bookList = document.querySelector('#bookList');
const addButton = document.querySelector('#addBook');
const searchButton = document.querySelector('#searchBook');

function renderBooks(foundIndex = -1) {
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = book;
        if (index === foundIndex) {
            li.classList.add('found');
        }
        bookList.appendChild(li);
    });
}

function addBook() {
    const book = prompt('Введите название книги');
    if (!book || !book.trim()) {
        alert('Название книги не введено!');
        return;
    }
    books.push(book.trim());
    renderBooks();
}

function searchBook() {
    const search = prompt('Введите название книги');
    if (!search || !search.trim()) return;
    const index = books.findIndex(
        (book) => book.toLowerCase() === search.trim().toLowerCase()
    );
    if (index === -1) {
        alert('Книга не найдена!');
        return;
    }
    renderBooks(index);
}

addButton.addEventListener('click', addBook);
searchButton.addEventListener('click', searchBook);

renderBooks();