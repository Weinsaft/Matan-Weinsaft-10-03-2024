// FavoritesPage.js

import React from "react";

const FavoritesPage = ({ favorites }) => {
  return (
    <div className="container d-flex flex-column gap-4 py-2">
      <h1 className="text-center">Favorites</h1>
      <div className="row justify-content-center gap-4">
        {favorites.map((movie, index) => (
          <div className="col-8 col-sm-5 col-md-5 col-lg-3 p-0 position-relative" key={index} >
            <img src={movie.Poster} alt={movie.Title} className="w-100"/>
            <div className="overlay position-absolute w-100 h-100 top-0 text-center d-flex justify-content-between flex-column py-4 bg-dark bg-opacity-75 text-white px-3">
              <span className="h5">{movie.Director}</span>
              <div>
                <h2 className="h2">{movie.Title}</h2>
                <span className="h5">{movie.Year}</span>
              </div>
              <button>Remove Favorite</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
