import "../css/Moviecard.css"

export type Movie = {
    id: number,
    title: string,
    url: string,
    release_date: string
}
export type MovieProps = {
    movie: Movie
}

function Moviecard ({movie}: MovieProps){

    function onFavoriteClick(){
        return <p>Favorite clicked</p>
    }

    return <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}></img>
                <div className="movie-overlay">
                    <button onClick={onFavoriteClick}>❤️</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
    </div>
}

export default Moviecard