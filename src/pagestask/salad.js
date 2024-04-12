


import { Card } from "react-bootstrap"
import {CardGroup} from "react-bootstrap"
import HeaderTask from "../Components/headertask"
import './card.css';



const Salad=()=>{
    return(
        <>

        <HeaderTask/>
<h3>Salads</h3>
<h5 style={{fontStyle:"italic",fontWeight:"lighter"}}>Give a healthy twist to your diet and order these delicious ranges of salads.</h5>
<CardGroup className="container">
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards' >
        <Card.Img  variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6442d66f99857e232b0491ebf780a27b" height={290}/>
        <Card.Body>
          <Card.Title>Pista House Bakery</Card.Title>
          <Card.Text>
           Bakery , Pizzas, Haleem
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.0</h4>
        </Card.Body>
      </Card>
      <Card  style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d01c2cdc22fcc0a24ec1d6958e11afb4"  height={290}/>
        <Card.Body>
          <Card.Title>Fruit Full</Card.Title>
          <Card.Text>
           Healthy food , Salads , Juices.
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.2</h4>
        </Card.Body>
       
      </Card>

      <Card  style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f08f726fda5c0a3c55c7d1c8d6dbb306" height={290} />
        <Card.Body>
          <Card.Title>FruitPhall</Card.Title>
          <Card.Text>
           Healthy Food
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
       
      </Card>
      <Card  style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c566357163f6f133009831f4819a7eda"  height={290}/>
        <Card.Body>
          <Card.Title>VNR Fresh Juice Center</Card.Title>
          <Card.Text>
      Beverages , Juices , Desserts
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
      </Card>
    </CardGroup>
        
        </>
    )
}
export default Salad