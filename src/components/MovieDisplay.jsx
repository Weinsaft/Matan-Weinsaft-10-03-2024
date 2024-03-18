import React from "react";

const MovieDisplay = ({ movie, addToFavorites }) => {

  const parseActors = () => {
    if (movie && movie.Actors) {
      return movie.Actors.split(',').map(actor => actor.trim());
    }
    return [];
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
 

  return (
    <>
    <div className="d-flex justify-content-between align-items-center pb-3 flex-column z-n1 text-center fadeIn">
        <h1>{movie.Title}</h1>
        <span className="h5"><strong>Director: </strong>{movie.Director !== 'N/A' ? `${movie.Director}` : ''}</span>
        <span className="h5"><strong>Release Date: </strong>{formatDate(movie.Released)}</span>
    </div>
    <div className="line-animation mb-3 "></div>
    <div className="container d-flex justify-content-center flex-column pb-5 gap-3 z-n1 fadeIn">
      <div className="row gap-3 justify-content-center">
        <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-end">
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/300x426'} alt={`${movie.Title} Poster`} width={300} height={426} />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column gap-2">
          <div>
            <div className="list-unstyled h5 d-flex flex-column gap-2 ">
              <p> <strong>Year:</strong> {movie.Year}</p>
              <p> <strong>Country:</strong> {movie.Country}</p>
              <p> <strong>Awards:</strong> {movie.Awards}</p>
              <p> <strong>Genre:</strong> {movie.Genre}</p>
              <p> <strong>Language:</strong> {movie.Language}</p>
              <p> <strong>Plot:</strong> {movie.Plot}</p>
            </div>
          <button className="align-self-center align-self-sm-start mt-2 btn btn-danger" onClick={() => addToFavorites(movie)}>Add To Favorites</button>
          </div>
        </div>
      </div>
      

      <div className="container">
        <h2 className="mb-3 text-center">Actors:</h2>
      <div className="row gap-4 justify-content-center">
            {parseActors().map((actor, index) => (
              <div key={index} className="col-10 col-lg-3 d-flex justify-content-center align-items-center actor-card bg-dark py-3  text-center card">
                <p className="mb-0 h5 text-white">{actor}</p>
              </div>
            ))}
      </div>
      </div>
    </div>
    </>
  );
};

export default MovieDisplay;
