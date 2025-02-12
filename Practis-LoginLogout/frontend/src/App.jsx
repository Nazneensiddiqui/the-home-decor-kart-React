import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import AdminDash from "./pages/AdminDashBorad";



const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Login/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signin" element={<Signin/>}/>
      <Route path="admindash" element={<AdminDash/>}/>

      </Route>
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}
export default App;