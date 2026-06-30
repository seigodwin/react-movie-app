import type { Movie } from "../components/Moviecard"
import Moviecard from "../components/Moviecard"

function Home (){
    const movies: Movie[] = [
        {Id: 1, Title: "BBC", Url: "vs.com", ReleaseDate: new Date()},
        {Id: 2, Title: "BBC2", Url: "vs.com", ReleaseDate: new Date()},
        {Id: 3, Title: "BBC3", Url: "vs.com", ReleaseDate: new Date()},
        {Id: 4, Title: "BBC4", Url: "vs.com", ReleaseDate: new Date()}
    ]

    return <>
        <div className="home">
            <div className="movies-grid">
                {movies.map(m => <Moviecard movie={m} key={m.Id}/>)}
            </div>
        </div>
    </>
}

export default Home