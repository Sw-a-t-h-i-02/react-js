import Header from "../Components/header/header"
import { useNavigate } from "react-router-dom"

const  InvalidScreen=()=>{

const navigate=useNavigate()

     const handleError=()=>{
navigate("/")
    }

    return(

<>

<h1>Invalid Screen</h1>

<button onClick={handleError}>Go to Home Page</button>


</>

    )
}
export default InvalidScreen