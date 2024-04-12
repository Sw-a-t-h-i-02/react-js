import { useState } from "react"




const ControlledClass=()=>{
    const[username,setusername]=useState("")
    const[password,setpassword]=useState("")
    const [usernameError,setusernameError]=useState(null)



    const handleSubmit=(event)=>{
        event.preventDefault()


let usernameInput=event.target.value
        setusername(usernameInput)

        if(usernameInput.length>5){
   showError()
        }
        else{
            setusernameError(null)
        }
     
    }

    const showError=()=>{

        setusernameError("enter less than 5 characters")
    }

    const handleSubmitPass=(event)=>{

        let PasswordInput=event.target.value
        setpassword(PasswordInput)
    }


    return(
        <>

<form action="/action_page.php">
  <div className="mb-3 mt-3">
    <label >Username:</label>
    <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" value={username} onChange={handleSubmit} style={{display:"block", border: usernameError? "2px solid red": "0px"}}/>

    {
        usernameError
        &&
        <span style={{color:"red"}}>{usernameError}</span>
    }
  </div>
  <div className="mb-3">
    <label >Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={password} onChange={handleSubmitPass}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </>
    )
}
export default ControlledClass