import styled from "styled-components";

//ItemDetail
const DetailContainer = styled.div`
`;

const WrapperDetail = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const ImageDetail = styled.img`
    width: 100%;
    height: 30vh;
    object-fit: scale-down;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price  = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const Qty = styled.p`
    margin: 20px 0px;
`;

export { 
    DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price, Qty
}