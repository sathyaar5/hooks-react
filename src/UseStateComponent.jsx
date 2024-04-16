import { useState } from "react";

function FavColor() {
    const [color, setColor] = useState("");

    return (
        <>
            <h1> My favorite color is {color}</h1>
            <button type="button" onClick={()=>setColor("Blue")}>Blue</button>
            <button type="button" onClick={()=>setColor("Green")}>Green</button>
            <button type="button" onClick={()=>setColor("Pink")}>Pink</button>
            <button type="button" onClick={()=>setColor("Red")}>Red</button>
            <button type="button" onClick={()=>setColor("Yellow")}>Yellow</button>

        </>
    );
}

export default FavColor;