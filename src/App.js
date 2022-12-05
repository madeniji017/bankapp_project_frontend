import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Admin from "./pages/Admin"
import AdminLogin from "./pages/AdminLogin"
import UserDash from "./pages/UserDash"
import CustomerUpdate from "./pages/CustomerUpdate"


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="admin" element={<Admin />} />
            <Route path="adminlog" element={<AdminLogin />} />
            <Route path="userdash" element={<UserDash />} />
            <Route path="customerupdate" element={<CustomerUpdate />} />
        </Routes>
      </BrowserRouter>
    )
}
