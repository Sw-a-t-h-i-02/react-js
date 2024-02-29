import { useState } from "react"




const Controlled=()=>{


    const[username,setusername]=useState(0)
    const[password,setpassword]=useState(0)



const handleSubmit=()=>{



}
    return(

       
<form  onSubmit={}>
  <div className="mb-3 mt-3">
    <label for="email" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"   value={username} />
  </div>
  <div className="mb-3">
    <label for="pwd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"   value={password}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    )
}
export default Controlled