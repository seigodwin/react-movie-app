import { useContext , createContext, useState, useEffect} from "react";
import type { Movie } from "../components/Moviecard";

interface MovieContextType {
    favoriteMovies: Movie[];
    addToFavorites: (movie: Movie) => void;
    removeFromFavorites: (movieId: number) => void;
    isFavorite: (movieId: number) => boolean;
}

const MovieContext = createContext<MovieContextType | null>(null);

export function useMovieContext() {
    return useContext(MovieContext);
}

export function MovieProvider({ children }) {
  
    const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favoriteMovies');
        if (storedFavorites) {
            setFavoriteMovies(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    }, [favoriteMovies]);

    function addToFavorites(movie:Movie){
        setFavoriteMovies(prev => [...prev, movie]);
    }

    function removeFromFavorites(movieId:number){
        setFavoriteMovies(prev => prev.filter(movie => movie.id !== movieId));
    }

    function isFavorite(movieId:number){
        return favoriteMovies.some(movie => movie.id === movieId);
    }

    const value = {
        favoriteMovies,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
