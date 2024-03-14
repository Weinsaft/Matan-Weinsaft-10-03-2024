// SearchBar component
import React from "react";

function SearchBar({ onChange, onClick, resultClick, value, autoCompleteResults }) {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <input
          type="text"
          placeholder="Search a movie..."
          className="text-center py-1 w-100"
          value={value}
          onChange={onChange}
        />
        <button className="btn btn-dark rounded-0" onClick={onClick}>
          Search
        </button>
      </div>

      {autoCompleteResults && autoCompleteResults.length > 0 && (
        <div className="w-50 mx-auto mt-1 bg-dark-subtle">
          <ul className="list-unstyled px-2 py-1 res">
            {autoCompleteResults.map(result => (
              <li key={result.imdbID} onClick={() => resultClick(result.Title)}>
                {result.Title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
