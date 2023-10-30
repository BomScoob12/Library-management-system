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
    }

    return {
        addBook,
        findBooksByAuthor,
        findBooksByGenre,
    }
}

module.exports = libraryManagement