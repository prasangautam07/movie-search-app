import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";
function Favourite(){
    const {favourites}=useMovieContext();
    if(favourites){
        return(
            <div className="movies-grid">
                {favourites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        )
    }
    return(
        <div className="favourite">
            <h2>There is not any favourite movies yet </h2>
        </div>
    );
}

export default Favourite