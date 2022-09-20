import ItemList from "./ItemList";
import CustomFetch from "../utils/CustomFetch";
import { useEffect, useState } from "react";
import Data from "../utils/Data";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        if (id) {
        CustomFetch(250, Data.filter(item => item.categoryId === parseInt(id)))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        } else {
        CustomFetch(250, Data)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        }
    }, [id]);
    
    
    return(
      <>
        <h1>{greeting}</h1>
        <ItemList items={datos}/>
      </>
    );
}

export default ItemListContainer;