// import the Media class:
const Media = require("./Media");

// create your Book class:
class Book extends Media {
  static highestRating(books) {
    let highest = 0;
    let theBook;

    for (let book of books) {
      if (this.book.rating > highest) {
        highest = this.book.rating;
        theBook = book;
      }
    }
    return theBook;
  }

  constructor(author, numPages, rating) {
    super();
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }

  summary() {
    return `Title ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
}

// don't change below
module.exports = Book;
