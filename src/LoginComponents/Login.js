import React from "react"
// import Signup from "../SignUpComponents/Signup"

export default function Login() {
    return (
        <main>
            <article className="card">
                <form className="form">
                    <input 
                        type="text"
                        placeholder="Email Address"
                        className="form--input"
                    />
                    <input 
                        type="text"
                        placeholder="Password"
                        className="form--input"
                    />
                    <select className="form--input">
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
                {/* <Signup/> */}
                <p>Don't have an account? <a href="/Signup">Sign Up</a></p>
            </article>
        </main>
    )
}