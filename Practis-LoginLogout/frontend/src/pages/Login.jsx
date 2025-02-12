import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login=()=>{
  const[email, setEmail]=useState("")
  const[password, setPassword]=useState("")
  const navigate=useNavigate()
 
    const handleSubmit=async()=>{
          try {
              let api="http://localhost:8100/user/userlogin"
            const response= await axios.post(api , {email:email , password:password})
        console.log(response.data)
          alert(response.data.msg)
          navigate("/admindash")
       } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return(
        <>
     <Form style={{width:"50%", margin:"50px", border:"2px solid red", height:"350px", padding:"40px"}}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}  />
      </Form.Group>
      
      <Button variant="primary" style={{padding:"10px" , width:"200px"}} onClick={handleSubmit} > Submit </Button>
    </Form>    
        
        </>
    )
}
export default Login;