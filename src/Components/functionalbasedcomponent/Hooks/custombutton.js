
import React from "react"


const CustomButton=({children,onclick})=>{

    return(
<>
        <button onclick={onclick}>{children}</button>
        </>
    )
}
export default React.memo(CustomButton)