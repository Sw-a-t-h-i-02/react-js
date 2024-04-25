


import { Card } from "react-bootstrap"
import {CardGroup} from "react-bootstrap"
import HeaderTask from "../Components/headertask"

import './card.css';



const Chole=()=>{
    return(
        <>
<HeaderTask/>

<h3>Chole Bhature</h3>
  <h5 style={{fontStyle:"italic",fontWeight:"lighter"}}>Satisfy your cravings with these fluffy & flavoursome breads paired with Chole.</h5>
<CardGroup className="container">
      <Card style={{padding:10, margin:10 , border: "2px solid black"}} className='cards'>
        <Card.Img  variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rlw8rnzppefwu9tzkdxh" />
        <Card.Body>
          <Card.Title>Mehfil</Card.Title>
          <Card.Text>
            Biryani,north indian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.0</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10 , border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ffjazhffz2vnpxgo8jsg" />
        <Card.Body>
          <Card.Title>Meharaab Restaurant</Card.Title>
          <Card.Text>
            Indian,Chinese,Mughlai
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.2</h4>
        </Card.Body>
       
      </Card>

      <Card style={{padding:10, margin:10 , border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/m1dwgm96tnr6wuhcicn6" />
        <Card.Body>
          <Card.Title>Pista House  Restaurant</Card.Title>
          <Card.Text>
            Biryani,Chinese,Attapur
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
       
      </Card>
      <Card style={{padding:20, margin:20 , border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.P13hIX9w9Apt04zskDD69QHaFb?w=228&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        <Card.Body>
          <Card.Title>Hotel Shadab</Card.Title>
          <Card.Text>
           Biryani,Chinese,Charminar
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={60}/>4.3</h4>
        </Card.Body>
      </Card>
    </CardGroup>
        
        </>
    )
}
export default Chole