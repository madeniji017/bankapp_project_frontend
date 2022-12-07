import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CustomerService from "../services/CustomerService";
// import Customer from "./Customer";

export default function CustomerDashboard() {

    const [loading, setLoading] = useState(0);
    const [customers, setCustomers] = useState({});
    // useEffect(() => {
    //   const fetchData = async () => {
    //     setLoading(true);
    //     try {
    //       const response = await customerervice.getcustomer();
    //       setCustomer(response.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //     setLoading(false);
    //   };
    //   fetchData();
    // }, []);

    // setCustomer(() => {
    //   return JSON.parse( localStorage.getItem("customer") )
    // })
    // console.log(customer)

    // const details = JSON.parse(localStorage.getItem('customer'));
    useEffect(() => {
      if (localStorage.getItem("customer")) {
        setCustomers(JSON.parse(localStorage.getItem("customer")));
        // setLoading(1)
        console.log(loading)
      }
    }, [])



    return (
        <main>
            <article className="card" >
                <div className="form" style={{width: "auto", padding: 10}}>
                    <br />
                    <h3 style={{textAlign: 'center', color: '#672280'}}>USER ACCOUNT DASHBOARD</h3>
                    <br />

                    <h4 style={{textAlign: 'center', color: '#672280'}}>Welcome to Crud MFB</h4>
                    <h4 style={{textAlign: 'center', color: '#672280'}}>Name: {customers.firstName + " " + customers.lastName}</h4>
                    <h4 style={{textAlign: 'center', color: '#672280'}}>Email Address: {customers.email}</h4>
                    <h4 style={{textAlign: 'center', color: '#672280'}}>Account number: {customers.accountGenerated
}</h4>
                    <h4 style={{textAlign: 'center', color: '#672280'}}>Account type: {
                    customers.accountTypes}</h4>
                    <br />
                    <br /> 
                </div>
            </article>
        </main>
    )
}