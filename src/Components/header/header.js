// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import { Link, useNavigate } from "react-router-dom"

import footer from "../footer/footer"

// function Header() {



//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
          
//           <Nav className="me-auto">
//             <Nav.Link href="#home" >Home</Nav.Link>
//             <Nav.Link href="#features">Profile</Nav.Link>
//             <Nav.Link href="#pricing">Settings</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }
// export default Header;



const Header=()=>{


  const LinkStyle={textDecoration:"none", margin:20,color:"white"}

 return(

  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link style={LinkStyle}>Home</Link>
      </li>
      <li className="nav-item">
      <Link  style={LinkStyle}  to={"/profile"}>Profile</Link>
     
       
      </li>
      <li className="nav-item">
       <Link style={LinkStyle} to={"/about"}>About</Link>
      </li>
      <li className="nav-item">
        <Link style={LinkStyle} to={"/settings"}>Settings</Link>
      </li>
    </ul>
  </div>

  
</nav>

 )
}
export default Header