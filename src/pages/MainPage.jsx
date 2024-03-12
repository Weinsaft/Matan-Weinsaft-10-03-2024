import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieDisplay from "../components/MovieDisplay";
import Search from "../components/Search";

const MainPage = () => {
  const [movies, setMovies] = useState({});

  const [searchValue, setSearchValue] = useState('');
  
  const getMovie = async () => {
    
    const url = `http://www.omdbapi.com/?t=${searchValue}&apikey=5cc103fc`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson){
      setMovies(responseJson);
    }
    console.log(responseJson);
  };

  useEffect(() => {
    getMovie();
    
  }, [searchValue]);

  return (
    <>
      <div className="container d-flex justify-content-center py-3 ">
        <SearchBar
          onChange={e => {
            setSearchValue(e.target.value);
            console.log(searchValue);
          }}
          value={searchValue}
          />
      </div>
        
       {searchValue ? <MovieDisplay movie={movies} /> : <div className="text-center d-flex justify-content-center align-items-center py-5"><h1>Search WeinsaftMdb Now!</h1></div>} 
      
    </>
  );
};

export default MainPage;
