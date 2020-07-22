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


module.exports = Cinema;
