import React, { useState } from 'react';
/* import Container from 'react-bootstrap/Container'; */
import { Button } from 'react-bootstrap';

const Contador = ({Stock}) => {
    const [count, setCount] = useState(0);
        const increment = () =>{
            if (count < Stock) {
                setCount(count+1)
            }
        }
        const decrement = () =>{
            if (count > 0 ) {
                setCount(count-1)
            }
        }

    return (
        <>
            <div>
                <Button variant="secondary" onClick={decrement}>-</Button>
                <h2>{count}</h2>
                <Button variant="secondary" onClick={increment}>+</Button>
            </div>
        </> 

    )
}

export default Contador;
