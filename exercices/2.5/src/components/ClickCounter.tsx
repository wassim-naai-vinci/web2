import "./ClickCounter.css"
import { useState } from "react"

interface ClickCounterProps {
    title : string,
    _10clickMessage?: string,

}


const ClickCounter = ({title,_10clickMessage}:ClickCounterProps) => {
    
    const [count, setCount] = useState(0)

    return (
        <div className="card">

            <h1>{title}</h1>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {count >= 10 ? _10clickMessage : null}
        </p>
      </div>
    );
};

export default ClickCounter;