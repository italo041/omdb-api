import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Movie = ({ id, title, year, poster }) => {
  return (
    <Link to={`/detail/${id}`} className="card">
      <div className="card-image animate__animated animate__fadeIn">
        <figure className="image animate__animated animate__fadeIn">
          {
            poster 
            ? <img
                className="animate__animated animate__fadeIn"
                src={poster === 'N/A' ? '/img/not_found_image.png' : poster}
                alt={title} />
            : null
        
          }
        </figure>
      </div>
      <div className="card-content animate__animated animate__fadeIn">
        <div className="media"> 
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{year}</p>
          </div>
        </div> 
        </div>
    </Link>
    
  );
};

Movie.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  poster: PropTypes.string,
};
