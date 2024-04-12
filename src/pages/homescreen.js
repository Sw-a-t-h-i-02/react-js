// import { useEffect, useState } from "react"
// import Header from "../Components/header/header"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Spinner } from "react-bootstrap";
// const  HomeScreen=()=>{
//     const[data,setData]=useState([])
// useEffect(()=>{
//     axios.get("https://fakestoreapi.com/products").then(resp=>{
//         if(resp.status===200){
//             setData(resp.data)
//         }
//     }).catch(err=>console.log(err))
// },[])
//     return(
//     <>
// <Header/>
// {
//     data.length>0
//     ?
//     data.map((eachObject)=>{
//         return(
//             <>
//         <CustomCard data={eachObject}/>
//             </>
//         )
//     })
//     :
//     <Spinner/>
// }
// </>
//     )
// }
// export default HomeScreen


// function CustomCard(props) {
//     const {data:{image,category,price,description,title,id}}=props
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={image} />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>
//          {description}
//         </Card.Text>
//        <button>
//         <Link  to={`/${category}/${id}`}>Navigate</Link>
//        </button>
//       </Card.Body>
//     </Card>
//   );
// }


import React, { useEffect, useState } from "react";
import Header from "../Components/header/header";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./hstable.css";

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((resp) => {
        if (resp.status === 200) {
          setData(resp.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />

      <table className="table-css">
        {/* <thead> */}
          <tr className="table-css">
            <th className="table-css">ID</th>
            <th className="table-css">Title</th>
            <th className="table-css">Price</th>
            <th className="table-css">Description</th>
            <th className="table-css">Image</th>
            <th className="table-css">Category</th>
            <th className="table-css">Navigate</th>
          </tr>
        {/* </thead> */}
        <tbody>
          {data.length > 0 ? (
            data.map((product) => (
              <tr key={product.id} className="table-css">
                <td className="table-css">{product.id}</td>
                <td className="table-css">{product.title}</td>
                <td className="table-css">{product.price}</td>
                <td className="table-css">{product.description}</td>
                <td className="table-css">
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: 100, height: 100 }}
                  />
                </td>
                <td className="table-css">{product.category}</td>
                <td className="table-css">
                  <button>
                    <Link to={`/${product.category}/${product.id}`}>
                      Navigate
                    </Link>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">
                <Spinner/>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default HomeScreen;


