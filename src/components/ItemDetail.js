import ItemCount from "./ItemCount";
import { DetailContainer, ImageDetail, ImgContainer, InfoContainer, Title, WrapperDetail, Desc, Price } from "./styledComponents";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "./CartContext";


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext)

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " productos. ");
        setItemCount(qty);
        test.addItem(item, qty);
    }

    return(
        <>
        {
            item && item.image
            ?
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.name} {item.brand}</Title>
                        <Desc></Desc>
                        <Price>$ {item.price}</Price>
                        <Desc>{item.stock} unidades disponibles</Desc>
                    </InfoContainer>
                    {
                        itemCount === 0 && <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                    }
                    {
                        itemCount !== 0 && <Link to='/cart' style={{textDecoration: "none"}}><Button variant="danger">CHECKOUT</Button></Link>
                    }
                    {/* {   
                    itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="danger">CHECKOUT</Button></Link>
                    }   */}   
                </WrapperDetail>
            </DetailContainer>
            :<p>Cargando...</p>
       }   
       </>
    );
}

export default ItemDetail;