
import { Card } from "react-bootstrap"
import {CardGroup} from "react-bootstrap"
import HeaderTask from "../Components/headertask"

import "./card.css"


const Burger=()=>{
    return(
        <>
  <HeaderTask/>

  <h3>Burger</h3>
  <h5 style={{fontStyle:"italic",fontWeight:"lighter"}}>Satisfy your cravings with these fresh and flavoursome burgers.</h5>
  
<CardGroup>
      <Card style={{padding:10, margin:10 , border: "2px solid black" }} className='cards' >
        <Card.Img  variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bdbawz1bvboiwfkyzmk9" />
        <Card.Body>
          <Card.Title>Urban Cravings</Card.Title>
          <Card.Text>
           Burgers,Snacks,Beverages
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>3.8</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10 , border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ivujtnub9wqbnosfkedy" />
        <Card.Body>
          <Card.Title>McDonald's</Card.Title>
          <Card.Text>
            Burgers,Beverages,Desserts
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.2</h4>
        </Card.Body>
       
      </Card>

      <Card style={{padding:10, margin:10 , border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/06d53e6aba5f2b8d168dc90bd7b20b6c"/>
        <Card.Body>
          <Card.Title>Burgerlicious</Card.Title>
          <Card.Text>
           Burgers,Snacks
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>3.9</h4>
        </Card.Body>
       
      </Card>
      <Card style={{padding:10, margin:10 , border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2f3calcw5y453eg6dgv" />
        <Card.Body>
          <Card.Title>Louis Burger</Card.Title>
          <Card.Text>
          Burgers,American, Fast Food
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.0</h4>
        </Card.Body>
      </Card>
    </CardGroup>
        
        </>
    )
}
export default Burger