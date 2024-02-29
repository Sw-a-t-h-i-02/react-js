import { Component } from "react";
import axios from "axios"
import BasicExample from "./spinner";
import BorderExample from "./spinner";






class CompDidMount extends Component{

    constructor(){
        super();
        this.state={
products:[]

        }
    }


    componentDidMount(){

        axios.get("https://fakestoreapi.com/products")
        .then(resp=>{
            if(resp.status===200){
            this.setState({

                products:resp.data
            })
        }
        else{
            alert("something went wrong")
        }
        })

        .catch(err=>{console.log(err)})
    }


    render(){
        return(

            <>
            
             <h1>products List</h1>
             {
                this.state.products.length>0?
                this.state.products.map(val=><h4 key={val.id}>{val.title}</h4>):
                <h3><BorderExample/></h3>
             }
            
            </>
        )
    }
}
export default CompDidMount