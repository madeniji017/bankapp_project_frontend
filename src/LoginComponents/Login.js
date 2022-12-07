import React from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
    const [customer, setCustomer] = React.useState(
        {
            email: "",
            password: ""
        }
    )

    const navigate = useNavigate();
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setCustomer(prevcustomer => ({
            ...prevcustomer,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    
    function handleSubmit(event) {
        event.preventDefault()

            fetch('https://d453-102-134-112-18.eu.ngrok.io/api/Account/Login', {
                method: 'POST',
                headers: {
                    Accept: 'application.json',
                    'Content-type': 'application/json',
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
                // window.location.href="/userdash"
                // navigate("/userdash");
        }

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
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        className="form--input"
                        name="password"
                        value={customer.password}
                        onChange={handleChange}
                    />
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
        </main>
    )
}