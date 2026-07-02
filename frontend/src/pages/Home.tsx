import { useEffect, useState, type FormEvent } from "react"
import Moviecard from "../components/Moviecard"
import type { Movie } from "../components/Moviecard"
import "../css/Home.css"
import { getPopularMovies, searchMovies } from "../services/api.ts"

function Home (){

    const [searchQuery , setSearchQuery] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPopularMovies(){
            try{
                const movies = await getPopularMovies();
                console.log("Popular movies fetched:", movies);
                setMovies(movies);
            }
            catch(error){
                setError("Failed to load popular movies. Please try again later.");    
                console.error("Error fetching popular movies:", error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchPopularMovies();
    } , []);


    async function handleSearch(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        
        if(searchQuery.trim() === "") return;
        if(loading) return;

        setLoading(true);
        try{

            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError("");
        }

        catch(error){
            setError("Failed to search movies. Please try again later.");
        }
        finally{
            setLoading(false);
        }
    }

    return <>          
        <div className="home">          
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" placeholder="search for movie..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Submit</button>
            </form>
            {error && <div className="error">{error}</div>}

            {loading ? ( <div className="loading"> Loading movies...</div>):
            (<div className="movies-grid">
                {movies.map((m) => (
                <Moviecard movie={m}/>))} 
            </div>)}
        </div>
    </>
}

export default Home;