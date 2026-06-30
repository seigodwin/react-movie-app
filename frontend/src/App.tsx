
import './App.css'
import Moviecard from './components/Moviecard'

function App() {
  return (
    <>
     <Moviecard movie ={{Id: 1 , Title: "BBC", ReleaseDate: new Date(), Url: "vs.com"}}/>
    </>
  )
}

export default App
