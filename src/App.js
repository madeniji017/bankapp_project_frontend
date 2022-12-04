import React from "react"
import Header from "./LoginComponents/Header"
import Login from "./LoginComponents/Login"
import Footer from "./LoginComponents/Footer"
import Signup from "./SignUpComponents/Signup"


export default function App() {
    return (
        <div>
          <div>
            <Header />
            <Login />
            <Footer />
          </div>
          <div>
            <Signup />
          </div>
        </div>
    )
}
