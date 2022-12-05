import React from "react"
import { Link } from "react-router-dom"
import Logo from "../images/Logo.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={Logo} alt="my image" 
                className="header--image"
            />
            <h2 className="header--title">CRUD MFB</h2>
            <Link to="/adminlog"
            style={{textDecoration: 'none', color: 'white'}}>
            <h4 to="/adminlog" className="header--project">ADMIN PAGE</h4>
            </Link>
        </header>
    )
}