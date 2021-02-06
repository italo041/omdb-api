import React from 'react';
import PropTypes from 'prop-types'
import { Movie } from './Movie';

export const MoviesList = ({movies}) => {
    
    return (
            <div className="MoviesList ">
                {
                    movies.map((movie) => {
                        return (
                            movie
                            ?   <div key={movie.imdbID} className="MoviesList-item animate__animated animate__fadeIn" >
                                    <Movie 
                                        id={movie.imdbID}
                                        title={movie.Title}
                                        year={movie.Year}
                                        poster={movie.Poster}>   
                            
                                        {movie.Title}
                                    </Movie>
                                </div>
                            : <div>Cargando...</div>
                        )
                    })
                }
            </div>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.array
}
