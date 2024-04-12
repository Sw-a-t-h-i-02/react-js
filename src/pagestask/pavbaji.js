



import { Card } from "react-bootstrap"
import {CardGroup} from "react-bootstrap"
import HeaderTask from "../Components/headertask"
import './card.css';






const PavBaji=()=>{
    return(
        <>

        <HeaderTask/>
        <h3>Pav Bhaji</h3>
        <h5 style={{fontStyle:"italic",fontWeight:"lighter"}}>Flavourful Pav Bhaji that will remind you of the streets of Mumbai in every bite.
</h5>
        <CardGroup className="container">
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards' >
        <Card.Img  variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/154b24887a2e95cdba3add01589147a4" height={330} />
        <Card.Body>
          <Card.Title>New Minerva Sweets</Card.Title>
          <Card.Text>
        sweets,chats,deserts
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.0</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b06615a79d1cd6bbec24e55f17e4381d" height={330} />
        <Card.Body>
          <Card.Title> 
            Dadu's
                  </Card.Title>
          <Card.Text>
           SWeets, desserts, Chats
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.2</h4>
        </Card.Body>
       
      </Card>

      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fqsw8pde0ludpmrtnv1p"  height={330}/>
        <Card.Body>
          <Card.Title>Agra Sweets Banjara</Card.Title>
          <Card.Text>
            Sweets, deserts, Chats
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
       
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sqvucx8fvkwkeeksivvd"  height={330}/>
        <Card.Body>
          <Card.Title>Delight Delicious</Card.Title>
          <Card.Text>
           Chinese , Italian , Deserts
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
      </Card>
    </CardGroup>
        
        </>
    )
}
export default PavBaji