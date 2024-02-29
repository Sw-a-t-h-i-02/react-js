import { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";





class CardAxios extends Component{

    constructor(){
        super();
        this.state={
            list:[]
        }
    }


    
    componentDidMount(){


        axios.get("https://fakestoreapi.com/products").then((resp)=>{

        this.setState({


            list:resp.data
        })
        }).catch((err)=>console.log(err))
    }
    render() {
        return (
            <>
                {this.state.list.map((val) => (
                    <div key={val.id}>
                        <Card>
                            <ul>
                                <li>{val.id}</li>
                                <li>{val.title}</li>
                                <li>{val.description}</li>
                                <li>{val.price}</li>
                                <li><img src={val.image} alt={val.title} height={100} width={100}/></li>
                            </ul>
                        </Card>
                    </div>
                ))}
            </>
        );
    }
}
export default CardAxios