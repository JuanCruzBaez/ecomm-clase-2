import ItemCount from "./ItemCount";
import { DetailContainer, ImageDetail, ImgContainer, InfoContainer, Title, WrapperDetail, Desc, Price } from "./styledComponents";


const ItemDetail = ({ item }) => {
    const onAdd = (qty) => {
        alert("You have selected " + qty + " items. ");
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
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </WrapperDetail>
            </DetailContainer>
            :<p>Cargando...</p>
       }   
       </>
    );
}

export default ItemDetail;