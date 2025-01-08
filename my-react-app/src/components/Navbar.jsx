import { Link } from "react-router-dom"
function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link className="navbar-brand-name" to='/'>Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favourite" className="nav-link">Favourite</Link>
            </div>
        </nav>
    )
}

export default Navbar