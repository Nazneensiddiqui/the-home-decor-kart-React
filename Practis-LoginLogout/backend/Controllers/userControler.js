const UserModel=require("../Models/userModel")
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");

//..............signin page............................
const DataSave= async(req , res)=>{
    console.log(req.body)
 const   {name, contact,email,password}= req.body
//............bcrypt google...................
const salt = await bcrypt.genSalt();
const hashPassword= await bcrypt.hash(password, salt)

   try {
    const Data= await UserModel.create({
        name:name,
        contactno:contact,
        email:email,
        password:hashPassword
    
    })
    res.status(200).json({msg:"Sign Up Succesfully"})
   } catch (error) {
    res.status(400).json({msg:"not sign up"})
   }
}

//.....................Login page.................................
const UserLogin=async(req , res)=>{
   const { email, password } =req.body
try {
    const User= await UserModel.findOne({email:email})
    console.log(User)
    if(!User)
{
    res.status(400).json({msg:"Invalid Email"})
}
const cheackpass= await bcrypt.compare(password, User.password)
if(!cheackpass)
{
    res.status(400).json({msg:"Invalid Password"}) 
}


// Generate JWT Token..............................
const token = jwt.sign({ id: User._id }, { expiresIn: "1h" });
res.json({ token, user: { id: User._id, name: User.name, email: User.email } });
console.log(token)
res.send("ok")

} catch (error) {
    console.error(error)
}
}




module.exports={
    DataSave,
    UserLogin
}