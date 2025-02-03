import { Link , Outlet } from "react-router-dom";

import { FiAlignJustify } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaIdCard } from "react-icons/fa";
import { GrCreditCard } from "react-icons/gr";
import { FaRegFaceGrinHearts } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";



const AdminDash=()=>{
    const navigate=useNavigate();

 return(
        <>
<div className="navb">
    <div className="bar"><FiAlignJustify /></div>
     <div className="bell"><FiBell /></div>
    <div className="question"><FaRegQuestionCircle /></div>
   <div className="envelope"><MdOutlineEmail /></div>
    </div>

    <div className="mained" type="none" >
        <div className="item1">
            <center><h1 style={{color:"orangered"}}>Admin</h1></center>
            <ul type="none">        
<li><Link to="deshBoard" style={{color:"orangered", textDecoration:"none"}}><FiBell />  Dashboard</Link></li>
<li><Link to="insertproduct" style={{color:"orangered", textDecoration:"none"}}><FaIdCard /> Upload Item's</Link></li>
<li><Link to="display" style={{color:"orangered", textDecoration:"none"}}>  <FaRegFaceGrinHearts /> Customer Details </Link></li>
<li><Link to="updataitem" style={{color:"orangered", textDecoration:"none"}}> <GrCreditCard />  Update Item</Link></li>

<li><button onClick={()=>{navigate("/gift")}}>Log out</button></li>
</ul>
</div>
    <div className="item2">
    <h1>Dashboard</h1>
     </div>
     
   <Outlet/>
       </div>
    




    </>

      
        
       
    )
}
export default AdminDash;