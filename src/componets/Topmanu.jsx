import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaShoppingCart } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';
import axios from 'axios';





const Topmanu=()=>{
 const mycart= useSelector(state=>state.mycart.cart);
   //console.log(mycart);
  const navigate= useNavigate();

  //Admin login open
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [adminid, setAdminid]=useState("");
  const [password, setPassword]=useState("");


 const cartPage=()=>{
    navigate("/cart");
   }

   const handleSubmit=()=>{
    let api=`http://localhost:3000/admin/?adminid=${adminid}`;
     axios.get(api).then((res)=>{
         if (res.data.length>=1)
         {
             if (res.data[0].password==password)
             {
              navigate("/admindash")
             }
             else 
             {
               alert("Invalid Password!")
             }
         }
         else 
         {
           alert("Invalid AdminID")
         }
 
     })
    //  setAdminid("");
    //  setPassword("")
   }
 


  const cartLen= mycart.length;
    return(
        <>
        <div id="nav">
        <marquee style={{behavior:"scroll"}} >
        <p>Extra 5% Off + Free Shipping on Prepaid Orders Shop All || 
              Check our new app for a seamless experience Download
            || Unveil Elegance: Discover our all new collections Shop All</p>
        </marquee>
    </div>
    <div id="navbar">
    <Navbar  data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{alignItems:"center", marginBottom:"30px", fontSize:"24px", color:"white"}}>THE LUXE CORNER</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="gift"> Gift Atelier </Nav.Link>
          <Nav.Link as={Link} to="Decor">Decor </Nav.Link>
            <Nav.Link as={Link} to="kitchen"> Kitchen & Dining</Nav.Link>
            <Nav.Link as={Link} to="lighting"> Lighting </Nav.Link>
            <Nav.Link as={Link} to="wall"> Wall Decor</Nav.Link>
            <Nav.Link as= {Link} to="bath"> Bath Decor </Nav.Link>
            <Nav.Link as={Link} to="furniture"> Furniture </Nav.Link>
            
            <button onClick={()=>{navigate("/gift")}}>Get App</button>

           <div id='icons'>
            <div><IoIosEye /><p style={{fontSize:"10px"}}>Viewed</p></div>

            <div>
    {cartLen > 0 && ( <span style={{ fontSize: "14px" }}>{cartLen}</span> )}
    <a href="#" onClick={cartPage}>
        <FaShoppingCart style={{ color: "white" }} /> </a>
    <p style={{ fontSize: "10px", marginLeft: "5px" }}>cart</p>
            </div>

            <div> <a href='#'><GrUserAdmin  onClick={handleShow} style={{color:"white"}}/></a>
            <p style={{fontSize:"10px"}}>Account</p></div>

            <div><a href='#' onClick={()=>{  navigate("/search")}}><FaSearch  style={{color:"white"}}/></a>
            <p style={{fontSize:"10px"}}>Search</p></div>
         </div>
          </Nav>
        </Container>
      </Navbar>
</div>

   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:"rgb(211, 217, 223)", color:"orangered"}}>
          <Modal.Title align="center" style={{backgroundColor:"rgb(211, 217, 223)", color:"orangered"}}>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body align="center" style={{backgroundColor:"rgb(211, 217, 223)", color:"orangered"}}>
        Enter Id : <input type="text" value={adminid} onChange={(e)=>{setAdminid(e.target.value)}} style={{marginLeft:"50px", borderRadius:"5px"}}/>
        <br/><br/>
        Enter Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  style={{borderRadius:"5px"}}/>
        <br/>
         </Modal.Body>
        <Modal.Footer style={{backgroundColor:"rgb(211, 217, 223)", color:"gray"}}>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"orangered"}}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} style={{backgroundColor:"green"}}>
           Login
          </Button>
        </Modal.Footer>
      </Modal>

     


        </>
    )
}
export default Topmanu;