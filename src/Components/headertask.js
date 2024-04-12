
import { Link } from "react-router-dom"

const HeaderTask=()=>{
    const ImageStyle={width:80,height:50}

const LinkStyles={textDecoration:"none",margin:20,color:"black"}
    return(
        <>
<nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)">
      <img   style={ImageStyle} src={"https://th.bing.com/th/id/OIP.p8g02dm7amDVp6mam-HOvAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"}/>

    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mynavbar"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link  style={LinkStyles} to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
         <Link  style={LinkStyles}  to={"/biryani"}>Biryani</Link>
        </li>
        <li className="nav-item">
          <Link  style={LinkStyles} to={"/shawarma"}>Shawarma</Link>
        </li>
        <li className="nav-item">
          <Link  style={LinkStyles} to={"/southindian"}>South Indian</Link>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search" />
        <button className="btn btn-primary" type="button">
          Search
        </button>
      </form> */}
    </div>
    </div>
</nav>
</>
    )
}
export default HeaderTask

