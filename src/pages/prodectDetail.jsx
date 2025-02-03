import { useParams ,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

import oip from "../image/OIP.jpg"
import img from "../image/img.jpg"

import { BiSolidOffer } from "react-icons/bi";
import { GoPackage } from "react-icons/go";
import { BiCheckShield } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";

const ProductDetail=()=>{
    const {id} =useParams();
    const [mydata, setMydata]=useState({});
    const dispatch= useDispatch();
    const navigate=useNavigate()

const loadData=()=>{
    let api=`http://localhost:3000/cords/${id}`;
    axios.get(api).then((res)=>{
        setMydata(res.data)
        console.log(res.data)
    })
}

const loadData1=()=>{
  let api=`http://localhost:3000/kitchen/${id}`;
  axios.get(api).then((res)=>{
      setMydata(res.data)
      console.log(res.data)
  })
}


const loadData2=()=>{
  let api=`http://localhost:3000/light/${id}`;
  axios.get(api).then((res)=>{
      setMydata(res.data)
      console.log(res.data)
  })
}


useEffect(()=>{
    loadData();
}, [])


useEffect(()=>{
  loadData1();
}, [])


useEffect(()=>{
  loadData2();
}, [])

    const cartDataAdd=(id, price, desc, myimg)=>{
        dispatch(addToCart({id:id, price:price, description:desc, image:myimg, qnty:1}))
        navigate("/cart")
       }


    return(
        <>
         
          <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"50px" ,gap:"10px"}}>
            <div style={{display:"flex", gap:"10px"}}>
               <img src={mydata.image}  style={{height:'500px', width:"450px"}}/>
               <img src={mydata.image}  style={{height:'500px', width:"450px"}}/><br/>
              </div>
            <div style={{marginRight:"90px"}}>
            <h5 style={{fontFamily:"sans"}}> {mydata.description} </h5> 
            <img src={oip} width={20} height={20}/>
            <img src={oip} width={20} height={20}/>
            <img src={oip} width={20} height={20}/>
            <img src={oip} width={20} height={20}/>
            <img src={oip} width={20} height={20}/>  <br/>
             <div style={{display:"flex", gap:"5px",marginTop:"10px"}}><p style={{fontSize:"14px", color:" rgb(163, 158, 158)"}}>MRP</p>
              <h6>₹{mydata.price} .00</h6>
              <p style={{fontSize:"14px", color:" rgb(163, 158, 158)"}}>inclusive of all taxes</p></div> 
              <p style={{fontSize:"14px", color:" rgb(163, 158, 158)",marginTop:"0"}}>SKU: OLY-40-1</p>
              <div style={{display:"flex", gap:"5px",marginTop:"10px",fontFamily:"time"}}><p style={{fontSize:"14px", color:" rgb(163, 158, 158)"}}> Material :
                 </p>{mydata.material}</div> 
                 <div style={{display:"flex", gap:"5px",marginTop:"10px",fontFamily:"time"}}>
                    <p style={{fontSize:"14px", color:" rgb(163, 158, 158)"}}> Pack Content :
                         </p>{mydata.pack}</div> 
                         <div style={{display:"flex", gap:"5px",marginTop:"10px",fontFamily:"time"}}>
                    <p style={{fontSize:"14px", color:" rgb(163, 158, 158)"}}> Dimensions :
                  </p>{mydata.dimansion}</div> 
        
            <Button style={{backgroundColor:" rgb(6, 65, 32)", width:"400px",height:"50px", color:"white" }}
             onClick={()=>{cartDataAdd(mydata.id, mydata.price, mydata.description, mydata.image)}}
             >AddToCart</Button>
             <div style={{width:"400px", height:"130px", backgroundColor:"rgb(226, 220, 220)", marginTop:"20px",
                padding:"20px"}}>
             <BiSolidOffer />  Offers
          <p>Get 15% Off Your First Order</p>
             </div>
            </div>
           </div>

           <div style={{fontFamily:"time",textAlign:"center",display:"flex",gap:"20px", marginTop:"50px",marginLeft:"80px"}}>          
  <div style={{height:"150px", width:"400px"}}>
    <GoPackage fontSize={24} />
    <h6>SECURE PACKAGING</h6>
    <p>A skilled packaging department & heavy duty packaging ensures utmost safety for even the most delicate products.</p>
    </div>
    <div style={{height:"150px", width:"400px"}}>
<BiCheckShield fontSize={25} />
  <h6>QUALITY GUARANTEE</h6>
  <p>We rigorously test every product to ensure it meets or exceeds our patrons expectations. If it doesn't, we won't sell it.</p>
</div>

<div style={{height:"150px", width:"400px"}}>
  <IoMailOutline  fontSize={24}/>
<h6>CUSTOMER SERVICE</h6>
<p>Award winning customer service - we are here to serve you. Get in touch!</p>
</div>
</div>

<div>
      <img src={img} style={{width:"100%" ,marginTop:"100px"}}/>
    </div>


        </>
    )
}

export default ProductDetail;