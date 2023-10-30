const isRateNumberValid = require('../utils/validateNumber')
import { v4 as uuidv4 } from 'uuid';

uuidv4();
class Book {
    userRated = new Set();
    constructor(title, author, genre, publishedYear){
        this.id = uuidv4();
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
module.exports = Book