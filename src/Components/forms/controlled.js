import { useState } from "react"




const Controlled=()=>{

    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[cpassword,setcpassword]=useState("")
    const[phonenumber,setphn]=useState("")
    const[radio,setradio]=useState("")
    const[Passerror,setpassError]=useState(null)
    const[CpassError,setCpassError]=useState(null)

const handleEmail=(event)=>{

  setemail(event.target.value)
}

const handlePss=(event)=>{
let password=event.target.value
  setpassword()

  if(password.length<=8){

    showError()
  }
  else{

    setpassError(null)
  }
}
const handleCpss=(event)=>{
let cpass=event.target.value
  setcpassword(cpass)
  if(password===cpassword){
   setcpassword(null)
  }
  else{
    showcError()
  }
}
const handlePhn=(event)=>{

  setphn(event.target.value)
}
const handleRadio=(event)=>{
  setradio(event.target.value)
}
const showError=()=>{
  setpassError("enter atleast 8 chars ")
}
const showcError=()=>{
  setCpassError("password not matched")
}
    return(   
<form>
  <div className="mb-3 mt-3">
    <label >Email:</label>
    <input type="email" className="form-control" id="email"  name="email"   value={email}  onChange={handleEmail}/>
  </div>
  <div className="mb-3">
    <label >Password:</label>
    <input type="password" className="form-control" id="pwd"  name="pswd"   value={password} onChange={handlePss}/>
  {
    Passerror
    &&
    <span>{Passerror}</span>
  }
  </div>
  <div className="mb-3 mt-3">
    <label>Confirm password:</label>
    <input type="password" className="form-control" id="cpass"  name="cpass"   value={cpassword}  onChange={handleCpss} />
    {
CpassError
&&
<span>{CpassError}</span> 
    }
  </div>
  <div className="mb-3 mt-3">
    <label >PhoneNumber:</label>
    <input type="tel" className="form-control" id="phonenumber"  name="phonenumber"   value={phonenumber}   onChange={handlePhn}/>
  </div>
  <div className="mb-3 mt-3">
    <label >Gender</label>
    <h5><input type="radio" className="form-control" id="gender"  name="male"   value={radio}  onChange={handleRadio}/>Male</h5>
    <h5><input type="radio" className="form-control" id="gender"  name="female"   value={radio}  onChange={handleRadio}/>female</h5>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    )
}
export default Controlled