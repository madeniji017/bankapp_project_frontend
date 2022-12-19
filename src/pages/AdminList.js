import React from "react"
import Header from "../LoginComponents/Header"
import AdminDashboard from "../LoginComponents/AdminDashboard"
import Footer from "../LoginComponents/Footer"
import Sidebar from '../Sidebar'

export default function Admin() {
    return (
        <>
            <Header />
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <AdminDashboard />
            <Footer />
        </>
  
    )
}