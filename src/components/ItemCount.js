import { useEffect, useState } from "react";

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
        <button className="control__btn" onClick={increment}>+</button>
        <button className="control__btn" onClick={decrement}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
    </> 
    );
}

export default ItemCount;