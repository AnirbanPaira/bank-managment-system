import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AllCustomerList = () => {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    const getAllCustomers = async () => {
      try {
        const res = await axios.get("/customers");
        setCustomerList(res.data.customers);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllCustomers();
  }, []);
  console.log(customerList);
  return (
    <div>
      <h1 className="bg-dark text-white p-2" style={{ textAlign: "center" }}>
        {" "}
        All Customers List{" "}
      </h1>

      <ul class="list-group list-group-flush d-flex align-items-center">
        {customerList &&
          customerList.map((customer) => (
            <li class="list-group-item d-flex justify-content-between w-50 ">
              <p className="h5">{customer.name}</p>
              <p className="h5 text-start">{customer.currentBalance}</p>

              <Link to={`/customer/${customer._id}`}>
                <button className="btn btn-danger">Transfer money</button>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AllCustomerList;
