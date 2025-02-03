import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';


const Shop=()=>{
    const [lowPrice, setLowPrice]=useState("");
    const [heighPrice, setHeighPrice]=useState("");
    const [showFilter, setShowFilter]=useState(true);
    const [mydata, setMydata]= useState([]);
    const dispatch= useDispatch();

    const[bgclr , setBgclr]=useState("white")
    const[clr ,setClr]=useState("GrayText")
   
  
    const MouseEnter=()=>{
      setBgclr(" rgb(185, 148, 148)")
      setClr("white")
    }
  
    const mouseLeave=()=>{
      setBgclr("white")
      setClr("GrayText")
    }
  
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5, // 5 images will be shown at a time
          slidesToScroll: 1, // 1 image will move at a time
          autoplay: true, // Auto slide
          autoplaySpeed: 2000, // Time between each slide
        };
  
       
// ,,,,,,,,,,,,,,,cards,,,,,,,,,,,,,,,,,,,,

   
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
            setMydata(allData); // Combining all data into one array
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    
    const showData = async () => {
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
          setMydata(allData); // Combining all data into one array
          setShowFilter(false)
      } catch (error) {
          console.error("Error fetching data", error);
      }
  };

 
    
     useEffect(()=>{
        loadData();
     }, []);

  //   //  .,,,,,,,,,,,,,,,,,,,,,,,kitchen,,,,,,,,,,,,,,
  //   const loadData1=()=>{
  //     let api="http://localhost:3000/kitchen";
  //     axios.get(api).then((res)=>{
  //         setMydata(res.data);
  //     })
  //  }

  //  const showData1=()=>{
  //     let api="http://localhost:3000/kitchen";
  //     axios.get(api).then((res)=>{
  //         setShowFilter(false);
  //         setMydata(res.data);
  //     })
  //  }
  
  //  useEffect(()=>{
  //     loadData1();
  //  }, []);

//,,,,,,,,,,,,,,,,,,tryforall api,,,,,,,,,,,,,,,,,,,,,,,,,,,


// const fetchProducts = async () => {
//   try {
//     setLoading(true);

//     // API calls for different categories
//     const category1 = await axios.get(`http://localhost:3000/cords`);
//     const category2 = await axios.get(`http://localhost:3000/kitchen`);
//     const category3 = await axios.get(`http://localhost:3000/light`);

//     // Combine all products
//     const allProducts = [...category1.data, ...category2.data, ...category3.data];
//     setMydata(allProducts);
//     setLoading(false);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     setLoading(false);
//   }
// };

// useEffect(() => {
//   fetchProducts(); // Fetch all products on component mount
// }, []);



     useEffect(()=>{
        if (lowPrice=="" && heighPrice=="")
        {
            setShowFilter(true);
        }
     })

     const cartDataAdd=(id,  price,  desc, myimg)=>{
      dispatch(addToCart({id:id,  price:price,  description:desc, image:myimg, qnty:1}))
     }
    
    
    
     const ans=mydata.map((key)=>{
      
       
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
     </Card.Body>
   </Card>
   </div>
     </>
       )
      
     })


     const ans1=mydata.map((key)=>{
      
        if (key.price>=lowPrice && key.price<=heighPrice)
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
          <div id="shoppage">
            <div id="shopmenu">
          
            <h4> Filter data by Price</h4>
           
           Enter Low Price <input type="text" value={lowPrice}
           onChange={(e)=>{setLowPrice(e.target.value)}} />
           <br/><br/>
            To 
            <br/><br/>
          Enter High Price  <input type="text" value={heighPrice}
          onChange={(e)=>{setHeighPrice(e.target.value)}} />
            <br/><br/><br/>
           <button style={{width:"130px", height:"40px", backgroundColor:bgclr ,color:clr}} 
                        onMouseEnter={MouseEnter} onMouseLeave={mouseLeave}  onClick={showData}
                   >
                    SHOP NOW</button> 


            </div>
             <div id="shopdata">
                  
             <div id="cardData">
                {showFilter?ans:ans1}      
            </div>

             </div>

          </div>
          </center>
        </>
    )
}

export default Shop;