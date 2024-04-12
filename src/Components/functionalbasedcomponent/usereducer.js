import { useReducer } from "react"



function reducer(state,action){
    switch(action.type){
        case "CHANGE_NAME":
            return {...state,name:"kummari"}
    }

}

const initialState={

    name:"swathi",
    branch:"cse"

}

const UseReducer=()=>{

    const[currentState,dispatchFunction]=useReducer(reducer,initialState)

    const handleChange=()=>{

        dispatchFunction({

             type:"CHANGE_NAME"

        })
    }

    return(
        <>
   <h5>{currentState.name}</h5>
   <button onClick={handleChange}>click to change name</button>

        </>
    )
}
export default UseReducer