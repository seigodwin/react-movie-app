import "../css/Moviecard.css"
import { useMovieContext } from "../context/MovieContext";

export type Movie = {
    id: number,
    title: string,
    poster_path: string,
    release_date: string
}
export type MovieProps = {
    movie: Movie
}

function Moviecard ({movie}: MovieProps) {
    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();  
        
    const favorite = isFavorite(movie.id);          

    function onFavoriteClick(e: React.MouseEvent<HTMLButtonElement>){ 
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    } 

    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return <div className="movie-card">
            <div className="movie-poster">
                <img src={posterUrl} alt={movie.title}></img>
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    🤍</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
    </div>
}

export default Moviecard