document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { title: 'Book 1', content: 'This is the content of Book 1.' },
        { title: 'Book 2', content: 'This is the content of Book 2.' },
        { title: 'Book 3', content: 'This is the content of Book 3.' }
    ];

    const bookList = document.getElementById('bookList');
    const bookContent = document.getElementById('bookContent');

    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book.title;
        li.addEventListener('click', () => {
            bookContent.textContent = book.content;
        });
        bookList.appendChild(li);
    });
});
