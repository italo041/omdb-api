import React, { useEffect, useState } from "react";
import { fetchMovies } from "../helpers/fetchMovies";
import { Pagination } from "./Pagination";


export const SeachForm = ({setResults, setUsedSearch}) => {
    const [inputMovie, setInputMovie] = useState('')
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0); 

    const _handleChange = (e) => {
        setInputMovie(e.target.value)
    }

    function removeDuplicates(originalArray, prop) {
        var newArray = [];
        var lookupObject  = {};
   
        for(var i in originalArray) {
           lookupObject[originalArray[i][prop]] = originalArray[i];
        }
   
        for(i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
         return newArray;
    }
    
    const fetchData = async () => {
        try {
            const data = await fetchMovies(inputMovie, page) 
            const { Search = [], totalResults = 0 } = data;  
            if(Search.length > 0) { 
                let data = removeDuplicates(Search,'imdbID') ;
                setResults(data)   
                setTotalResults(Math.ceil(totalResults / 10))
            } 
        } catch (error) {
            console.log(error);
        }
    }

    const _handleSubmit = async (e) => {
        e.preventDefault() 
        setUsedSearch(true)
        await fetchData()
        
    }

    const lastPage = async ()  => {
        const nextPage = Math.max(page - 1, 1)
        setPage(nextPage)
    }

    const nextPage = async () => {
        const nextPage = Math.min(page + 1, totalResults)
        setPage(nextPage)
    } 

    useEffect(() => {
        fetchData()
    }, [page])
    
  return (
      <form onSubmit={_handleSubmit}>
        <div className="field has-addons">

            <div className="control">
                <input className="input" type="text" placeholder="Movie to search" onChange={_handleChange} />
            </div>

            <div className="control">
                <button className="button is-info">Search</button>
            </div>
             
        </div>
        {
            totalResults !== 0 
            ? <Pagination 
                page={page} 
                totalPages={totalResults}
                onLeftClick={lastPage}
                onRightClick={nextPage}/>
            : null
        }
      </form>
  );
};
