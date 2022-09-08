import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (<>
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'><img src="mouselogo.png" alt="" width="30" height="24" className="d-inline-block align-text-top logo" />
      Tech House</Link>
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
      <button type="button" className="btn btn-light"><img src="carrito.png" alt="" width="30" height="24"/>4</button>
    </div>
    <CartWidget />
  </nav>
    </>)
}

export default NavBar;