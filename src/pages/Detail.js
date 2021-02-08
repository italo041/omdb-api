import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types' 
import { ButtonBackToHome } from '../components/ButtonBackToHome'

export const Detail = (props) => {

    const [movie, setMovie] = useState({})

    const _fetchMovie = async (id) => {
        try {
            const resp = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_OMDB}&i=${id}`);
            const dataMovie = await resp.json();
            setMovie(dataMovie)
        } catch (error) {
            console.log(error);
        }
    } 
     

    useEffect(() => {
        const { movieId } = props.match.params; 
        _fetchMovie(movieId)
    }, [])

    const { Title, Poster, Actors, Metascore, Plot } = movie;
    

    return (
        <div className="container animate__animated animate__fadeIn"> 
            <h1 className="title movie-title">{Title}</h1>
            <div className="detail">
                <img alt="Title" src={Poster === 'N/A' ? '/img/not_found_image.png' : Poster} className="animate__animated animate__fadeIn" />
                <div className="text-detail">
                    <h3><strong>Actors:</strong> {Actors}</h3>
                    <span><strong>Score:</strong> {Metascore}</span>
                    <p><strong>Description:</strong> {Plot}</p>
                    <div className="footer-detail">
                        <ButtonBackToHome />
                    </div>
                </div>
            </div>
        </div>
    )
}

Detail.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object,
        isExact: PropTypes.bool,
        path: PropTypes.string,
        url: PropTypes.string
    })
}
