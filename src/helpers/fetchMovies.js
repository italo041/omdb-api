
export const fetchMovies = async (inputMovie, page = 1) => {
    try {   
        const resp = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_OMDB}&s=${inputMovie}&page=${page}`);
        const data = await resp.json();
        return data;
    } catch (error) {
        return error;
    }
}
