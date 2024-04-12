import React, { useState } from "react"

// const Employee =()=>{


//    const[employee,setemployee]= useState([{
// employID:101,
// employeeName:"aaaa",
// employeeDesignation:"react-developer"
//     },
    
//     {
//         employID:102,
// employeeName:"bbb",
// employeeDesignation:"front-end developer"


//     },
    
//     {employID:103,
//         employeeName:"ccc",
//         employeeDesignation:"oracle developer"}
//     ])



//      const addEmployee=()=>{


//         let newState=[...employee,{employID:104,employeeName:"ddd",employeeDesignation:"js developer"}]
//         setemployee(newState)
//      }


//      const deleteEmployee=(index)=>{


//         let newdelete=employee.filter((employee,ind)=>{

//             return ind!==index
//         })
//         setemployee(newdelete)
//      }
//     return(
// <>
//         <ul>
//              <button onClick={addEmployee}>clik here to add Employees</button>

       
        
//         {
//              employee.map((eachElement,index)=>(
             
//              <React.Fragment key={index}>
//              <li>{eachElement.employID}</li>
//              <li>{eachElement.employeeName}</li>
//              <li>{eachElement.employeeDesignation}</li>
//              <button onClick={()=>deleteEmployee(index)}>click to delete the employee</button>
//              </React.Fragment>

            
//               ) )
//         }
//         </ul>
//         </>  
//     )
//     }
// export default Employee


const AgeEaxmaple=()=>{

    const[Age,setAge]=useState(4)
        

    const handleAge=()=>{
      setAge(Age+2)
    }
    return(
        <>

        <h1>
            {Age}
        </h1>
        <button onClick={handleAge}>Click to change Age</button>
        </>
    )
}
export default AgeEaxmaple