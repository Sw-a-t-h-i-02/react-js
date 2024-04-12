import LoginScreen from "../../pages/loginscreen"
import { Routes,Route } from "react-router-dom"





const PreRoute=()=>{


    return(

        <Routes>

        <Route   path="/"  Component={LoginScreen}/>
        
        
        </Routes>


    )
}
export default PreRoute