import React, { useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    let a = 10;

    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component will unmount');
        };
    }, []);

    useEffect(() => {
        console.log('Component updated');
    });

    useEffect(() => {                                                                                   
        const timer = setTimeout(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };                 
    }, [count, a]); 

    return <h1>I've rendered {count} times!</h1>;
}

export default Timer;
