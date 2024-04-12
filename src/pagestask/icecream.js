




import { Card } from "react-bootstrap"
import {CardGroup} from "react-bootstrap"
import HeaderTask from "../Components/headertask"
import './card.css';

const IceCream=()=>{
    return(
        <>

        <HeaderTask/>
<h3>Ice Cream</h3>
<h5 style={{fontStyle:"italic",fontWeight:"lighter"}}>Flavourful ice creams that will make you smile a bit wider.</h5>
<CardGroup className="container">
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img  variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ekw15t5mwmi4ag87fb49" />
        <Card.Body>
          <Card.Title>Ohri's Eatmor</Card.Title>
          <Card.Text>
        North Indian , chaat , Pizza's
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.0</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1f6864549ccfac88a507882cb53e7d71" height={350} />
        <Card.Body>
          <Card.Title>Famous Ice Cream</Card.Title>
          <Card.Text>
            Ice creams, Abids
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.2</h4>
        </Card.Body>
       
      </Card>

      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e9fe9e59fea2e0e1175032eff8bd617c" />
        <Card.Body>
          <Card.Title>House of Pops</Card.Title>
          <Card.Text>
            Ice Cream
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
       
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/446d21ee42c51e1bccc4973d659cf815" />
        <Card.Body>
          <Card.Title>Cream Stone Ice Cream</Card.Title>
          <Card.Text>
         Beverages , Ice Creams , Desserts
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
      </Card>
    </CardGroup>
        </>
    )
}
export default IceCream