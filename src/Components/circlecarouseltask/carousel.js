// import { Component } from "react";

// import Carousel from 'react-bootstrap/Carousel';

// class CarouselComponent extends Component{
//     constructor(){
//         super()
//         this.state={
//             image:[]
//         }
//     }
//     imageHandler=()=>{

//         this.setState({
//             image:[...this.state.image,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9M4k-ekYxhJ3NXY9Zl6I0spXEONxqNFyXKg&"]
//         },()=>{
//             console.log("image")
//         }
//         )
//     }
//     render(){
//         return(

//             // <Carousel  data-bs-theme onSelect={this.imageHandler}>


//             //     {this.state.image.map((value)=>(


//             //   <Carousel.Item>

//             //  <img
//             //  src={value}
//             //  />

            
//             // </Carousel.Item>
//             //  ))}

//             // </Carousel>

//             <Carousel data-bs-theme="dark"   onSelect={this.imageHandler}>


//                 {
//                     this.state.image.map((val)=>(
//                         <Carousel.Item>
//                         <img
//                           className="d-block w-100"
//                           src={val}
//                           alt="First slide"
//                         />
//                         <Carousel.Caption>
//                           <h5>First slide label</h5>
//                           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                         </Carousel.Caption>
//                       </Carousel.Item>

//                     )) 
//                 }
//       </Carousel>
//         )
//             }
//         }
           
// export default CarouselComponent


import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

class  CarouselComponent extends Component{
   constructor(){
    super()
    this.state={
        image:[]
    }
   }

   imageHandler=()=>{
    this.setState({
      image:[...this.state.image,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-0rqypPbHjWLR5lT3v6l78L8sKy0V_xLyQ&usqp=CAU"]
    },()=>{
      console.log("image")
    })
   }

    render(){
        return(
            <Carousel data-bs-theme="dark"  onSelect={this.imageHandler} style={{width:"50",height:"60"}} >
               
              {this.state.image.map((val)=>(
               
                <Carousel.Item>

              <img
                className="d-block w-100"
                src={val}
                alt="First slide"
                style={{width:"50%",height:"60%"}}
              />
              
               </Carousel.Item>
               
            ))}
             
         </Carousel>
        )

    }
}
export default CarouselComponent;