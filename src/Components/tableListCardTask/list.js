import { Component } from "react";
import React from "react";
import axios from "axios";



class ListFetch extends Component{

    constructor(){
        super();
        this.state={
            List:[]
        }
    }


    FetchMethod=()=>{

axios.get("https://fakestoreapi.com/products").then((resp)=>{

this.setState({
    List:resp.data
})
}).catch((err)=>console.log(err))

    }
    render(){
        return(
            <>
          
<button onClick={this.FetchMethod}>click here</button>

                {
                    this.state.List.map((value)=>(
                        <React.Fragment key={value.id}>

                      <li>{value.id}</li>
                      <li>{value.price}</li>
                      <li>{value.rating.count}</li>
                      <li>{value.description}</li>
                      <li>{value.rating.rate}</li>
                      </React.Fragment>

                    ))
                }
            
            </>
        )
    }
}
export default ListFetch