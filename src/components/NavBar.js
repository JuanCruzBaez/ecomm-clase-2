const NavBar = () => {
    return (<>
    <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand"><img src="mouselogo.png" alt="" width="30" height="24" class="d-inline-block align-text-top logo" />
      Tech House</a>
      <div>
        <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light"  href="#">Productos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="#">Contacto</a>
        </li>
    </ul>
      </div>
      <button type="button" class="btn btn-light">Iniciar Sesion</button>
    </div>
  </nav>
    </>)
}

export default NavBar;