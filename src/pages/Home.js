import React, { useState } from "react"; 
import { MoviesList } from '../components/MoviesList';
import { Title } from '../components/Title';
import { SeachForm } from '../components/SeachForm'; 


export const Home = () => {
  
  const [results, setResults] = useState([]);
  const [usedSearch, setUsedSearch] = useState(false);
 
  
  const _renderResults = () => {
    if (results.length === 0) {
        if (usedSearch) {
            return <p>Movie not found <span role="img" aria-label="sad-emoji">🙁</span></p>;
        }
      return <p>Search movies!</p>;
    }
    return <MoviesList movies={results} />;
  }; 
  
  return (
    <div className="container animate__animated animate__fadeIn">
      <Title >Search Movies</Title>
      <div className="SearchForm-wrapper ">
        <SeachForm setResults={setResults} setUsedSearch={setUsedSearch} />
      </div>
      {
        _renderResults()
      }
    </div>
  );
};
