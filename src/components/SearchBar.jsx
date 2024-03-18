import React, { useState } from "react";

function SearchBar({ onChange, resultClick, value, autoCompleteResults }) {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div className="container py-3">
      <div className="d-flex">
        <input
          type="text"
          placeholder="Search a movie..."
          className="form-control"
          value={value}
          onChange={onChange}
          onFocus={() => setIsInputFocused(true)}
          
        />
      </div>

      {isInputFocused &&
        autoCompleteResults && (
          <div id="list1" className="list-group hide position-absolute w-50 z-2">
            <ul className="list-unstyled px-2 py-1 res">
              {autoCompleteResults.map((result) => (
                <li
                  className="list-group-item"
                  key={result.imdbID}
                  onClick={() => resultClick(result.Title)}
                >
                  {result.Title}
                </li>
              ))}
            </ul>
          </div>
        )}

      <div className="form-group"></div>
    </div>
  );
}

export default SearchBar;
