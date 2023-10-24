// import the Media class:
const Media = require("./Media");

// create your Music class:
class Music extends Media {
  static shortestAlbum(album) {
    let lowest = Infinity;
    let theSong;

    for (let song of album) {
      if (song.length < lowest) {
        lowest = song.length;
        theSong = song;
      }
    }

    return theSong;
  }

  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }

  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
  }
}

// don't change below
module.exports = Music;
