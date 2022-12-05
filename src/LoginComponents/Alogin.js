import React from "react"
import { Link } from "react-router-dom"

export default function Login() {
    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
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
        // if(formData.email != ) {
        //     console.log("Not an Admin. USER LOGIN")
        // }
    
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
                        <h3 style={{textAlign: 'center', color: '#672280'}}>ADMIN LOGIN</h3>
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

                <Link to="/signup"
                style={{textDecoration: 'none', textAlign: 'center'}}>
                    <p>Don't have an account? <b>Signup!</b></p>
                </Link>

                <Link to="/"
                style={{textDecoration: 'none', textAlign: 'center'}}>
                    <p>Already have an account? <b>User Login!</b></p>
                </Link>

                </div>
            </article>
        </main>
    )
}