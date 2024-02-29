import { Component } from "react";
import "./table.css"



class TableProducts extends Component{

    constructor(){
        super();
        this.state={

            products:[
            
                {
                    id: 1,
                    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    price: 109.95,
                    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    rating: {
                        rate: 3.9,
                        count: 120
                    }
                },
                {
                    id: 2,
                    title: "Mens Casual Premium Slim Fit T-Shirts ",
                    price: 22.3,
                    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    rating: {
                        rate: 4.1,
                        count: 259
                    }
                },
                {
                    id: 3,
                    title: "Mens Cotton Jacket",
                    price: 55.99,
                    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                    rating: {
                        rate: 4.7,
                        count: 500
                    }
                }
        ]
        }
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

            <table className="tablecss">
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Increment</th>
                    <th>Decrement</th>
                    <th>Image</th>
                    <th>category</th>
                    <th>Count</th>
                    <th>Rating</th>
                    
                </tr>


                {
                    this.state.products.map((val)=>(
                        <>

                        <tr key={val.id} className="tablescss">
                            <td >{val.id}</td>
                            <td >{val.title}</td>
                            <td >{val.price}</td>
                            <td >{val.description}</td>
                            <td >
                            <button onClick={()=>this.increment(val.id)}>+</button>
                            </td>
                            <td >
                            <button onClick={()=>this.decrement(val.id)}>-</button>
                            </td>
                            <td> <img src={val.image} style={{width:100,height:100}}></img></td>
                            <td >{val.category}</td>
                            <td >{val.rating.count}</td>
                            <td>{val.rating.rate}</td>
                           
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
export default TableProducts