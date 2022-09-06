import CartWidget from "./CartWidget";

const NavBar = () => {
    return (<>
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand"><img src="mouselogo.png" alt="" width="30" height="24" class="d-inline-block align-text-top logo" />
      Tech House</a>
      <div>
        <ul className="nav justify-content-center">
        <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-light"  href="#">Productos</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-light" href="#">Contacto</a>
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