import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MovieDisplay = ({ movie, addToFavorites, isFav }) => {
  const parseActors = () => {
    if (movie && movie.Actors) {
      return movie.Actors.split(",").map((actor) => actor.trim());
    }
    return [];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="bg-glass border-dark-subtle mx-2 mx-sm-5 py-2">
      <div className="d-flex justify-content-between align-items-sm-center pb-3 flex-column z-n1 px-3 fadeIn">
        <h1>{movie.Title}</h1>
        {movie.Director !== "N/A" && (
          <span className="h6">
            <strong>Director: </strong>
            {movie.Director}
          </span>
        )}

        <span className="h6">
          <strong>Release Date: </strong>
          {formatDate(movie.Released)}
        </span>
        {movie.imdbRating !== "N/A" && (
          <div className="rating">
            <span className="h3 mb-0 lh-1">
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#FFD43B" }}
                className="me-1"
              />
              {movie.imdbRating}/10
            </span>
            <span className="mb-0 mx-2 align-self-end">
              ({movie.imdbVotes} Votes)
            </span>
          </div>
        )}
      </div>

      <div className="line-animation mb-3 d-none d-sm-block bg-dark-subtle"></div>

      <div className="container d-flex justify-content-center flex-column pb-5 gap-3 z-n1 fadeIn">
        <div className="row gap-3 justify-content-center">
          <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-end">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://placehold.co/300x426"
              }
              className="rounded-3"
              alt={`${movie.Title} Poster`}
              width={300}
              height={426}
            />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column gap-2">
            <div>
              <div className="list-unstyled h5 d-flex flex-column gap-2 ">
                <p className="mb-2">
                  {" "}
                  <strong>Year:</strong> {movie.Year}
                </p>
                <p className="mb-2">
                  {" "}
                  <strong>Country:</strong> {movie.Country}
                </p>
                <p className="mb-2">
                  {" "}
                  <strong>Awards:</strong> {movie.Awards}
                </p>
                <p className="mb-2">
                  {" "}
                  <strong>Genre:</strong> {movie.Genre}
                </p>
                <p className="mb-2">
                  {" "}
                  <strong>Language:</strong> {movie.Language}
                </p>
                <p className="mb-2">
                  {" "}
                  <strong>Plot:</strong> {movie.Plot}
                </p>
              </div>
              <button
                className="align-self-center align-self-sm-start mt-2 btn bg-danger-subtle"
                onClick={() => addToFavorites(movie)}
              >
                Add To Favorites{" "}
                <FontAwesomeIcon
                  icon={faHeart}
                  color={isFav ? "red" : "white"}
                  style={{ transition: "color .7s" }}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="mb-3 text-center">Actors:</h2>
          <div className="row gap-4 justify-content-center">
            {parseActors().map((actor, index) => (
              <div
                key={index}
                className="col-10 col-lg-3 d-flex justify-content-center align-items-center actor-card bg-dark py-3 text-center card"
              >
                <p className="mb-0 h5 text-white">{actor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDisplay;
