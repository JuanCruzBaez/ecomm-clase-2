import ItemCount from "./ItemCount";
import { DetailContainer, ImageDetail, ImgContainer, InfoContainer, Title, WrapperDetail, Desc, Price } from "./styledComponents";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items. ");
        setItemCount(qty);
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
                        <Title>{item.name}</Title>
                        <Desc>{item.brand}</Desc>
                        <Price>$ {item.price}</Price>
                        <Desc>{item.stock} unidades disponibles</Desc>
                    </InfoContainer>
                    {   
                    itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="danger">CheckOut</Button></Link>
                    }     
                </WrapperDetail>
            </DetailContainer>
            :<p>Cargando...</p>
       }   
       </>
    );
}

export default ItemDetail;