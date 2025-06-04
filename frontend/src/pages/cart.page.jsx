import { useNavigate } from "react-router-dom";
import CartItem from "../components/cart";
import { useCart } from "../context/cart.context";
import Button from "../components/btn";

export default function Cart() {
  const { cartItems, totalPrice } = useCart();

  console.log(cartItems, "cartItems");

  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>

          <div className="mt-8 p-6 bg-gray-100 rounded-lg text-right">
            <h2 className="text-xl font-semibold">
              Total: ₹{totalPrice?.toFixed(2)}
            </h2>
            <Button
              label={"Proceed to Checkout"}
              classname="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              handleClick={() => navigate("/order")}
            />
          </div>
        </>
      )}
    </div>
  );
}
