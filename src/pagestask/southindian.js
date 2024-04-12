import HeaderTask from "../Components/headertask"
import { Card } from "react-bootstrap"
import {CardGroup }from "react-bootstrap"
import './card.css';

const SouthIndian=()=>{


    return(
        <>
        <HeaderTask/>
        
        <h1>South Indian</h1>
        <h5 style={{fontStyle:"italic",fontWeight:"lighter"}}>Explore hot & spicy dishes that are a specialty of South India</h5>
        <CardGroup>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img  variant="top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nd1awlv2coqtb9pjk5h8"}/>
        <Card.Body>
          <Card.Title>Palnati Military Canteen</Card.Title>
          <Card.Text>
            Andhra,South Indian,Biryani
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.1</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/334d9f867182ccf7ce06e684ba171255"} />
        <Card.Body>
          <Card.Title>Simply South</Card.Title>
          <Card.Text>
        South Indian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>3.9</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ffxkeop41krploicclcu"} />
        <Card.Body>
          <Card.Title>The Malabar Story</Card.Title>
          <Card.Text>
          Kerala,Biryani,South Indian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.0</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dd20a5ea00fd4f363e792b23c24f7813"} />
        <Card.Body>
          <Card.Title>Terrassen Cafe</Card.Title>
          <Card.Text>
       North Indian,Biryani
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.5</h4>
        </Card.Body>
      </Card>
    </CardGroup>
        </>


    )
}
export default SouthIndian