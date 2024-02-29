import React, { useState } from "react"


const UseStateE3 =()=>{

    const[fruits,setfruits]=useState(["apple","banana","orange"])


    const handleFruits=()=>{
let newState=[...fruits,"mango"]
        setfruits(newState)
    }

    const handleDeleteFruits=(index)=>{

        let newfruit=fruits.filter((fruits,ind)=>{

            return ind!==index
        })

setfruits(newfruit)
    }


    const handleReset=()=>{

        setfruits(0)

    }
    return(
        <>
         <button onClick={handleFruits}>clik here to add</button>
         <button onClick={handleReset}>click for Reset</button>

        <h1>List of Fruits</h1>
<ol>
        {
            fruits.map((value,index)=>(
            
            <React.Fragment key={index}>
            
            <li>{value}</li>
            <button onClick={()=>handleDeleteFruits(index)}>click for delete</button> 
            </React.Fragment>

  ) )
            }
        
        </ol>
        </>
    )
}

export default UseStateE3