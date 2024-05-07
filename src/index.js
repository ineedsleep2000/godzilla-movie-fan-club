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

      const selectedMovieYear = document.querySelector("#movie-year");
      const selectedMovieProducer = document.querySelector("#movie-producer");
      const selectedMovieDirector = document.querySelector("#movie-director");
      const selectedMovieMonster = document.querySelector("#movie-monster");
      selectedMovieYear.textContent = "Year of Release: " + movie.year;
      selectedMovieProducer.textContent = "Movie Producer: " + movie.producer;
      selectedMovieDirector.textContent = "Movie Director: " + movie.director;
      selectedMovieMonster.textContent =
        "Monster Appearances: " + movie.monsters;
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
  // review.textContent = reviewInput.value;
  //console.log(reviewInput);
  //console.log(review);

  const li = document.createElement("li");
  console.log(li);
  li.textContent = "User: " + reviewInput.value;
  console.log(li);
  const ul = document.querySelector("ul");
  console.log(ul);
  ul.append(li);
});


console.log("nick was here workin on the project gimme some credit yo")
