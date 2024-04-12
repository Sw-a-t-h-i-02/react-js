import { useContext } from "react"
import Header from "../Components/header/header"
import { Name } from "../navigation/navigation"



const  AboutScreen=()=>{

    const ChangeName=()=>{
        globalInfo.ChangeName()
    }

    let globalInfo=useContext(Name)

    return(

<>
<Header/>
<h1>About Screen</h1>
<h3>hello {globalInfo.userName}</h3>
<button onClick={ChangeName}>change the name</button>
</>

    )
}
export default AboutScreen