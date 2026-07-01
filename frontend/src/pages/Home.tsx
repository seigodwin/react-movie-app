import { useEffect, useState, type FormEvent } from "react"
import type { Movie } from "../components/Moviecard"
import Moviecard from "../components/Moviecard"
import "../css/Home.css"
import "../services/api.ts"
import { getPopularMovies } from "../services/api.ts"

function Home (){

    const [searchQuery , setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPopularMovies(){
            try{
                const movies = await getPopularMovies();
                console.log("Popular movies fetched:", movies);
                setMovies(movies);
            }
            catch(error){
                console.error("Error fetching popular movies:", error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchPopularMovies();
    } , []);


    function handleSearch(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
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
            <div className="movies-grid">
                {movies.map((m) => (
                <Moviecard movie={m} />))} 
            </div>   
        </div>
    </>
}

export default Home;