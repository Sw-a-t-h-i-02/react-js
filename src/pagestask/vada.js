




import { Card } from "react-bootstrap"
import {CardGroup} from "react-bootstrap"
import HeaderTask from "../Components/headertask"
import './card.css';

const Vada=()=>{
    return(
        <>

        <HeaderTask/>
        <h3>Vada</h3>
        <h5 style={{fontStyle:"italic",fontWeight:"lighter"}}>Snack on these crispy & crunchy Vadas that are also comforting!</h5>
        <CardGroup  className="container">
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards' >
        <Card.Img  variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ooj67yysadcpmd97hqej" height={310} />
        <Card.Body>
          <Card.Title>Kamath Hotel</Card.Title>
          <Card.Text>
            South Indian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.0</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eibmtnvylmvjcedkdotp" height={310} />
        <Card.Body>
          <Card.Title>Babai Express</Card.Title>
          <Card.Text>
            South Indian , Tiffens , Telangana
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.2</h4>
        </Card.Body> 
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/z352b1hoytbkyrifly6i" height={310} />
        <Card.Body>
          <Card.Title>Amay Tiffin Corner</Card.Title>
          <Card.Text>
          South Indian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
       
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nwqw3cmvaipof76tbpow" height={310} />
        <Card.Body>
          <Card.Title>Nrs Mamatha Darshini</Card.Title>
          <Card.Text>
           South Indian  , Tiffins
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
      </Card>
    </CardGroup>
        </>
    )
}
export default Vada