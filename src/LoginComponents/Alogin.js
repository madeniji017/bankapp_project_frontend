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
    const [errorMessage, setErrorMessage] = React.useState('')
    console.log(errorMessage)

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

            fetch('http://localhost:8080/api/v1/admin/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customer)
                })
                .then((response) =>
                     response.json()
                )
                .then(function(data) {
                    if (data.status) {
                        setErrorMessage(data.message)
                        console.log(data.message)
                    } else {
                    localStorage.clear()
                    localStorage.setItem("customer", JSON.stringify(data));
                    window.location.href="/adminlist" 
                    console.log(data)}                   
                })
                .catch((error) => {
                    setErrorMessage("User doesn't exist")
                    console.log("This is the error", error.response)
                })

                // .then((response) => response.json())
                // .then(localStorage.clear())
                // .then((json) =>  {
                //     const edata = json
                //     if (edata.status === 200) {
                //     localStorage.setItem("customer", JSON.stringify(json))
                //     window.location.href="/adminlist"
                //     } else {
                //         window.location.href="/adminlog"
                //     }
                // })
                // .catch((error) => {
                // console.log(error)});
                // window.location.href="/adminlog"

                // if (error == 404)
                // {window.location.href="/adminlog"}
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
                    <h3 style={{textAlign: 'center', color: '#672280'}}>ADMIN LOGIN</h3>
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

                {errorMessage === '' ? null :
                <small style={{
                    fontWeight: 'thin',
                    textAlign: 'center',
                    justifyContent: 'center',
                    color: 'red',
                }}>{errorMessage}</small>}

                <Link to="/"
                style={{textDecoration: 'none', textAlign: 'center'}}>
                    <p>Forgot Password? <b>Click to Reset.</b></p>
                </Link>                

                <Link to="/"
                style={{textDecoration: 'none', textAlign: 'center'}}>
                    <p>Not an Admin? <b>Go to User Login!</b></p>
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