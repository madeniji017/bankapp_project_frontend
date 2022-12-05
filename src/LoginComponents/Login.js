import React from "react"
import { Link } from "react-router-dom"

export default function Login() {
    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
            accountType: ""
        }
    )
    console.log(formData.accountType)
    
    
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }
    }
    
    return (
        <main>
            <article className="card">
                <form className="form" onSubmit={handleSubmit}>
                    <br />
                    <h3 style={{textAlign: 'center', color: '#672280'}}>USER LOGIN</h3>
                    <br />
                    <input 
                        type="text"
                        placeholder="Email Address"
                        className="form--input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        placeholder="Password"
                        className="form--input"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <select className="form--input"
                        id="accountType" 
                        value={formData.accountType}
                        onChange={handleChange}
                        name="accountType"
                    >
                        <option className="form--input" value="0">Account Type:</option>
                        <option className="form--input" value="1">Current</option>
                        <option className="form--input" value="2">Savings</option>
                    </select>
                    
                </form>
                <button 
                        className="form--button"
                    >
                        LOGIN
                </button>
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