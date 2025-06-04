const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  const { name, address, items, totalPrice } = req.body;

  if (!name || !address || !items?.length || !totalPrice) {
    return res.status(400).json({ message: "Incomplete order details" });
  }

  try {
    const order = new Order({ name, address, items, totalPrice });
    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to place order", error: err.message });
  }
};
