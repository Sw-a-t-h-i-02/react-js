


import { Card } from "react-bootstrap"
import {CardGroup} from "react-bootstrap"
import HeaderTask from "../Components/headertask"
import './card.css';


const Dosa=()=>{
    return(
        <>

        <HeaderTask/>
        <h3>Dosa</h3>
        <h5 style={{fontStyle:"italic",fontWeight:"lighter"}}>Satisfy your cravings for South Indian breakfast with these crispy & buttery Dosas.</h5>

<CardGroup className="container">
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards' >
        <Card.Img  variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0da91d0298d8c3c844bd935f30ed2fff" />
        <Card.Body>
          <Card.Title>Mehfil</Card.Title>
          <Card.Text>
            Biryani,north indian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.0</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cr0emgt8ovlki2drvqtc" />
        <Card.Body>
          <Card.Title>Meharaab Restaurant</Card.Title>
          <Card.Text>
            Indian,Chinese,Mughlai
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.2</h4>
        </Card.Body>
       
      </Card>

      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f9ab0fdc7d638cf5f4f8b1e97da64ce4" />
        <Card.Body>
          <Card.Title>Pista House  Restaurant</Card.Title>
          <Card.Text>
            Biryani,Chinese,Attapur
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
       
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fxorqmhxvcuvxhhnxf7h" />
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
export default Dosa