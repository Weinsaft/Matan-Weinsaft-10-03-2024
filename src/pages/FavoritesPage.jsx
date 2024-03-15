import React from "react";
import Card from "../components/Card";

const FavoritesPage = ({ favorites }) => {
  return (
    <div className="container d-flex flex-column gap-4 py-2">
      <h1 className="text-center">Favorites</h1>
      <div className="row justify-content-center justify-content-lg-center gap-4">
        {favorites.map((movie, index) => (
          <Card key={index} poster={movie.Poster} title={movie.Title} year={movie.Year} director={movie.Director} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
