
import { Component } from "react";

class YoutubeButton extends Component{

constructor(){
    super();
    this.state={
        isSubscribed:false
    }
}
HandleSubscribe=()=>{
    this.setState({
        isSubscribed: !this.state.isSubscribed

})   
 }
    render(){
        return(
           
           
            <div>
                <h1>Hello Guys</h1>
                <button onClick={this.HandleSubscribe}>{this.state.isSubscribed?"un-subscribe":"please-subscribe"}</button>
                {
                    this.state.isSubscribed?<h2>welcome</h2>:null    
                } 
                </div>    
        )

    }
}
export default  YoutubeButton;