import { Component } from "react";
import axios from "axios";

class AxiosTable extends Component{
constructor(){
    super();
    this.state={
 products:[]
    }
}
   FetchData=()=>{
        axios.get("https://fakestoreapi.com/products").then((resp)=>{
            this.setState({

                products:resp.data
            })
        }).catch((err)=>console.log(err))
  }
    render(){
        return(
            <>
             <button onClick={this.FetchData}>click here</button>
            <table>
               <tbody>
               <tr>
                    <th>Id</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Count</th>
                    <th>Image</th>
                </tr>
            {
                this.state.products.map((value)=>(
                    <>
                    <tr key={value.id}>
                     <td>{value.id}</td>
                     <td>{value.price}</td>
                     <td>{value.description}</td>
                     <td>{value.rating.count}</td>
                     <td><img src={value.image} style={{width:100,height:100}}></img></td>
                    </tr>
                    </>
            ))
            }
               </tbody>
            </table>
            </>
        )
    }
}
export default AxiosTable