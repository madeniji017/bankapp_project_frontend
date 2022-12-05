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
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteCustomer = (e, accountnumber) => {
    e.preventDefault();
    CustomerService.deleteCustomer(accountnumber).then((res) => {
      if (customers) {
        setCustomers((prevElement) => {
          return prevElement.filter((customer) => customer.accountnumber !== accountnumber);
        });
      }
    });
  };

  return (
    <main>
        <div className="card">
            <div className="form">
                {/* <button
                onClick={() => navigate("/signup")}
                >
                Create User Account
                </button> */}
            </div>
            <div>
                <table>
                <thead>
                    <tr>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Email ID
                    </th>
                    <th>
                        Actions
                    </th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody>
                    {customers.map((customer) => (
                        <Customer
                        customer={customer}
                        deleteCustomer={deleteCustomer}
                        key={customer.id}></Customer>
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
