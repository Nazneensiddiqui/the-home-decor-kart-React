import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Updataitem = () => {
  const { id } = useParams();
  const [mydata, setMyData] = useState({});
  const MyCart = useSelector((state) => state.mycart.cart);

  // Fetch user data
  const loaddata = () => {
    let api = `http://localhost:3000/user/${id}`;
    axios.get(api).then((res) => {
      console.log(res.data)
      setMyData(res.data)})
     
    };

  useEffect(() => {
    loaddata();
  }, []);

 // Map user data
  const ans = (
    <tr>
      <td>{mydata.name}</td>
      <td>{mydata.email}</td>
      <td>{mydata.phoneno}</td>
      <td>{mydata.address}</td>
      <td>{mydata.city}</td>
      <td>{mydata.state}</td>
      <td>{mydata.amount}</td>
      <td>{mydata.paymethod}</td>
    </tr>
  );

  // Map cart data
  let totalAmount = 0;
  const Data = MyCart.map((key) => {
    totalAmount += key.price * key.qnty;
    return (
      <tr>
        <td><img src={key.image} alt="Product" width="100" height="100" /></td>
        <td>{key.description}</td>
        <td>{key.price}</td>
        <td>{key.qnty * key.price}</td>
      </tr>
    );
  });

  return (
    <div>
      <div align="center" style={{ marginTop: "20px", marginLeft: "270px" }}>
        <table border="2px solid red" width="1050px">
          <thead>
            <tr className="table-header">
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Amount</th>
              <th>PayMethod</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </table>
      </div>

      <div style={{ marginTop: "10px", marginLeft: "300px", width: "800px" }}>
        <Table striped bordered hover style={{ width: "1000px" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Data}
            <tr>
              <td>#</td>
              <td></td>
              <td>Total Amount:</td>
              <td>{totalAmount}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Updataitem;
