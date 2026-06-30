
export type Movie = {
    Id: number,
    Title: string,
    Url: string,
    ReleaseDate: Date
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
                <img src={movie.Url} alt={movie.Title}></img>
                <div className="movie-overlay">
                    <button onClick={onFavoriteClick}>❤️</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.ReleaseDate.toDateString()}</p>
            </div>
    </div>
}

export default Moviecard