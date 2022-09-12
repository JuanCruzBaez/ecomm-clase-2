import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const[count, setCount] = useState(0);   

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    return(
    <>
    <div className="counter">
      <span className="counter__output">{count}</span>
      <div className="btn__container">
        <Button onClick={decrement}>-</Button>
        <Button onClick={increment}>+</Button>
        {
            stock && count
            ? <Button variant="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
            : <Button variant="secondary" disabled>Add to Cart</Button>
        }
      </div>
    </div>
    </> 
    );
}

export default ItemCount;