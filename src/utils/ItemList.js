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
            <div className="product-wrapper">
            <Item item={product} />
            <ItemCount initial={1} stock={product.stock} />
            </div>
            <hr />
            </>
            ))
          }
        </>
    );
}

export default ItemList;