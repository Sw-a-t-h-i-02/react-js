import { Component } from "react";

class CircleComponent extends  Component{
    constructor(){
        super();
        this.state={
           
            circle:[]
            
        }
    }

    circleIncrement=()=>{
        
        this.setState({
            circle:[...this.state.circle,false]
        },()=>{
            console.log("circle")
        })
        }
    
    render(){

        return(
            <>
           <button onClick={this.circleIncrement}>Click here to increment the circles</button>
           {
            this.state.circle.map((val)=>

            <div style={{width:200,height:200,borderRadius:"50%",backgroundColor:"green",border:"2px solid black"}}>{this.state.circle}</div>
               
                
            )}
        
            
            </>
        )
    }
}
export  default CircleComponent

