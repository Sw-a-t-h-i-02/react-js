
import { useState } from "react"




const UseStateEx2 = ()=>{


      const[timer,settimer]=useState(0)


      const handleTimer=()=>{

        setInterval(()=>{

settimer(timer=>timer+1)
        },1000)
      }
    return(


        <>
 <h1>{timer}</h1>
        <button onClick={handleTimer}>click here to start the timer</button>
        </>
    )
}
export default UseStateEx2