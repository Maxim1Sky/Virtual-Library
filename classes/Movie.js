// import the Media class:
const Media = require("./Media");

// create your Movie class:
class Movie extends Media {
  static longestMovie(movies) {
    let highest = 0;
    let theMovie;

    for (let movie of movies) {
      if (movie.rating > highest) {
        highest = movie.rating;
        theMovie = movie;
      }
    }
    return theMovie;
  }

  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
}

// don't change below
module.exports = Movie;
