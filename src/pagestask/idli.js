


import { Card } from "react-bootstrap"
import {CardGroup} from "react-bootstrap"
import HeaderTask from "../Components/headertask"
import './card.css';




const Idli=()=>{
    return(
        <>
        <HeaderTask/>
        <h3>Idli</h3>
        <h5 style={{fontStyle:"italic",fontWeight:"lighter"}} >Deliciously soft and healthy Idlis for an ideal breakfast.</h5>
        <CardGroup className="container">
      <Card  style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img  variant="top" src="https://th.bing.com/th?id=OIP.1a2kD1EYeAEDz-VdqniU6gHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
        <Card.Body>
          <Card.Title>Blue Fox</Card.Title>
          <Card.Text>
           Biryani,Chinese, South Indian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>3.6</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://th.bing.com/th?id=OIP.n8xkxVRAL96rTXxlEQ8uMQHaEv&w=312&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" height={210} />
        <Card.Body>
          <Card.Title>Swaad of South</Card.Title>
          <Card.Text>
            Chinese, South Indian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.2</h4>
        </Card.Body>
       
      </Card>

      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://th.bing.com/th?id=OIP.UbqNb4epkDjwMYPFLLcTWAHaFi&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
        <Card.Body>
          <Card.Title>Naani's Pure Veg</Card.Title>
          <Card.Text>
           Beverages, South Indian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.1</h4>
        </Card.Body>
       
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://th.bing.com/th?id=OIP.JqR-Z7cf_ZsW9okAotb8_wHaE8&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" height={210} />
        <Card.Body>
          <Card.Title>Dwaraka Restaurant</Card.Title>
          <Card.Text>
          North Inidan , Chinese ,  South Indian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>3.9</h4>
        </Card.Body>
      </Card>
    </CardGroup>
        </>
    )
}
export default Idli