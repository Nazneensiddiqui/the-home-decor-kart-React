import { Link, Outlet } from "react-router-dom"




const AdminDash=()=>{
    return(
        <>
        <div style={{width:"100%", height:"50px", backgroundColor:"black", color : "white" , display:"flex"}}>
          <h1>Admin Dashbord</h1>       <br/>       <button>Logout</button>
          </div>
          <div className="main-container">
            <div className="Left-Menubar">
                <Link to="creatuser">Create New User</Link>
                <Link to="creatuser">Task Asign</Link>
                <Link to="creatuser">Create New User</Link>
                <Link to="creatuser">Create New User</Link>
                <Link to="creatuser">Create New User</Link>

            </div>
            <div className="Right-side">
                   <Outlet/>  

            </div>




          </div>
        
        </>
    )
}
export default AdminDash