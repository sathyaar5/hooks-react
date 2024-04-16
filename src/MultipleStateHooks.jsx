import { useState } from 'react';

function Car() {
    // const [brand, setBrand] = useState("Audi");
    // const [model, setModel] = useState("Audi A3");
    // const [year, setYear] = useState("2022");
    // const [color, setColor] = useState("Light Green");

    const [brand] = useState("Audi");
    const [model] = useState("Audi A3");
    const [year] = useState("2022");
    const [color] = useState("Light Green");

    return (
        <>
        <h1>My {brand} </h1>
        <p>It's a {color} {model} from {year} </p>
        </>
    );
}

export default Car;