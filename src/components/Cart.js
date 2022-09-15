import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { DetailContainer, ImageDetail, ImgContainer, InfoContainer, Title, WrapperDetail, Desc, Price, Qty } from "./styledComponents";

const Cart = () => {
    
    const test = useContext(CartContext);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button className="remove-all-button" variant="danger" active onClick={test.clear}>Quitar todos los productos</Button>
            </div>
                {            
                test.cartList.map (item =>
                <>
                <DetailContainer>
                    <WrapperDetail>
                        <ImgContainer>
                            <ImageDetail src={item.image} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.name} {item.brand}</Title>
                            <Desc></Desc>
                            <Price>$ {item.price}</Price>
                            <Qty>Cantidad: {item.qty}</Qty>
                            <Desc>{item.stock} unidades disponibles</Desc>
                        </InfoContainer>
                    </WrapperDetail>
                </DetailContainer>               
                <Button className="remove-button" variant="primary" onClick={() => test.removeItem(item.id)}>Quitar producto</Button>
                </>
                ) 
                }  
        </>
    )
}

export default Cart;




/* <Button variant="secundary" active onClick={test.clear}>Quitar todos los productos</Button>
            {
                test.cartList.map(item => <li>{item.name} (qty={item.qty}) <Button variant="secundary" active
                 onClick={() => test.removeItem(item.id)}>Quitar producto</Button></li>)
                
            } */