import { useEffect, useState, type ReactNode } from "react";

import type { Movie } from "../components/Moviecard";
import { MovieContext, type MovieContextType } from "./MovieContextState";

type MovieProviderProps = {
    children: ReactNode;
};

export function MovieProvider({ children }: MovieProviderProps) {
    const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

    // Load favorites from localStorage when the app starts
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favoriteMovies");

        if (storedFavorites) {
            setFavoriteMovies(JSON.parse(storedFavorites));
        }
    }, []);

    // Save favorites whenever they change
    useEffect(() => {
        localStorage.setItem(
            "favoriteMovies",
            JSON.stringify(favoriteMovies)
        );
    }, [favoriteMovies]);

    function addToFavorites(movie: Movie) {
        setFavoriteMovies((prev) => {
            // Prevent duplicate favorites
            if (prev.some((m) => m.id === movie.id)) {
                return prev;
            }

            return [...prev, movie];
        });
    }

    function removeFromFavorites(movieId: number) {
        setFavoriteMovies((prev) =>
            prev.filter((movie) => movie.id !== movieId)
        );
    }

    function isFavorite(movieId: number) {
        return favoriteMovies.some((movie) => movie.id === movieId);
    }

    const value: MovieContextType = {
        favoriteMovies,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
}