
import { Component} from "react"



class ProductIncrementDec extends Component{

    constructor(){
        super();
        this.state={
            products:[
            
                {
                    "id": 1,
                    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "rating": {
                        "rate": 3.9,
                        "count": 120
                    }
                },
                {
                    "id": 2,
                    "title": "Mens Casual Premium Slim Fit T-Shirts ",
                    "price": 22.3,
                    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    "rating": {
                        "rate": 4.1,
                        "count": 259
                    }
                },
                {
                    "id": 3,
                    "title": "Mens Cotton Jacket",
                    "price": 55.99,
                    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                    "rating": {
                        "rate": 4.7,
                        "count": 500
                    }
                }
        ]
            
        }
    }

    sortFunction=()=>{

        let result=this.state.products.sort((a,b)=>a["price"]-b["price"])
        console.log(result)
        this.setState({
            products:result
        })
    }


    childToParent=(data)=>{

        alert("hello child method")
    }


    increment=(data)=>{

let result=this.state.products.map((value)=>{
    if(value.id===data.id){
        return {...value,price:value.price+100}
    }
    else{
        return value
    }
})
this.setState({
    products:result
})
    }
   

    decrement=(data)=>{

        let result=this.state.products.map((value)=>{
            if(value.id===data.id){
                return {...value,price:value.price-50}
            }
            else{
                return value
            }
        })
        this.setState({
            products:result
        })

    }
    render()
    {
        return(
<div>
    <button onClick={this.sortFunction}>click here for sorting</button>

    {
        this.state.products.map(val=>{
return(
    <div key={val.id}>

        <ListComponent data={val}  child={this.childToParent}  inc={this.increment} dec={this.decrement}/>
        </div>
)

        }
        )   
     }
     
     </div>
        )
    }
}
        
export default ProductIncrementDec


class ListComponent extends Component {
    render() {
      return (
        <div>
          <h1>{this.props.data.price}</h1>
          <button onClick={() => this.props.inc(this.props.data)}>+</button>
          <h1>{this.props.data.count}</h1>
          <button onClick={() => this.props.dec(this.props.data)}>-</button>
        </div>
      );
    }
  }
  