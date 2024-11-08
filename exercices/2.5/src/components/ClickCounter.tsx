import "./ClickCounter.css"
import { useState } from "react"

interface ClickCounterProps {
    title : string,
    _10clickMessage?: string,
    mouseOn ?: string,
}


const ClickCounter = ({title,_10clickMessage,mouseOn="Please click on me now"}:ClickCounterProps) => {
    
    const [count, setCount] = useState(0)
    const [isHovered , setisHovered] = useState(false);

    return (
        <div className="card">

            <h1>{title}</h1>

            {isHovered ? mouseOn : null}

        <button onClick={() => setCount((count) => count + 1)}
                onMouseEnter={() => setisHovered(true)}
                onMouseLeave={() => setisHovered(false)}
        >
          count is {count}
        </button>
        <p>
          {count >= 10 ? _10clickMessage : null}
        </p>
        <p>
            {mouseOn}
        </p>
      </div>
    );
};

export default ClickCounter;