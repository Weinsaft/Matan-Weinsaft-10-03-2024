import React from "react";

const MovieDisplay = ({ movie }) => {

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
    <div className="container d-flex justify-content-center flex-column pb-5 gap-3">
      <div className="d-flex justify-content-between align-items-center align-items-sm-end pb-3 flex-column flex-sm-row">
        <span><strong>Director: </strong>{movie.Director != 'N/A' ? `${movie.Director}` : ''}</span>
        <h1>{movie.Title}</h1>
        <span><strong>Release Date: </strong>{formatDate(movie.Released)}</span>
      </div>
      <div className="row gap-3 justify-content-center">
        <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-end">
          <img  src={movie.Poster} alt={`${movie.Title} Poster`} />
        </div>
        <div className="col-12 col-md-6">
          <ul className="list-unstyled h5 d-flex flex-column gap-2">
            <li> <strong>Year:</strong> {movie.Year}</li>
            <li> <strong>Country:</strong> {movie.Country}</li>
            <li> <strong>Awards:</strong> {movie.Awards}</li>
            <li> <strong>Genre:</strong> {movie.Genre}</li>
            <li> <strong>Language:</strong> {movie.Language}</li>
            <li> <strong>Plot:</strong> {movie.Plot}</li>
          </ul>

          
        </div>
      </div>


      <div className="container">
        <h2 className="mb-3 text-center">Actors:</h2>
      <div className="row gap-4 justify-content-center">
            {parseActors().map((actor) => (
              <div key={actor.id} className="col-10 col-md-2 d-flex justify-content-center align-items-center actor-card bg-dark py-3  text-center card">
                <p className="mb-0 h5 text-white">{actor}</p>
              </div>
              
            ))}
      </div>
      </div>
    </div>
  );
};

export default MovieDisplay;
