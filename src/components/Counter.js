import React, { useEffect, useState } from 'react';
const Counter = () => {
    const [count, setCount] =useState(0);
    const increment = () =>{
        setCount(count + 1)
    }
    const decrement = () =>{
        setCount(count - 1)
    }

    useEffect( () =>{
        if (count === -1 || count === 10) {
            throw Error("oops")
        }
    }, [count]);

    return (
        <div className='counter'>
        <div className='counter-wrapper'>
                <div className='counter-display'>
                    {count}
                </div>

                <div className='button-wrapper'>
                    <button onClick={decrement} >-</button>
                    <button onClick={increment} >+</button>
                </div>
                
            </div>
            <p> Error boundary section, the counter component throws
            an error when it decrease to -1 or increment to 10 </p>
        </div>
    );
};

export default Counter;