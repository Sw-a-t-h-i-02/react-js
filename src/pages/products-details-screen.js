import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Spinner } from "react-bootstrap"
import { Card } from "react-bootstrap"





 const ProductDetail=()=>{
    const [product,setproduct]=useState({})
    const routeInformation=useParams()
    useEffect(()=>{
FetchData()
    },[routeInformation.id])
    const FetchData=()=>{
        axios.get(`https://fakestoreapi.com/products/${routeInformation.id}`).then(resp=>{
            if(resp.status===200){
                setproduct(resp.data)
            }
        })}
    return(
       <>
            {   
            Object.keys(product).length>0
            ?
           <>
            {/* <h2>{product.id}</h2>
            <img src={product.image} style={{width:100 ,height:110}}/>
            <h1>{product.title}</h1>
            <h4>{product.description}</h4>
            <h3 style={{color:"red"}}>{product.price}</h3> */}

<center>

<Card style={{ width:  '20rem' }}>
<Card.Text>
          {product.id}
       </Card.Text>

      <Card.Img variant="top" src={product.image} />
    <Card.Body>
     <Card.Title>{product.title}</Card.Title>
         <Card.Text>
          {product.description}
       </Card.Text>
       <Card.Text style={{color:"red"}}>
          {product.price}
       </Card.Text>
     {/* <button>
     <Link  to={`/${product.category}/${product.id}`}></Link>
          </button> */}
    </Card.Body>    
     </Card>
</center>
          </>
            :
           <Spinner/>    
        } 
        </> 
    )
 }
 export default ProductDetail



 


