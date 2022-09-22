import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firebaseConfig";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        firestoreFetch(id)
            .then(result => setDatos(result))
    }, [id]);
    
    
    return(
      <>
        <ItemList items={datos}/>
      </>
    );
}

export default ItemListContainer;