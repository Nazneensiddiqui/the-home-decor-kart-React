const express=require("express");
const route=express.Router();
const userControler=require("../Controllers/userControler")

route.post("/datasave",userControler.DataSave)
route.post("/userlogin" , userControler.UserLogin)

module.exports=route;