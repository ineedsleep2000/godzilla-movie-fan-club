///////////////////
//fetch
///////////////////
fetch("http://localhost:3000/movies")
  .then((resp) => resp.json())
  .then((moviesArr) => moviesArr.forEach((movie) => renderGodzilla(movie)));
/////////////////////
//Global Variables
/////////////////////
const selectedMovieImg = document.querySelector("#selected-img");
const selectedMovieDescription = document.querySelector(
  "#selected-description"
);
const movieReviewer = document.querySelector("#movieReviewer");
const reviewInput = document.querySelector("#review-input");
const review = document.querySelector("#review");
/////////////////////
//render function, along with movie bar events
/////////////////////
function renderGodzilla(movie) {
  const godzillaMovies = document.querySelector("#Godzilla-movies");
  const godzillaImages = document.createElement("img");
  godzillaImages.src = movie.imageUrl;
  //movie bar mouseover event
  godzillaImages.addEventListener("mouseover", (e) => {
    godzillaImages.style.transform = "scale(1.5)";
    //movie select, click event
    godzillaImages.addEventListener("click", (e) => {
      selectedMovieImg.src = movie.imageUrl;
      selectedMovieImg.style.transform = "scale(2.25)";
      const selectedMovieTitle = document.querySelector("#movie-title");
      const selectedMovieDescription =
        document.querySelector("#movie-description");
      const selectedMovieYear = document.querySelector("#movie-year");
      const selectedMovieProducer = document.querySelector("#movie-producer");
      const selectedMovieDirector = document.querySelector("#movie-director");
      const selectedMovieMonster = document.querySelector("#movie-monster");
      selectedMovieTitle.textContent = movie.title;
      selectedMovieYear.textContent = "Year of Release: " + movie.year;
      selectedMovieProducer.textContent = "Movie Producer: " + movie.producer;
      selectedMovieDirector.textContent = "Movie Director: " + movie.director;
      selectedMovieMonster.textContent =
        "Monster Appearances: " + movie.monsters;
      selectedMovieDescription.textContent = movie.description;
    });
    //movie bar mouseout event
    godzillaImages.addEventListener("mouseout", (e) => {
      godzillaImages.style.transform = "scale(1.0)";
    });
  });
  godzillaMovies.append(godzillaImages);
}
///////////////
//submit event
//////////////
movieReviewer.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  console.log(li);
  li.textContent = "User: " + reviewInput.value;
  console.log(li);
  const ul = document.querySelector("ul");
  console.log(ul);
  ul.append(li);
});
