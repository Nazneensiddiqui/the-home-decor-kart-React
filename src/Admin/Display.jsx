import { useState, useEffect } from "react";
import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
//   import { useNavigate } from "react-router-dom";

const Display=()=>{
const[mydata, setmydata]=useState([]);
// const navigate= useNavigate();

const loaddata=()=>{
    let api="http://localhost:3000/user";
    axios.get(api).then((res)=>{
        console.log(res.data);
        setmydata(res.data);
    })
 
}

useEffect(()=>{
    loaddata();
},[])

// //.................delet recode................
// const myRecDel=(id)=>{
// let api=`http://localhost:3000/user/${id}`;
// axios.delete(api).then((res)=>{
//     alert(" Data Delete Successfully!!")
// loaddata();
// })
// }

// //.............edit data.........................
// const myEdit=(id)=>{
//     navigate(`/editrec/${id}`)
// } 

const ans= mydata.map((key)=>{
return(
    <>
      <tr  width="1050px"  fontWidth="2px" bgcolor="orangered" style={{color:"white", fontSize:"14px", border:"1px solid black "}} >
  <td>{key.name}</td>
  <td>{key.email}</td>
   <td>{key.phoneno}</td>
  <td>{key.address}</td>
  < td>{key.city}</td>
  <td>{key.state}</td>
  <td>{key.amount}</td>
  <td>{key.paymethod}</td>
  {/* <td>
                <a href="#" onClick={()=>{myEdit(key.id)}}>
                   <img src={edimg} width="30" height="30" /> 
                 </a>
                 
                 <a  href="#" onClick={()=>{myRecDel(key.id)}}>
                 <img src={delimg} width="30" height="30" /> 
                 </a>
  </td> */}
</tr>
  </>
)
})
 return(
        <>
        <div align="center" style={{marginTop:"20px",marginLeft:"270px", fontSize:"14px"}}>
      <table  border="2px solid red" width="1050px"  >
       <tr border="2px solid black" width="1050px"   bgcolor="lightblue" >
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Amount</th>
            <th>PayMethod</th>
            
        </tr>
        {ans}
       </table>
       </div>
       {/* <ToastContainer/> */}
        </>
    )
}
export default Display;