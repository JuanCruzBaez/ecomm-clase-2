import Data from "../utils/Data";
import { useEffect, useState } from "react";
import CustomFetch from "./CustomFetch";
import ItemCount from "../components/ItemCount";
import Item from "./Item";

const ItemList = ( {items}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        CustomFetch(Data)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    },[])

    return(
        <>
          {
            products.map(product => (
            <>
            <Item name={product.name} brand={product.brand} />
            <h4>{product.name + " " + product.brand}</h4>
            <h4>Precio : ${product.price}</h4>
            <hr />
            <h5><ItemCount stock={5} initial={1} stock={product.stock} /></h5>
            <img src={product.image} alt="" width="300" height="300"/>
            </>
            ))
          }
        </>
    );
}

export default ItemList;