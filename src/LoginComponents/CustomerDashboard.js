import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Adv from "./Adv";
// import { useNavigate } from "react-router-dom";
// import CustomerService from "../services/CustomerService";
// import Customer from "./Customer";

export default function CustomerDashboard(props) {
    console.log(props)
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
        const data = JSON.parse(localStorage.getItem("customer"));
        if (data.accounts[0]) {
          window.location.href="/customerupdate"} else {
        setCustomers(data)}
        console.log("console logged =====>>>>>", data)
        // setLoading(1)
        console.log(loading)
      } else {
        setLoading(1)
      }
    }, [])
console.log(customers)


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
                    <h4 style={{textAlign: 'center', color: '#672280'}}>Account Number: {customers.accounts? customers.accounts[0].acctNumber : ""}</h4>
                    <h4 style={{textAlign: 'center', color: '#672280'}}>Account Type: {customers.accounts? customers.accounts[0].acctType : ""}</h4>
                    {/* <button onClick={window.location.href="/customerupdate"}
                    style={{textDecoration: 'none', textAlign: 'center'}}>
                    <b>Edit</b>
                    </button> */}
                    <Link to="/customerupdate"
                    style={{textAlign: 'center', color: '#672280'}}>
                    <button className="form--button">Edit</button>
                    </Link>
                    <br />
                    <br /> 
                </div>
            </article>
            <Adv />
        </main>
    )
}