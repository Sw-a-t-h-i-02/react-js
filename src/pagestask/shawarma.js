import HeaderTask from "../Components/headertask"
import { Card } from "react-bootstrap"
import CardGroup from 'react-bootstrap/CardGroup';
import './card.css';






const Shawarma=()=>{


    return(

        <>

        <HeaderTask/>

<h1>Shawarma</h1>
<h5 style={{fontStyle:"italic",fontWeight:"lighter"}}>Order in deliciously juicy and grilled Shawarmas to curb your cravings</h5>
<CardGroup className="container">
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img  variant="top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/17739223a800943fec4978ef1d3e60b2"} />
        <Card.Body>
          <Card.Title>The Exotic Shawarma</Card.Title>
          <Card.Text>
            Arabian,Momos,Salads,Fast food
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.1</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qze1aj1nfbgrzzmo8lsr"} />
        <Card.Body>
          <Card.Title>Mohemmedia Shawarma</Card.Title>
          <Card.Text>
           Arabian,Snacks,Kebabs,Haleem
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>3.8</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"} } className='cards'>
        <Card.Img variant="top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/s8n0sr3tii8gv2u97hxt"} />
        <Card.Body>
          <Card.Title>Chaska Shawarma</Card.Title>
          <Card.Text>
            Rolls and Wraps
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>3.8</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/u34avlzmyt8lony8ayuu"} />
        <Card.Body>
          <Card.Title>Turkish Central</Card.Title>
          <Card.Text>
         Turkish,Arabian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
      </Card>
    </CardGroup>
</>
    )
}
export default Shawarma