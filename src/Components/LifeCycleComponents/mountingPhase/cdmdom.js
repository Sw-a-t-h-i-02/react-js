import { Component } from "react";

class DOMManupulation extends Component{

state={


    counter:0,
    favouriteColor:"red"
}


incrementHandler=()=>{
    this.setState({
        counter:this.state.counter+10
    })
}


componentDidMount(){
  document.title=this.state.counter
}

componentDidUpdate(){
    document.title=this.state.counter
}

static getDerivedStateFromProps(props,state){
return{favouriteColor: props.favColor}
}


    render(){

        return(


            <>
            <h1>Dom manupulation</h1>
            <h3>{this.state.counter}</h3>
            <h4>{this.state.favouriteColor}</h4>
            <button onClick={this.incrementHandler}>click here for increment</button>
            
            </>
        )
    }
}
export default DOMManupulation

