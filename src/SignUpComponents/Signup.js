import React from "react"
import { Link, useNavigate } from "react-router-dom"
import validator from 'validator'
import CustomerService from "../services/CustomerService";

export default function Signup() {
    const [customer, setCustomer] = React.useState(
        {
            firstName: "",
            middleName: "", 
            lastName: "",
            bvn: "",
            dob: "",
            phoneNumber: "", 
            emailAddress: "", 
            password: "", 
            confirmPassword: "",
            accountType: ""
        }
    )
    console.log(customer)

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = React.useState('')
    console.log(errorMessage)
    
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target

        setCustomer(prevcustomer => {
            return {
                ...prevcustomer,
                [name]: type === "checkbox" ? checked : value
            }
        })
        if (type ==="password") {
        if (validator.isStrongPassword(value, {
            minLength: 7, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
            setErrorMessage('Password is strong')
          } else {
            setErrorMessage('Password is not strong')
          }}
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if(customer.password === customer.confirmPassword) {
            // CustomerService.saveCustomer(customer)
            // .then((response) => {
            //   console.log(response);
            //   navigate("/userdash");
            // })
            // .catch((error) => {
            //   console.log(error);
            // });
            fetch('https://23bf-80-248-14-174.eu.ngrok.io/api/SignUp/CreateNewAccount', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(customer),
                })
                .then((response) => response.json())
                .then((json) => console.log(json));
        } else {
            setErrorMessage("Password does not match")
        }
    }
    
    // React.useEffect(() => {
    //     async function getDetails() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setCustomer(data.data.memes)
    //     }
    //     getMemes()
    // }, [])
    
    return (
        <main>
            <div className="card">
            <form className="form" onSubmit={handleSubmit}>
                <br />               
                <input 
                    type="text"
                    placeholder="Firstname"
                    className="form--input"
                    name="firstName"
                    value={customer.firstName}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="text"
                    placeholder="Middlename"
                    className="form--input"
                    name="middleName"
                    value={customer.middleName}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="text"
                    placeholder="Lastname"
                    className="form--input"
                    name="lastName"
                    value={customer.lastName}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="text"
                    placeholder="BVN"
                    className="form--input"
                    name="bvn"
                    value={customer.bvn}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="dob" style={{font: "thin", fontSize: "14px", margin: "10px"}}>Date of Birth:</label>
                <input 
                    type="date"
                    placeholder="D.O.B"
                    className="form--input"
                    name="dob"
                    value={customer.dob}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="tel"
                    placeholder="0800-000-0000"
                    className="form--input"
                    name="phoneNumber"
                    value={customer.phoneNumber}
                    onChange={handleChange}
                    // pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                    required
                />
                <input 
                    type="email"
                    placeholder="Email Address"
                    className="form--input"
                    name="emailAddress"
                    value={customer.emailAddress}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={customer.password}
                    onChange={handleChange}                    
                    required
                />
                {errorMessage === '' ? null :
                <small style={{
                    fontWeight: 'thin',
                    margin: "10px",
                    color: 'green',
                }}>{errorMessage}</small>}
                <input 
                    type="password"
                    placeholder="Confirm Password"
                    className="form--input"
                    name="confirmPassword"
                    value={customer.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <select className="form--input"
                        id="accountType" 
                        value={customer.accountType}
                        onChange={handleChange}
                        name="accountType"
                        required
                    >
                        <option className="form--input" value="*">Account Type:</option>
                        <option className="form--input" value="0">Savings</option>
                        <option className="form--input" value="1">Current</option>
                    </select>
                <button 
                    className="form--button"
                >
                    SIGN UP
                </button>
                <Link to="/"
                style={{textDecoration: 'none', textAlign: 'center'}}>
                    <p>Already have an account? <b>Login!</b></p>
                </Link>
            </form>
            </div>
        </main>
    )
}