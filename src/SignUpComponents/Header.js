import React from "react"
import Logo from "../images/Logo.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={Logo} alt="my image" 
                className="header--image"
            />
            <h2 className="header--title">CRUD MFB</h2>
            <h4 className="header--project">SIGN-UP PAGE</h4>
        </header>
    )
}