import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
// https://23bf-80-248-14-174.eu.ngrok.io/api/SignUp/CreateNewAccount

class CustmomerService {
  saveCustomer(customer) {
    return axios.post("https://23bf-80-248-14-174.eu.ngrok.io/api/SignUp/CreateNewAccount");
  }

  getCustomers() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  deleteCustomer(accountnumber) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + accountnumber);
  }

  getCustomerByAccountNumber(accountnumber) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + accountnumber);
  }

  updateCustomer(customer, accountnumber) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + accountnumber, customer);
  }
}

export default new CustmomerService();
