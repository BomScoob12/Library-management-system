const libraryManagement = require('./controller/LibraryManagement')
const genre = require('./model/Genre')
const User = require('./model/User')

const user = new User(15,"Somporn")
const user2 = new User(1,"Somporn2")

const manager = libraryManagement()
manager.addBook("TinyTina", "john", genre.Fantasy, 2004)
manager.addBook("TinyTina1", "john", genre.Crime, 2004)
manager.addBook("TinyTina2", "john", genre.NonFig, 2004)
manager.addBook("TinyTina3", "john", genre.SciFi, 2004)

console.log("-----------")
let scifiBook = manager.findBooksByGenre(genre.SciFi)
scifiBook[0].rateBook(user.userId, 4.5)
scifiBook[0].rateBook(user2.userId, 4.8)
console.log(scifiBook[0].averageRating() + " avg")
console.log(scifiBook)

let johnBook = manager.findBooksByAuthor("john")
johnBook[0].rateBook(user.userId, 4)
johnBook[0].rateBook(user2.userId, 4.8)
console.log(johnBook[0].averageRating() + " avg")
console.log(johnBook[0])

console.log("Top rated book 2")
console.log(manager.topRatedBooks(2))

