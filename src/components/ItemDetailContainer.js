import CustomFetch from "../utils/CustomFetch";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Data from "../utils/Data";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
      CustomFetch(250, Data.find(item => item.id == id))
          .then(result => setDato(result))
          .catch(err => console.log(err))
    },[]);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;