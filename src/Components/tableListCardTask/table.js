import { Component } from "react";
import axios from "axios";
import "./tablee.css"

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


  increment=(prod)=>{

    let result=this.state.products.map((val)=>{
        if(val.id===prod){
            return {...val,price:val.price+100}
        }
     
            return  val
        
    })
    this.setState({
        products:result
    })
        }
    

        decrement=(prod)=>{

            let result=this.state.products.map((value)=>{
                if(value.id===prod){
                    return {...value,price:value.price-10}
                }
                else{
                    return value
                }
            })
            this.setState({
                products:result
            })
    
        }

    render(){
        return(
            <>
       <button onClick={this.FetchData} className="button">click here</button>
            
              
            <table className="table-style" >
<tbody className="table-style">
            <tr className="table-style">
                    <th className="table-style">Id</th>
                    <th className="table-style">Price</th>
                    <th className="table-style">Increment</th>
                    <th className="table-style">Decrement</th>
                    <th className="table-style">Description</th>
                    <th className="table-style">Count</th>
                    <th className="table-style">Image</th>
                </tr>
              
               
            {
                this.state.products.map((value)=>(
                    <>
                    <tr key={value.id} className="table-style">
                     <td className="table-style">{value.id}</td>
                     <td className="table-style">{value.price}</td>
                     <td className="table-style">
                            <button onClick={()=>this.increment(value.id)} className="click-button">+</button>
                            </td>
                            <td className="table-style">
                            <button onClick={()=>this.decrement(value.id)}  className="click-button">-</button>
                            </td>
                     <td className="table-style">{value.description}</td>
                     <td className="table-style">{value.rating.count}</td>
                     <td className="table-style"><img src={value.image} style={{width:100,height:100}}></img></td>
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