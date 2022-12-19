import React from "react";
import { useNavigate } from "react-router-dom";

const Customer = ({ customer, deleteCustomer }) => {
  const navigate = useNavigate();
  const editCustomer = (e) => {
    e.preventDefault();
    navigate("/customerupdateadmin");
  };

  return (
        <tr key={customer.email}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div>{customer.firstName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div>{customer.lastName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div>{customer.email}</div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                <a
                onClick={(e) => editCustomer(e)}
                className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
                Edit
                </a>
                <a
                onClick={(e, customer) => (e, window.location.href="/customerdelete")}
                className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
                Delete
                </a>
            </td>
        </tr>
  );
};

export default Customer;
