const Book = require('../model/Book')

function libraryManagement(){
    let books = new Array()

    function addBook(title, author, genre, publishedYear){
        const newBook = new Book(title, author, genre, publishedYear)
        books.push(newBook)
    }

    function findBooksByAuthor(authorName){
        const bookOfAuthor = books.filter((book) => book.author === authorName)
        return bookOfAuthor
    }

    function findBooksByGenre(genre){
        const bookOfGenre = books.filter((book) => book.genre === genre)
        return bookOfGenre
    }

    function topRatedBooks(n){
        books.sort((a, b) => {
            if (a.averageRating() < b.averageRating()) return 1; // Compare in reverse order
            else if (a.averageRating() > b.averageRating()) return -1;
            else return 0;
        });
        return books;
    }   

    function getBooks(){
        return books
    }

    return {
        addBook,
        findBooksByAuthor,
        findBooksByGenre,
        topRatedBooks,
        getBooks
    }
}

module.exports = libraryManagement