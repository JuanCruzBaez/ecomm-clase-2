import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    
    const onAdd = (qty) => {
      alert("You have selected " + qty + " items.");
    }
    
    return(
      <>
        <h1>{greeting}</h1>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </>
    );
}

export default ItemListContainer;