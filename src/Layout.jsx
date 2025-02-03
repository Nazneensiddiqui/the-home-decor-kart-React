import { Outlet } from "react-router-dom";

import Header from "./componets/header";
import Topmanu from "./componets/Topmanu";
import Footer from "./componets/footer";
const Layout=()=>{
    return(
        <>
         
         <Topmanu/>
         <Header/>
 <Outlet/>
   <Footer/>     
        </>
    )
}

export default Layout;