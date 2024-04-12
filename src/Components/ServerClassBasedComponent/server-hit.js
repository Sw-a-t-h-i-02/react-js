import { Component } from "react";
import axios from "axios";

class HitServer extends Component{
constructor(){
    super();
    this.state={
        product:[]
    }
}

handleServer=()=>{
  axios.get("https://fakestoreapi.com/products").then((resp)=>{
    this.setState({

        product:resp.data
    },()=>{
        console.log(this.state.product)
    })
})
.catch((err)=>{console.log(err)})

}
    render(){
        return(
            <>

            <button onClick={this.handleServer}>click here for the data</button>
            {
                this.state.product.map(value=>(
                    <div key={value.id}>
                        <h1>{value.title}</h1>
                        <p>{value.description}</p>
                        <h1>{value.price}</h1>
                    </div>
                ))
            }
            </>
        )
    }
}
export default HitServer


