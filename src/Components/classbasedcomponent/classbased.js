import { Component } from "react";



class ClassBasedExample extends Component{
constructor(){
    super();
    this.state={
        name:"swathi",
        salary:100000
    }
}
handleIncrement=()=>{
this.setState({

    salary:this.state.salary+1000
})
  
}
    render(){
        return(
            <div>
            <h1>{this.state.name} {this.state.salary}</h1>

            <button onClick={this.handleIncrement}>click here for increment</button>
            </div>
        )
    }
}
export default ClassBasedExample