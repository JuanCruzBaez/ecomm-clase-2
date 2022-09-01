import ItemList from "../utils/ItemList";
import CustomFetch from "../utils/CustomFetch";
import { useEffect, useState } from "react";
import Data from "../utils/Data";

const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([]);
    
    useEffect(() => {
      CustomFetch(2000, Data)
          .then(result => setDatos(result))
          .catch(err => console.log(err))
    })
    
    
    return(
      <>
        <h1>{greeting}</h1>
        <ItemList items={datos}/>
      </>
    );
}

export default ItemListContainer;