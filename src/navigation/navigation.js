import { BrowserRouter} from "react-router-dom"
import PostRoute from "./postRoute/post-route"
import PreRoute from "./PreRoute/pre-route"
import { createContext, useState } from "react"


export const Name=createContext()

const NavigationStack=()=>{

const[userName,setUsername]=useState("swathi")

const ChangeName=()=>{
    setUsername("kummariswathi")
}

    return(

<BrowserRouter>

<Name.Provider value={{userName,ChangeName}}>
{
true
?
<PostRoute/>
:
<PreRoute/>
}
</Name.Provider>

</BrowserRouter>
    )
}
export default NavigationStack