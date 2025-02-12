import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"

const Signin=()=>{
    const[input , setInput]=useState({})

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values , [name]:value}))
        console.log(input)
    }

    const handleSubmit=async()=>{
        try {
              let api="http://localhost:8100/user/dataSave"
            const response= await axios.post(api, input)
            console.log(response.data)
            if(response.status==200)
            {
          alert(response.data.msg)
            }
       } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return(
        <>

     <Form style={{width:"50%", marginTop:"50px", border:"2px solid red", height:"400px", padding:"40px", margin:"auto", marginBottom:"20px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Enter Your Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Enter Your Contact No.</Form.Label>
        <Form.Control type="number" name="contact" onChange={handleInput} />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleInput}  />
      </Form.Group>
      
      <Button variant="primary" style={{padding:"10px" , width:"200px"}} onClick={handleSubmit} > Submit </Button>
    </Form>    
        
        </>
    )
}
export default Signin;