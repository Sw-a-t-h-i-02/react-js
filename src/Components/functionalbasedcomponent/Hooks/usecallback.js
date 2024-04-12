import { useCallback, useState } from "react"
import Custombutton from "./custombutton"





const UseCallback=()=>{

    const[age,setAge]=useState(10)
    const[salary,setsalary]=useState(100)


    const handleAge=useCallback(()=>{

        setAge(age+10)
    },[age])


    const handleSalary=useCallback(()=>{

        setsalary(salary+100)
    },[salary])

    return(
        <>
        <Custombutton onClick={handleAge}>
            click to increment the Age
        </Custombutton>


        <Custombutton onClick={handleSalary}>
            click to increment the salary
        </Custombutton>
        </>
    )
}
export default UseCallback