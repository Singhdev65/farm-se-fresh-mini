import React, { useState } from "react";
import { useCart } from "../context/cart.context";
import Button from "../components/btn";

const OrderPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !address || cartItems.length === 0) {
      alert("Please complete all fields and add items to cart.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          address,
          items: cartItems.map(({ id, ...rest }) => ({
            productId: id,
            ...rest,
          })),
          totalPrice,
        }),
      });

      if (!response.ok) {
        throw new Error("Order failed");
      }

      setOrderPlaced(true);
      clearCart();
    } catch (err) {
      alert("Failed to place order. Please try again.");
    }
  };

  if (orderPlaced) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-600">
          Thank you for your order!
        </h2>
        <p className="text-lg">Your fresh items will be delivered soon.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>

        <label className="block">
          <span className="block mb-1 font-medium">Name</span>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="block">
          <span className="block mb-1 font-medium">Address</span>
          <textarea
            className="w-full p-2 border rounded"
            value={address}
            rows={4}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>

        <Button
          label={"Place Order"}
          classname="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          type="submit"
        />
      </form>

      <div className="border rounded p-4 shadow">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="py-2 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ₹{item.price} × {item.quantity} {item.unit}
                    </p>
                  </div>
                  <span className="font-semibold">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            <hr className="my-4" />
            <div className="text-right text-lg font-bold">
              Total: ₹{totalPrice.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
