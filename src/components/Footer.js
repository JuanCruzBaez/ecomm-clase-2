import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer" >
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>TECH HOUSE INC</h4>
            <h1 className="list-unstyled">
              <li>4247-4316</li>
              <li>Buenos Aires, Argentina</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>INFO</h4>
            <ul className="list-unstyled">
              <li>CURSO REACT</li>
              <li>CODERHOUSE 2022</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} TECH HOUSE | Todos los derechos reservados |
            Términos | Privacidad | Contactarnos
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;