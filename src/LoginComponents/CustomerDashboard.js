import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../services/CustomerService";
import Customer from "./Customer";

export default function CustomerDashboard() {

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

    return (
        <main>
            <article className="card">
                <div>
                    <br />
                    <h3 style={{textAlign: 'center', color: '#672280'}}>USER DASHBOARD</h3>
                    <br />

                    <h4>Welcome + {}</h4>
                    
                </div>
                <button 
                        className="form--button"
                    >
                        LOGIN
                </button>
                <div className="form--a">

                {/* <Link to="/"
                style={{textDecoration: 'none', textAlign: 'center'}}>
                    <p>Forgot Password? <b>Click to Reset.</b></p>
                </Link>                 */}
                </div>
            </article>
        </main>
    )
}