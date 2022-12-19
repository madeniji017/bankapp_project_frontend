import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Adv from "./Adv";
import CustomerDashboard from "./CustomerDashboard"

export default function Login() {
    const [customer, setCustomer] = React.useState(
        {
            email: "",
            password: ""
        }
    );
    const [details, setDetails] = React.useState(null)

    const navigate = useNavigate();

    function myFunction() {
        // var x = customer.name;
        if (customer.type === "password") {
          customer.type = "text";
        } else {
          customer.type = "password";
        }
      }
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setCustomer(prevcustomer => ({
            ...prevcustomer,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    
    function handleSubmit(event) {
        event.preventDefault()

            fetch('http://localhost:8080/api/v1/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customer),
                })
                .then((response) => response.json())
                .then(localStorage.clear())
                .then((json) =>  {
                    localStorage.setItem("customer", JSON.stringify(json))
                    window.location.href="/userdash"
                })
                .catch((error) => {
                console.log(error)});
                window.location.href="/"
                // navigate("/userdash");
        }

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     start()
    //     async function start() {
    //         try {
    //           const response = await fetch("http://localhost:8080/api/v1/login", {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(customer),
    //           })
    //           const data = await response.json()
    //           console.log(data)
    //           localStorage.setItem("customer", JSON.stringify(data))
    //           setDetails(data);
    //           console.log(data)
    //           console.log(details);
    //           <CustomerDashboard item={details} />
    //           console.log(details)
    //           window.location.href="/userdash"
    //         } catch (e) {
    //           console.log("There was a problem fetching the breed list.")
    //         }
    //     }
        
    // }

    return (
        <main>
            <article className="card">
                <form className="form" onSubmit={handleSubmit}>
                    <br />
                    <h3 style={{textAlign: 'center', color: '#672280'}}>USER LOGIN</h3>
                    <br />
                    <input 
                        type="email"
                        placeholder="Email Address"
                        className="form--input"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                        // onFocus={customer.value=''}
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        className="form--input"
                        name="password"
                        value={customer.password}
                        onChange={handleChange}
                        // onFocus={customer.value=''}
                        id="password"
                    />
                    <input type="checkbox" onClick={myFunction()}/>Show Password
                    <button 
                        className="form--button"
                    >
                        LOGIN
                    </button>
                </form>

                <div className="form--a">

                <Link to="/"
                style={{textDecoration: 'none', textAlign: 'center'}}>
                    <p>Forgot Password? <b>Click to Reset.</b></p>
                </Link>                

                <Link to="/adminlog"
                style={{textDecoration: 'none', textAlign: 'center'}}>
                    <p>Admin? <b>Go to Admin!</b></p>
                </Link>

                <Link to="/signup"
                style={{textDecoration: 'none', textAlign: 'center'}}>
                    <p>Don't have an account? <b>Signup!</b></p>
                </Link>
                </div>
            </article>
            <Adv />
        </main>
    )
}