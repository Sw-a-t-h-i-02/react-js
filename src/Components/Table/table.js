


import React, { Component } from "react";
import "./table.css";

class TableComponent extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id:1,name:"swathi",designation:"reactjs developer"},
        { id:2,name:"krishna",designation:"front end developer"},
        { id:3,name:"varsha",designation:"react developer"},
        { id:4,name:"ram",designation:"full stack developer"},
        { id:5,name:"ravi",designation:"sql developer"},
        { id:6,name:"varshu",designation:"sql developer"},
        { id:7,name:"bharath",designation:"reactjs developer"},
        { id:8,name:"bharathkumar",designation:"full stack developer"},
        { id:9,name:"krishnaveni",designation:"front end developer"},
      ],
      filteredProducts:[],
      filterDesignation:"",
    };
  }

  handleTable=(designation)=>{
    const filteredProducts=this.state.products.filter(
      (product)=>product.designation===designation
    );

    this.setState({
      filteredProducts,
      filterDesignation:designation,
    });
  };

  render(){
    const productsToRender=
      this.state.filteredProducts.length>0
        ? this.state.filteredProducts
        : this.state.products;

    return(
      <div>
        <table className={"table"}>
          <thead>
            <tr>
              <th className={"cell"}>Id</th>
              <th className={"cell"}>Name</th>
              <th className={"cell"}>Designation</th>
            </tr>
          </thead>
          <tbody>
            {productsToRender.map((product)=>(
              <tr key={product.id}>
                <td className={"cell"}>{product.id}</td>
                <td className={"cell"}>{product.name}</td>
                <td className={"cell"}>{product.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={()=>this.handleTable("react developer")}>
          Filter by React Developer
        </button>
        <br></br>
        <button onClick={()=>this.handleTable("front end developer")}>
          Filter by Front End Developer
        </button>
        <br></br>
        <button onClick={()=>this.handleTable("reactjs developer")}>
          Filter by Reactjs Developer
        </button>
        <br></br>
        <button onClick={()=>this.handleTable("sql developer")}>
          Filter by sql Developer
        </button>
        <br></br>
        <button onClick={()=>this.handleTable("full stack developer")}>
          Filter by full stack Developer
        </button>
        <br></br>
        <button onClick={()=>this.handleTable("front end developer")}>
          Filter by frontend Developer
        </button>
        <button onClick={()=>this.handleTable("")}>
        show all designations
        </button>
      </div>
    );
  }
}

export default TableComponent;



