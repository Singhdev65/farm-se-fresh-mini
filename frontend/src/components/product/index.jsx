import { Link } from "react-router-dom";
import { useCart } from "../../context/cart.context";
import Button from "../btn";

export default function ProductCard({ product }) {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const inCart = cartItems.find((item) => {
    return item._id === product._id;
  });

  return (
    <div className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold">{product.name}</h3>
        </Link>
        <p className="text-gray-600">
          ₹{product.price}/{product.unit}
        </p>

        {inCart ? (
          <div className="mt-3 flex items-center gap-2">
            <Button
              label={"-"}
              classname="px-3 py-1 bg-gray-200 rounded"
              handleClick={() => updateQuantity(product._id, -1)}
            />
            <span>{inCart.quantity}</span>
            <Button
              label={"+"}
              classname="px-3 py-1 bg-gray-200 rounded"
              handleClick={() => updateQuantity(product._id, 1)}
            />
          </div>
        ) : (
          <Button
            label={"Add to Cart"}
            classname="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            handleClick={() => addToCart(product)}
          />
        )}
      </div>
    </div>
  );
}
