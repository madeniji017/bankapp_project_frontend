import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../services/CustomerService";
import Customer from "./Customer";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CustomerService.getCustomers();
        setCustomers(response.data);
        console.log(customers)
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // const deleteCustomer = (e, customer) => {
  //   e.preventDefault();
  //   CustomerService.deleteCustomer(customers.email).then((res) => {
  //     console.log(res)
  //     // if (customers.email) {
  //     //   setCustomers((prevElement) => {
  //     //     return prevElement.filter((customer.email) => customer.email !== customers.email);
  //       });
  //     }
  //   });
  // };

  // const deleteCustomer = (e) => {
  //   e.preventDefault();
  //   navigate("/customerdelete");
  // };

  // const deleteCustomer = (e) => {
  //   e.preventDefault();
  //   console.log(customers.email);
  //   CustomerService.deleteCustomer(customers.email)
  //     .then((response) => {
  //       console.log(response)
  //       navigate("/adminlist");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  console.log(customers)

  return (
    <main style={{justifyContent: "center", alignContent: "center"}}>
        <div >
            <div className="form">
                {/* <button
                onClick={() => navigate("/signup")}
                >
                Create User Account
                </button> */}
              <br />
              <br />              
            </div>
            <div className="flex shadow border-b">
              <br />
              <br />
                <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        First Name
                    </th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        Last Name
                    </th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        Email ID
                    </th>
                    <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        Actions
                    </th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className="bg-white">
                    {customers.map((customer) => (
                        <Customer
                        customer={customer}
                        // deleteCustomer={deleteCustomer}
                        key={customer.email}></Customer>
                    ))}
                    </tbody>
                )}
                </table>
            </div>
         </div>
     </main>
  );
};

export default AdminDashboard;
