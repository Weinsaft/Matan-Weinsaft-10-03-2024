import React from "react";

const Card = ({poster, title, director, year, onClick}) => {
  return (
    <div
      className="col-8 col-sm-5 col-md-5 col-lg-3 col-xl-2 col-xxl-2 p-0 position-relative fadeIn "
     >
      <img src={poster !== 'N/A' ? poster : 'https://placehold.co/220x330'} alt={title} className="w-100 rounded-2" />
      <div className="overlay position-absolute w-100 h-100 top-0 text-center d-flex justify-content-between flex-column py-4 bg-dark bg-opacity-75 text-white px-3">
        <span className="h5">{director}</span>
        <div className="d-flex flex-column">
          <h2 className="h4">{title}</h2>
          <span className="h6">{year}</span>
            <button onClick={onClick} className="btn btn-danger">Remove Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
