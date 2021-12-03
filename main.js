// Exercise 4
const moviesContainer = document.querySelector("#movieList");
getMovies((moviesJson) => {
  console.log(moviesJson);

  moviesJson.forEach((movie) => {
    let liElement = document.createElement("li");
    liElement.textContent = movie.title;
    moviesContainer.appendChild(liElement);
  });
});

function getMovies(callback) {
  fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  )
    .then((Response) => Response.json())
    .then(callback);
}

function emptyContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
function getAfterTitle() {}
function getNewMovies() {}
function getMoviesAfterRating() {}
function buildDom() {}

const button = document.querySelector("button");
button.addEventListener("click", () => {

  const search = document.querySelector("#movieSearch");
  const check = document.querySelector("#newMoviesCheck");
  const rating = document.querySelector("#rating");

  getMovies((movies) => {
    emptyContainer(moviesContainer);
    // search after title
    let filteredMovies = movies.filter((movie) =>
      movie.title.includes(search.value)
    );
    // filter new movies
    console.log(check.checked);
    if (check.checked) {
      filteredMovies = filteredMovies.filter((movie) => movie.year > 2014);
    }
    // get movies after rating
    if (rating.value >= 9) {
      filteredMovies = filteredMovies.filter((movie) => movie.rating >= 9);
    } else if (rating.value >= 8) {
      filteredMovies = filteredMovies.filter((movie) => (movie.rating >= 8) && (movie.rating < 9));
    } else if (rating.value >= 7) {
      filteredMovies = filteredMovies.filter((movie) => (movie.rating >= 7) && (movie.rating < 8));
    } else if (rating.value >= 6) {
      filteredMovies = filteredMovies.filter((movie) => (movie.rating >= 6) && (movie.rating < 7));
    } else if (rating.value >= 5) {
      filteredMovies = filteredMovies.filter((movie) => (movie.rating >= 5) && (movie.rating < 6));
    } else {
      filteredMovies = filteredMovies.filter((movie) => movie.rating < 5);
    }
    // build DOM
    filteredMovies.forEach((movie) => {
      let liElement = document.createElement("li");
      liElement.innerText = movie.title;
      moviesContainer.appendChild(liElement);
    });
    console.log(filteredMovies);
  });
});
