import { useState } from "react"
import type { Movie } from "../components/Moviecard"
import Moviecard from "../components/Moviecard"

function Home (){

    const [searchQuery , setSearchQuery] = useState("");

    const movies: Movie[] = [
        {Id: 1, Title: "BBC", Url: "vs.com", ReleaseDate: new Date()},
        {Id: 2, Title: "BBC2", Url: "vs.com", ReleaseDate: new Date()},
        {Id: 4, Title: "BBC4", Url: "vs.com", ReleaseDate: new Date()}
    ];

    function handleSearch(){
        alert(searchQuery); 
    }

    return <>
        <div className="home">
            <form className="search-form">
                <input type="text" placeholder="search for movie..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button"
                onSubmit={handleSearch}>Submit</button>
            </form>
            <div className="movies-grid">
                {movies.map(m => <Moviecard movie={m} key={m.Id}/>)}
            </div>
        </div>
    </>
}

export default Home;