import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "../pagestask/Home"
import Biryani from "../pagestask/biryani"
import Shawarma from "../pagestask/shawarma"
import SouthIndian from "../pagestask/southindian"
import Burger from "../pagestask/burger"
import Chole from "../pagestask/chhole"
import Chinese from "../pagestask/chinese"
import Dosa from "../pagestask/dosa"
import IceCream from "../pagestask/icecream"
import Idli from "../pagestask/idli"
import Paratha from "../pagestask/paratha"
import Pizza from "../pagestask/pizza"
import Poori from "../pagestask/pavbaji"
import Salad from "../pagestask/salad"
import Vada from "../pagestask/vada"
import PavBaji from "../pagestask/pavbaji"


const NavigationTask=()=>{

    return(

<BrowserRouter>
<Routes>

    <Route   path="/"  Component={Home}/>
    <Route   path="/biryani"  Component={Biryani}/>
    <Route   path="/shawarma"  Component={ Shawarma}/>
    <Route   path="/southindian"  Component={SouthIndian}/>
    <Route   path="/burger"  Component={Burger}/>
    <Route   path="/chole"  Component={Chole}/>
    <Route   path="/chinese"  Component={Chinese}/>
    <Route   path="/dosa"  Component={Dosa}/>
    <Route   path="/icecream"  Component={IceCream}/>
    <Route   path="/idli"  Component={Idli}/>
    <Route   path="/paratha"  Component={Paratha}/>
    <Route   path="/pizza"  Component={Pizza}/>
    <Route   path="/pavbaji"  Component={PavBaji}/>
    <Route   path="/salad"  Component={Salad}/>
    <Route   path="/vada"  Component={Vada}/>
</Routes>
</BrowserRouter>

    )
}
export default NavigationTask