import React from "react";
import { useNavigate } from "react-router-dom";

const Customer = ({ customer, deleteCustomer }) => {
  const navigate = useNavigate();
  const editCustomer = (e, accountnumber) => {
    e.preventDefault();
    navigate(`/editCustomer/${accountnumber}`);
  };

  return (
        <tr key={customer.accountnumber}>
            <td>
                <div>{customer.firstName}</div>
            </td>
            <td>
                <div>{customer.lastName}</div>
            </td>
            <td>
                <div>{customer.emailId}</div>
            </td>
            <td>
                <a
                onClick={(e, accountnumber) => editCustomer(e, customer.accountnumber)}
                >
                Edit
                </a>
                <a
                onClick={(e, accountnumber) => deleteCustomer(e, customer.accountnumber)}
                >
                Delete
                </a>
            </td>
        </tr>
  );
};

export default Customer;
