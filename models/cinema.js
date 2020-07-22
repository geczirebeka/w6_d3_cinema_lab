const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function (films) {
  const result = this.films.map((film) => {
    return film.title;
  })
  return result;
}


module.exports = Cinema;
