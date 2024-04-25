import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import HeaderTask from '../Components/headertask';
import './card.css';



function Biryani() {    
  return (
    <>
   <HeaderTask/>
    <h3>Biryani</h3>
    <h5 style={{fontStyle:"italic",fontWeight:"lighter"}}>Taste these delectable classics, delectable biryanis to make your day.</h5>

    <CardGroup className="container" >
      <Card  style={{padding:10, margin:10,border: "2px solid black"}}  className='cards'>
        <Card.Img  variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQAp9Ifzqxsohi5ggWveyyTkmaXX_h2K99fg&usqp=CAU" height={310}/>
        <Card.Body>
          <Card.Title>Mehfil</Card.Title>
          <Card.Text>
            Biryani,north indian
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.0</h4>
        </Card.Body>
      </Card>
     
      <Card style={{padding:10, margin:10 ,border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqoQTtCnWLOcPHZK5WbtgX-Cilfwcf7aEng&usqp=CAU" height={310} />
        <Card.Body>
          <Card.Title>Meharaab Restaurant</Card.Title>
          <Card.Text>
            Indian,Chinese,Mughlai
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.2</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10 , border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1bfdbc79d4fdc71bb133c14d8213d594" height={310} />
        <Card.Body>
          <Card.Title>Pista House  Restaurant</Card.Title>
          <Card.Text>
            Biryani,Chinese,Attapur
          </Card.Text>
          <h4><img src={"https://cdn-icons-png.flaticon.com/128/616/616489.png"} width={30} height={40}/>4.3</h4>
        </Card.Body>
      </Card>
      <Card style={{padding:10, margin:10 , border: "2px solid black"}} className='cards'>
        <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/w0ezorbdnzvq2yapqewm" height={310} />
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
  );
}
export default Biryani



