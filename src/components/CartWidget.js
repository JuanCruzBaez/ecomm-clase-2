import { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartWidget = () => {
    const context = useContext(CartContext)

    return (
        <>
            <Badge pill bg="none">
            <Link to={"/cart"}><Button type="button" className="btn btn-light fs-5 text-primary"><i className="bi bi-cart3"></i> {context.displayItemNumber()}</Button></Link>
            </Badge>
        </>
    );

}

export default CartWidget ;