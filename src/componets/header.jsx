import w1 from "../image/w1.webp"
import w2 from "../image/w2.jpeg"
import w3 from "../image/w3.jpeg"
import w4 from "../image/w4.webp"
import w5 from "../image/w5.webp"
import w6 from "../image/w6.webp"
import w7 from "../image/w7.webp"
import w8 from "../image/w8.webp"
import w9 from "../image/w9.jpeg"
import w10 from "../image/w10.webp"

const Header=()=>{
    return(
        <>
         <div className="head" align="center">
     <div className="he" align="center">
        <img src={w1} alt="image is not found" height="65px" width="65px"/>
       <p> Decor</p></div>
       <div className="he">
        <img src={w2} alt="image is not found" height="65px" width="65px"/>
        <p>Bath</p></div>
        <div className="he">
    <img src={w3} alt="image is not found" height="65px" width="65px"/>
        <p>Garden</p></div>
        <div className="he">
        <img src={w4} alt="image is not found" height="65px" width="65px"/>
     <p>Lighting</p></div>
     <div className="he">
        <img src={w5} alt="image is not found" height="65px" width="65px"/>
     <p>Wall Decor</p></div>
     <div className="he">
         <img src={w6} alt="image is not found" height="65px" width="65px"/>
     <p>New & Trending</p></div>
     <div className="he">
     <img src={w7} alt="image is not found" height="65px" width="65px"/>
     <p>Furniture</p></div>
     <div className="he">
        <img src={w8} alt="image is not found" height="65px" width="65px"/>
     <p> Kitchen<br/>Accessories</p></div>
     <div className="he">
        <img src={w9} alt="image is not found" height="65px" width="65px"/>
     <p>Our Stores</p></div>
     <div className="he">
        <img src={w10} alt="image is not found" height="65px" width="65px"/>
     <p>Best Sellers</p></div>
</div>  
        </>
    )
}
export default Header;