import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TransferMoney = () => {
  const params = useParams();
  const [singleUser, setSingleUser] = useState(null);
  const [amount, setAmount] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getSingleUser = async () => {
      try {
        const res = await axios.post("/customer", { userId: params.id });
        setSingleUser(res.data.customer);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getSingleUser();
  }, []);

  const transferMoney = async () => {
    try {
      const res = await axios.post("/tranfer_money", {
        userId: params.id,
        tranfer_amount: amount,
      });
      setSuccess(true);
      navigate("/customers");
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };

  return (
    <div>
      {singleUser && (
        <div className="tm_conatienr d-flex flex-column justify-content-between align-items-center h-75 gap-5 mt-5">
          <h2>Transfer Money</h2>
          <h5>Transfer money to {singleUser.name}</h5>
          <input
            type="number"
            className="input-group w-25 p-1"
            placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.valueAsNumber)}
          />
          <button className="btn btn-primary " onClick={transferMoney}>
            Tranfer Money
          </button>
          {success && <h6>Money send Successfull</h6>}
          {error && <h6>Money send failed</h6>}
        </div>
      )}
    </div>
  );
};

export default TransferMoney;
