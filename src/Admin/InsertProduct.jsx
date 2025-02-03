import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from "react-router-dom";

const InsertProduct=()=>{
    const[input,setInput]=useState({});
    const navigate= useNavigate();

    const handlInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values , [name]:value}));
    console.log(input);
}


    
    const handlSubmit=()=>{
        let api="http://localhost:3000/light";
        axios.post(api,input).then((res)=>{
          console.log(res);
        toast.success("Upload Product Successfully!!")
        })
        navigate("");
    }

    return(
        <>
        <div className="form">
       <h1 align="center">Upload Item</h1>
      
 <div className="row1">    
  Enter Description   :  <input type="text" name="description" onChange={handlInput}/>
        Enter Price   :  <input type="text" name="price" onChange={handlInput}/>
        </div><br/> <br/> 
<div className="row1">          
       
        Enter Material  :  <input type="text" name="material" onChange={handlInput}/>
            Enter pack  :  <input type="text" name="pack" onChange={handlInput}/>
    </div><br/> <br/>  
    <div className="row1">
        
    Enter  Dimension : <input type="text" name="dimansion" onChange={handlInput}/>
         Image Link  : <input type="text" name="image" onChange={handlInput}/>
    </div> <br/> <br/>
   
        <button onClick={handlSubmit} >Upload Item</button>
        </div>
       
        <ToastContainer/>
        </>
    )
}
export default InsertProduct;