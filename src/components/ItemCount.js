import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const[count, setCount] = useState(0);   

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count +1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count -1)
        }
    }

    const reset = () =>{
        setCount(0)
      }
    return(
    <>
    <div className="counter">
      <span className="counter__output">{count}</span>
      <div className="btn__container">
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
    </> 
    );
}

export default ItemCount;