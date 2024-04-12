


import { Routes,Route } from "react-router-dom"
import HomeScreen from "../../pages/homescreen"
import ProfileScreen  from "../../pages/profilescreen"
import SettingScreen from "../../pages/settingsscreen"
import AboutScreen from "../../pages/aboutscreen"
import InvalidScreen from "../../pages/invalidscreen"
import ProductDetail from "../../pages/products-details-screen"




const PostRoute=()=>{
    return(
<Routes>

<Route   path="/"  Component={HomeScreen}/>
<Route   path="/profile"  Component={ProfileScreen}/>
<Route   path="/settings" Component={SettingScreen}/>
<Route   path="/about"  Component={AboutScreen}/>
<Route   path="*"  Component={InvalidScreen}/>

<Route path="/:category/:id" Component={ProductDetail}/>

</Routes>

    )
}
export default PostRoute