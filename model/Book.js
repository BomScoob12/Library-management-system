const { v4: uuidv4 } = require('uuid');
const isRateNumberValid = require('../utils/validateNumber')
class Book {
    constructor(title, author, genre, publishedYear){
        this.id = uuidv4()
        this.title = title
        this.author = author
        this.genre = genre
        this.publishedYear = publishedYear
        this.ratings = new Map()
    }

    averageRating(){
        //map has ['key', 'value']
        const avgRatingArray = Array.from(this.ratings)
        const avgRating = avgRatingArray.reduce((accumulated, [key, value]) => accumulated + value, 0)/this.ratings.size
        return avgRating
    }

    rateBook(userId, rateNumber){
        if(isRateNumberValid(rateNumber)){
            this.ratings.set(userId, rateNumber)
        }
    }
}
module.exports = Book