import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FavoritesPage from "./pages/FavoritesPage";
import SearchBar from "./components/SearchBar";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  const [movie, setMovie] = useState({
    Title: "The Matrix",
    Year: "1999",
    Rated: "R",
    Released: "31 Mar 1999",
    Runtime: "136 min",
    Genre: "Action, Sci-Fi",
    Director: "Lana Wachowski, Lilly Wachowski",
    Writer: "Lilly Wachowski, Lana Wachowski",
    Actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    Plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    Language: "English",
    Country: "United States, Australia",
    Awards: "Won 4 Oscars. 42 wins & 52 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.7/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "83%",
      },
      {
        Source: "Metacritic",
        Value: "73/100",
      },
    ],
    Metascore: "73",
    imdbRating: "8.7",
    imdbVotes: "2,034,744",
    imdbID: "tt0133093",
    Type: "movie",
    DVD: "01 Jan 2009",
    BoxOffice: "$172,076,928",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  });
  const [searchValue, setSearchValue] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const getAutoComplete = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5cc103fc`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson && responseJson.Search) {
      setAutoComplete(responseJson.Search);
    }

  
  };

  useEffect(() => {
    getAutoComplete();
  }, [searchValue]);

  const handleResultClick = async (query) => {
    const url = `http://www.omdbapi.com/?t=${query}&apikey=5cc103fc`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson) {
      setMovie(responseJson);
    }

    setSearchValue("");
    setAutoComplete([]);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      setAutoComplete([]);
    }
  };

  const addToFavorites = (movie) => {
    
    if (!favorites.find(favorite => favorite.imdbID === movie.imdbID)) {
      const newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar
                onChange={handleInputChange}
                autoCompleteResults={autoComplete}
                value={searchValue}
                resultClick={handleResultClick}
              />
              <MovieDisplay movie={movie} addToFavorites={addToFavorites} />
            </>
          }
        />
        <Route
          path="/favorites"
          element={<FavoritesPage favorites={favorites} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
