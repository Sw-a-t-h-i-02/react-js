import Header from "../Components/header/header"
import { useContext } from "react"
import { Name } from "../navigation/navigation"
import UseCallback from "../Components/functionalbasedcomponent/Hooks/usecallback"



const SettingScreen=()=>{

    const hello=useContext(Name)
    return(


        <>
 <Header/>
        <h1>Setting Screen</h1>
        <h3>{hello.userName}</h3>
        <UseCallback/>
       
        </>
    )
}
export default SettingScreen