import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (<>
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'><i className="bi bi-mouse2"></i>
      {" Tech House"}</Link>
      <div>
        <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link className="nav-link text-light" to='/category/30'>Mouse</Link>  
        </li>
        <li className="nav-item">
            <Link className="nav-link text-light" to='/category/55'>Teclados</Link>  
        </li>
        <li className="nav-item">
            <Link className="nav-link text-light" to='/category/15'>Auriculares y microfonos</Link>  
        </li>
        <li className="nav-item">
            <Link className="nav-link text-light" to='/category/10'>Monitores</Link>  
        </li>
    </ul>
      </div>
      <CartWidget />
    </div>
  </nav>
    </>)
}

export default NavBar;