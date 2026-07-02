import "../css/Favourites.css"
import Moviecard from "../components/Moviecard";
import { useMovieContext } from "../context/MovieContext";

function Favourites() {
  const { favoriteMovies } = useMovieContext();

  if(favoriteMovies){{
    return (
      <div className="favorites">
        <h2>Your Favourites</h2>
          <div className="movies-grid">
            {favoriteMovies.map((movie) => (
              <Moviecard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
    )
  }}

  return (
    <>
      <div className="favorites-empty">
        <h2>No favourites yet</h2>
        <p>Click the heart icon on a movie to add it to your favourites.</p>
      </div>
    </>
  )
}

export default Favourites