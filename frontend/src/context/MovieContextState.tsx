import { createContext, useContext } from "react";
import type { Movie } from "../components/Moviecard";

export type MovieContextType = {
    favoriteMovies: Movie[];
    addToFavorites: (movie: Movie) => void;
    removeFromFavorites: (movieId: number) => void;
    isFavorite: (movieId: number) => boolean;
};

export const MovieContext = createContext<MovieContextType | null>(null);

export function useMovieContext() {
    const context = useContext(MovieContext);

    if (!context) {
        throw new Error("useMovieContext must be used within a MovieProvider");
    }

    return context;
}
