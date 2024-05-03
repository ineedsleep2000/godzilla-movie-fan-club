///////////////////
//fetch
///////////////////

fetch("http://localhost:3000/movies")
  .then((resp) => resp.json())
  .then((moviesArr) => moviesArr.forEach((movie) => renderGodzilla(movie)));

/////////////////////
//render functions
/////////////////////

function renderGodzilla(movie) {
  const godzillaMovies = document.querySelector("#Godzilla-movies");
  const godzillaImages = document.createElement("Img");
  godzillaImages.src = movie.imageUrl;

  //godzillaImages.addEventListener("mouseover", (e) => {});

  godzillaMovies.append(godzillaImages);
}
