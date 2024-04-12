



import { Card } from "react-bootstrap"
import {CardGroup} from "react-bootstrap"
import HeaderTask from "../Components/headertask"
import './card.css';

const Paratha=()=>{
    return(
        <>
<HeaderTask/>
<h3>Paratha</h3>
<h5 style={{fontStyle:"italic",fontWeight:"lighter"}}>Explore a wide variety of Parathas to satisfy your cravings.</h5>

<CardGroup className="container">
      <Card  style={{padding:10, margin:10, border: "2px solid black" }} className='cards'>
        <Card.Img  variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/41b04ccf2d347635176f32b0b8f349c7"  height={300}/>
        <Card.Body>
          <Card.Title>Jai Durga Maa Apna Taste</Card.Title>
          <Card.Text>
          North Indian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.0</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ugoior9cq8yhppuugwbh" height={300} />
        <Card.Body>
          <Card.Title>AI Akbar Fast Food</Card.Title>
          <Card.Text>
          Chinese
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.2</h4>
        </Card.Body>
       
      </Card>

      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/656208a2a9eda30fdcf174a9a90b7544" height={300} />
        <Card.Body>
          <Card.Title>Hotel Ahar Point</Card.Title>
          <Card.Text>
            North Indian, Chinese, Snacks
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
       
      </Card>
      <Card style={{padding:10, margin:10, border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f8dgp5oluzq5ybqmyuwh"height={300} />
        <Card.Body>
          <Card.Title>Raj Thali</Card.Title>
          <Card.Text>
          Gujarathi, Rajasthani
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
      </Card>
    </CardGroup>
        
        </>
    )
}
export default Paratha