import { Link } from "react-router-dom";

function Navbar(){
    return <nav className="navbar">
        <div className="nav-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="nav-links">
            <Link to="/" className="nav-link">
                Home
            </Link>
            <Link to="/favourites" className="nav-link">
                Favourites
            </Link>
        </div>
    </nav>
}

export default Navbar;