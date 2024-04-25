import Footer from "../Components/footer/footer"
import HeaderTask from "../Components/headertask"
import { Link } from "react-router-dom"
import "./card.css"





const Home=()=>{


    const ImgStyle={width:190,height:190}
    return(

<>
<HeaderTask/>

<h1>What's on Your Mind?</h1>

<Link to={"/biryani"}><img style={ImgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" } className="cards"/></Link>

<Link to={"/southindian"}><img  style={ImgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png"} className="cards"/></Link>

<Link to={"/pizza"}><img  style={ImgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"} className="cards" /></Link>

<Link to={"/shawarma"}><img  style={ImgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png"}  className="cards"/></Link>


<Link to={"/chinese"}><img  style={ImgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"}  className="cards"/></Link>

<Link to={"/dosa"}><img  style={ImgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png"} className="cards"/></Link>

<Link to={"/burger"}><img  style={ImgStyle}  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"}  className="cards"/></Link>

<Link to={"/chole"}><img  style={ImgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png"} className="cards"/></Link>
 
<Link to={"/idli"}><img  style={ImgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png"} className="cards"/></Link>


<Link to={"/paratha"}><img  style={ImgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png"}  className="cards"/></Link>
 

 <Link to={"/pavbaji"}><img style={ImgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png"}  className="cards"/></Link>

 <Link to={"/icecream"}><img style={ImgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png"} className="cards"/></Link>


 <Link to={"/salad"}><img style={ImgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png"}  className="cards"/></Link>


  <Link to={"/vada"}><img style={ImgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png"}  className="cards"/></Link>
  

<div>
<Footer/>
</div>

</>
     

    )
}
export default Home