import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CustomerService from "../services/CustomerService";

const DeleteCustomer = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCustomer({ ...customer, [e.target.name]: value });
  };

  const deleteAccount = (e) => {
    e.preventDefault();
    console.log(customer);
    // CustomerService.deleteCustomer(customer)
    axios.delete("http://localhost:8080/api/v1/delete-account", { data: customer, headers: { "Authorization": "***" } })
    // console.log(customer)
      .then((response) => {
        console.log("this is response: " + response)
        navigate("/adminlist");
      })
      .catch((error) => {
        console.log(error);
      });
  };

//   const deleteCustomer = (e, email) => {
//     e.preventDefault();
//     CustomerService.deleteCustomer(email).then((res) => {
//       if (email) {
//         setCustomers((prevElement) => {
//           return prevElement.filter((customer) => customer.email !== email);
//         });
//       }
//     });
//   };

  return (
    <main style={{justifyContent: "center", alignContent: "center"}}>
        <div className="card">
            <div className="form">
                <div>
                <h3 style={{textAlign: 'center', color: '#672280'}}>DELETE ACCOUNT</h3>
                </div>
                <div>
                <input
                    className="form--input"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={customer.email}
                    onChange={(e) => handleChange(e)}
                    ></input>
                </div>

                <div >
                <button className="form--button"
                    onClick={deleteAccount}
                    >
                    Delete
                </button>
                <button className="form--button"
                    onClick={() => navigate("/adminlist")}
                    >
                    Cancel
                </button>
                </div>
            </div>
        </div>
    </main>
  );
};

export default DeleteCustomer;
