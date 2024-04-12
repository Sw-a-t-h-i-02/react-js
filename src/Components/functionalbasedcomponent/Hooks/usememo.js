import { useMemo, useState } from "react"




const UseMemo=()=>{

    const[counter1,setCounter1]=useState(1)
    const[counter2,setCounter2]=useState(1)


    const handleCounter1=()=>{

        setCounter1(counter1+1)
    }

    const handleCounter2=()=>{

        setCounter2(counter2+1)
    }

    const eventChekerC1=useMemo(()=>{

        return counter1%2===0?"EVEN":"ODD"
    },[counter1])


    const eventChekerC2=useMemo(()=>{

        return counter2%2===0?"EVEN":"ODD"
    },[counter2])

    return(

        <>
          <h5>{counter1}</h5>
          <h5>{counter2}</h5>
          <button onClick={handleCounter1}>click to increment counter1</button>
          <button onClick={handleCounter2}>click to increment counter2</button>
          <h5>{eventChekerC1}</h5>
          <h5>{eventChekerC2}</h5>   
        </>
    )
}
export default UseMemo