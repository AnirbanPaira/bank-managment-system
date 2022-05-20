import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Link to="/customers">
        <div className="d-flex justify-content-center">
          <button type="button" class="btn btn-primary fs-5 w-25 m-5">
            View all Customers
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
