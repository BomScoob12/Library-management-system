const isRateNumberValid = require('../utils/validateNumber')
class Book {
    userRated = new Set();
    constructor(isbn, title, author, genre, publishedYear){
        this.isbn = isbn
        this.title = title
        this.author = author
        this.genre = genre
        this.publishedYear = publishedYear
        this.ratings = new Array()
    }

    averageRating(){
        const avgRating = this.ratings.reduce((prev, current) => prev + current, 0)/this.ratings.length
        return avgRating
    }

    rateBook(userId, rateNumber){
        if(isRateNumberValid(rateNumber) && !this.userRated.has(userId)){
            this.ratings.push(rateNumber)
            this.userRated.add(userId)
        }
    }
}