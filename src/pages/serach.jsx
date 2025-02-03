import { useState, useEffect } from "react";

import axios from "axios";

import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';

const Search=()=>{
    const [pro, setPro]=useState("");


    
    const dispatch= useDispatch();
    const navigate=useNavigate()
  
    //data ko get karne ke liye
  const[data , setdata]=useState([])

  const loadData = async () => {
    try {
        let apiUrls = [
            "http://localhost:3000/cords",
            "http://localhost:3000/kitchen",
            "http://localhost:3000/light",
            "http://localhost:3000/wall",
            "http://localhost:3000/Furniture",
            "http://localhost:3000/bath"
        ];

        const responses = await Promise.all(apiUrls.map(url => axios.get(url)));
        const allData = responses.flatMap(res => res.data);
        setdata(allData); // Combining all data into one array
    } catch (error) {
        console.error("Error fetching data", error);
    }
};

  useEffect(()=>{
    loadData()
  },[])


 
  
  const cartDataAdd=(id, price, desc, myimg)=>{
    dispatch(addToCart({id:id, price:price, description:desc, image:myimg, qnty:1}))
   }
  
   const Pro_Detail=(id)=>{
  navigate(`/prodect/${id}`)
   }
  
  


 const ans=data.map((key)=>{
      let mystr=key.description.toLowerCase(); 
      console.log(mystr);
      let myPro= pro.toLowerCase();   
      let proStatus= mystr.includes(myPro);
      console.log(proStatus);
    
     if (proStatus==true)
     {


   return(
    <>
    
    <div>
   <Card style={{width:"230px", marginTop:"20px"}}>
      {/* Image Section with Overlay */}
          <div className="card">
            <a href='#' onClick={()=>{Pro_Detail(key.id)}}>
            <img src={key.image} style={{ height: "240px", width: "100%"  }} alt={key.description} /></a>
            <div className="overlay"  onClick={()=>{cartDataAdd(key.id, key.price, key.description, key.image)}}>+Add to Cart</div>
          </div>
 <Card.Body>
       <Card.Text style={{fontFamily:"Times New Roman', Times, serif", fontSize:"12px"}}>
           {key.description} 
           <br/>
           <span > ₹ {key.price}/-</span>  
       </Card.Text>
       {/* <Button variant="primary" 
         onClick={()=>{cartDataAdd(key.id, key.price, key.description, key.image)}} >add to cart</Button> */}
     </Card.Body>
   </Card>
   </div>
    
    </>
   )
}
 })



    return(
        <>
        <center>
           <h1 style={{marginTop:"50px",color:"gray"}}> Search Itme's</h1>
         <input type="text" value={pro} placeholder="Enter Item Name:"
           onChange={(e)=>{setPro(e.target.value)}}   
            style={{
            padding: "10px",
            width: "300px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "20px"
          }}/>
        </center>
       

         
       <div id="cardData">
         {ans}     
       </div>
        </>
    )
}
export default Search;