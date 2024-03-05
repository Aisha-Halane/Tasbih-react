import { useState } from "react";

function Tasbiix(){


    const [count, setCount] = useState(0);

    const handleIncrement =()=>{
       setCount(count+1)
    }

    const handleDecrement =()=>{
        if(count > 0){
            setCount(count-1)
        }
     }


     const handleReset =()=>{
        setCount(0)
     }
    return <div className="text-center mt-32">

        <h1 className="text-7xl mb-10 "> {count}</h1>
        <button onClick={handleIncrement} className="bg-green-500 px-4 py-2 text-2xl m-2 rounded text-white">Increment</button>
        <button onClick={handleDecrement} className="bg-blue-500 px-4 py-2 text-2xl m-2 rounded text-white">Decrement</button>
        <button onClick={handleReset} className="bg-red-500 px-4 py-2 text-2xl m-2 rounded text-white">Reset</button>
    </div>
}

export default Tasbiix;