import { useState } from "react";

function Mood({ readEmo }) {
    const showvalue = (event) => {
        readEmo(event.target.innerText)
    }

    const [activeId, setActiveId] = useState(null);

    const changeSize = (event) => {
        const id = Number(event.target.id);
        setActiveId(id);
    }

    const handleClick = (event) => {
        showvalue(event);
        changeSize(event);
    }

    return (<div>
        <span id="0" style={{ fontSize: activeId === 0 ? '25px' : '16px' }} onClick={handleClick}>&#128522;</span>
        <span id="1" style={{ fontSize: activeId === 1 ? '25px' : '16px' }} onClick={handleClick}>&#128528;</span>
        <span id="2" style={{ fontSize: activeId === 2 ? '25px' : '16px' }} onClick={handleClick}>&#128546;</span>
        <span id="3" style={{ fontSize: activeId === 3 ? '25px' : '16px' }} onClick={handleClick}>&#128545;</span>
    </div>);
}

export default Mood;