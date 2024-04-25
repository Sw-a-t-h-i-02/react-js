



import { Card } from "react-bootstrap"
import {CardGroup} from "react-bootstrap"
import HeaderTask from "../Components/headertask"
import './card.css';


const Pizza=()=>{
    return(
        <>
        <HeaderTask/>
       <h3>Pizza</h3>
       <h5 style={{fontStyle:"italic",fontWeight:"lighter"}}>Cheesilicious pizzas to make every day extraordinary.</h5>
        <CardGroup className="container">
      <Card  style={{padding:10, margin:10, border: "2px solid black"}}className='cards' >
        <Card.Img  variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tfbzcloqh0utu94hndca" />
        <Card.Body>
          <Card.Title>A'La Liberty</Card.Title>
          <Card.Text>
     North Indian,Biryani,Chinese
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.7</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rtwyskaifya6ygm8qhpr" />
        <Card.Body>
          <Card.Title>Masqaite Ice Cream</Card.Title>
          <Card.Text>
           Oria,Desserts,Italian-American
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.2</h4>
        </Card.Body>
       
      </Card>

      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2f2a8e30d98db46c6507105f68151cf9" />
        <Card.Body>
          <Card.Title>Onesta</Card.Title>
          <Card.Text>
          Italian,Desserts,Pizzas
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>3.9</h4>
        </Card.Body>
       
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/65e853e938f0daec98a24191b56eadd7" />
        <Card.Body>
          <Card.Title>Gourmet Pizzas By Sliced</Card.Title>
          <Card.Text>
            Pizzas,Italian,Desserts
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
      </Card>
    </CardGroup>
        </>
    )
}
export default Pizza