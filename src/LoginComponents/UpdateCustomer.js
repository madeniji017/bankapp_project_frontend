import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService";

const UpdateCustomer = () => {
  const { accountnumber } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    accountnumber: accountnumber,
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCustomer({ ...customer, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CustomerService.getCustomerByAccountNumber(customer.accountnumber);
        setCustomer(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateCustomer = (e) => {
    e.preventDefault();
    console.log(customer);
    CustomerService.updateCustomer(customer, accountnumber)
      .then((response) => {
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
        <div className="card">
            <div className="form">
                <div>
                <h3 style={{textAlign: 'center', color: '#672280'}}>UPDATE DETAILS</h3>
                </div>
                {/* <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    First Name
                </label>
                <input
                    type="text"
                    name="firstName"
                    value={employee.firstName}
                    onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Last Name
                </label>
                <input
                    type="text"
                    name="lastName"
                    value={employee.lastName}
                    onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div> */}
                <div>
                <input
                    className="form--input"
                    type="email"
                    name="emailId"
                    placeholder="Email Address"
                    value={customer.emailId}
                    onChange={(e) => handleChange(e)}
                    ></input>
                </div>

                <div >
                <button className="form--button"
                    onClick={updateCustomer}
                    >
                    Update
                </button>
                <button className="form--button"
                    onClick={() => navigate("/admin")}
                    >
                    Cancel
                </button>
                </div>
            </div>
        </div>
    </main>
  );
};

export default UpdateCustomer;
