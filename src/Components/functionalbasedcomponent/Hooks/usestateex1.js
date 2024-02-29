const { useState } = require("react")





const UseStateEx1 =()=>{
const[currentcount,setcount]=useState(0)


const handleIncrement=()=>{

    setcount(currentcount+10)
}

const handleDecrement=()=>{

    setcount(currentcount-5)
}

const handleReset=()=>{

    setcount(0)
}

    return(

        <>
        <h1>{currentcount}</h1>
        <button onClick={handleIncrement}>clik here for increment</button>
        <button onClick={handleDecrement}>clik here for decrement</button>
        <button onClick={handleReset}>clik here for Reset</button>
      
        </>


    )
}
export default UseStateEx1