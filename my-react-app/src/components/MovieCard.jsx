import PropTypes from "prop-types"
import { useMovieContext } from "../context/MovieContext";
function MovieCard({movie}){

    const {addFavourites,removeFavourites,isFavourite}=useMovieContext();
    const favourite=isFavourite(movie.id);

    function favouriteButtonHandle(e){
        e.preventDefault();
        if(favourite)removeFavourites(movie.id);
        else addFavourites(movie);
    }
    return(
    <div className="movie-card-container">
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            <button className={`favourite-btn ${favourite ? "active" : ""}`} onClick={favouriteButtonHandle}>♥</button>
        </div>
        <div className="movie-details">
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
        </div>
    </div>
        
    );
}
MovieCard.propTypes = {
        movie: PropTypes.shape({
            id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
    }).isRequired,
};

export default MovieCard