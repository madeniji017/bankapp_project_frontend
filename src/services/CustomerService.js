import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1";
// https://23bf-80-248-14-174.eu.ngrok.io/api/SignUp/CreateNewAccount

class CustomerService {
  saveCustomer(customer) {
    return axios.post(EMPLOYEE_API_BASE_URL + "/create-user", customer);
  }

  getCustomers() {
    return axios.get(EMPLOYEE_API_BASE_URL + "/user-list");
  }

  deleteCustomer(customer) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/delete-account", customer);
  }

  getCustomerByAccountNumber(accountnumber) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + accountnumber);
  }

  updateCustomer(customer) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/update-user", customer);
  }
}

export default new CustomerService();
