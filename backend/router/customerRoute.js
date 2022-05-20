const express = require("express");
const Customer = require("../model/CustomerModel");

const router = express.Router();

router.post("/customer/add", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(200).json({
      customer,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find();

    res.status(200).json({
      customers,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
router.post("/customer", async (req, res) => {
  try {
    const customer = await Customer.findById(req.body.userId);

    res.status(200).json({
      customer,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
router.post("/tranfer_money", async (req, res) => {
  try {
    const getUser = await Customer.findById(req.body.userId);

    const reveivedUser = await Customer.findByIdAndUpdate(
      req.body.userId,
      {
        currentBalance: getUser.currentBalance + req.body.tranfer_amount,
      },
      { new: true }
    );
    res.status(200).json({
      reveivedUser,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
