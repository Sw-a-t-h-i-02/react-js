
import axios from "axios"






// const Axios=()=>{
//     const AxiosFetchData=async ()=>{

//         const result=await axios.get("https://fakestoreapi.com/products").then(res=>console.log(res)).catch(err=>console.log(err))
// console.log(result)
//     }    
//     return(
      
//         <>
//         <button onClick={AxiosFetchData}>Click here for feteching data</button>
        
//         </>
//     )
// }
// export default Axios



const FetchMethod=()=>{


    const FetchingData= async ()=>{

        const result=await fetch("https://fakestoreapi.com/products")
        
        let final= await result.json()
        console.log(final)
    }
    return(
        
        <>

        <button onClick={FetchingData}>click here for  fetch method</button>
        </>
    )
}
export default  FetchMethod

