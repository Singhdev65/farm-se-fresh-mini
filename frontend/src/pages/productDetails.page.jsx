import { useParams } from "react-router-dom";
import { useCart } from "../context/cart.context";
import Button from "../components/btn";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { cartItems, addToCart, updateQuantity } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load product data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const product = products.find((p) => p._id === id);
  const inCart = cartItems.find((item) => item._id === product?._id);

  if (loading) {
    return <div className="p-6 text-center">Loading product...</div>;
  }

  if (error || !product) {
    return (
      <div className="p-6 text-center text-gray-500">Product not found.</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-green-700 mb-4">₹{product.price}</p>
          <p className="text-gray-600 mb-6">
            Enjoy fresh and organic {product.category.toLowerCase()} delivered
            directly from local farmers to your home.
          </p>

          {inCart ? (
            <div className="flex items-center gap-4">
              <Button
                label={"-"}
                classname="px-3 py-1 bg-gray-200 rounded"
                handleClick={() => updateQuantity(product._id, -1)}
              />
              <span className="text-xl">{inCart.quantity}</span>
              <Button
                label={"+"}
                classname="px-3 py-1 bg-gray-200 rounded"
                handleClick={() => updateQuantity(product._id, 1)}
              />
            </div>
          ) : (
            <Button
              label={"Add to Cart"}
              classname="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
              handleClick={() => addToCart(product)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
