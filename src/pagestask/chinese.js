


import { Card } from "react-bootstrap"
import {CardGroup} from "react-bootstrap"
import HeaderTask from "../Components/headertask"
import './card.css';

const Chinese=()=>{
    return(
        <>
        <HeaderTask/>
        <h3>Chinese</h3>
        <h5 style={{fontStyle:"italic",fontWeight:"lighter"}}>Transport your taste buds to the heart of Chinese cuisine with these scrumptious dishes</h5>
        < CardGroup>
      <Card style={{padding:20, margin:20 , border: "2px solid black"}} className='cards' >
        <Card.Img  variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f46703cc6620ef3737e5b8608a7ce42e" />
        <Card.Body >
          <Card.Title>Mehfil</Card.Title>
          <Card.Text>
            Biryani,north indian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.0</h4>
        </Card.Body>
      </Card >
      <Card style={{padding:20, margin:20 , border: "2px solid black"}}  className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wjmenjwp0j3yqwb9mbm2"/>
        <Card.Body>
          <Card.Title>Meharaab Restaurant</Card.Title>
          <Card.Text>
            Indian,Chinese,Mughlai
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.2</h4>
        </Card.Body>
       
      </Card>

      <Card style={{padding:20, margin:20 , border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o38j7oqcrkheexkykq1t" />
        <Card.Body>
          <Card.Title>Pista House  Restaurant</Card.Title>
          <Card.Text>
            Biryani,Chinese,Attapur
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
       
      </Card>
      <Card style={{padding:10, margin:10 , border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/danxisbczrhxuurhmlg7" />
        <Card.Body>
          <Card.Title>Hotel Shadab</Card.Title>
          <Card.Text>
           Biryani,Chinese,Charminar
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
      </Card>
    </CardGroup>
        </>
    )
}
export default Chinese