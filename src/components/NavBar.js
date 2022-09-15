import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import images from "../assets/images";
import { Button } from "react-bootstrap";

const NavBar = () => {
    return (<>
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'><img src={images.img9} alt="" width="30" height="24" className="d-inline-block align-text-top logo" />
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
      <Button type="button" className="btn btn-light fs-5 text-primary"><i className="bi bi-cart3"></i>4</Button>
    </div>
    <CartWidget />
  </nav>
    </>)
}

export default NavBar;