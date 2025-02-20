import { Outlet } from "react-router-dom";

import Header from "./componets/header";
import Topmanu from "./componets/Topmanu";
import Footer from "./componets/footer";
const Layout=()=>{
    return(
        <>
         <div style={{position:"sticky", top:"0", zIndex:"10"}}>
         <Topmanu/>
         </div>
         <Header/> 
         
 <Outlet/>
   <Footer/>     
        </>
    )
}

export default Layout;