import Footer from "./componenet/footer";
import Header from "./componenet/header";
import TopNavbar from "./componenet/Topnavebar";
import {Outlet} from "react-router-dom"


const Layout=()=>{
    return(
        <>
       <Header/>
       <TopNavbar/>
       <Outlet/>
       <Footer/> 
        </>
    )
}
export default Layout;