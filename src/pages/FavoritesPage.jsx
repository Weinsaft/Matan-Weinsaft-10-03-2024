// FavoritesPage.js

import React from "react";

const FavoritesPage = ({ favorites }) => {
  return (
    <div className="container">
      <h1>Favorites</h1>
      <div className="row">
        {favorites.map((movie, index) => (
          <div className="col-md-4" key={index}>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
