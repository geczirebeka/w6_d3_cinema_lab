const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function () {
  const result = this.films.map((film) => {
    return film.title;
  })
  return result;
}

Cinema.prototype.findByTitle = function (title) {
  return this.films.find(film => film.title === title);
}

Cinema.prototype.filterByGenre = function (genre) {
  return this.films.filter(film => film.genre === genre);
}

Cinema.prototype.isFilmFromYear = function (year) {
  return this.films.some(film => film.year === year);
}

Cinema.prototype.areFilmsLength = function (length) {
  return this.films.every(film => film.length >= length);
}

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((accumulator, film) => accumulator + film.length, 0);
}

Cinema.prototype.findByProperty = function (property, value) {
  return this.films.filter(film => film[property] === value);
}


module.exports = Cinema;
