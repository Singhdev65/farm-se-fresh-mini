import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const userId = "12345";
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await fetch(`http://localhost:5000/cart/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch cart");
        const data = await res.json();

        const items = data.items.map((item) => ({
          ...item.product,
          quantity: item.quantity,
        }));
        setCartItems(items);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCart();
  }, [userId]);

  async function addToCart(product) {
    try {
      const res = await fetch(`http://localhost:5000/cart/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product._id, quantity: 1 }),
      });
      const data = await res.json();
      const items = data.items.map((item) => ({
        ...item.product,
        quantity: item.quantity,
      }));
      setCartItems(items);
    } catch (err) {
      console.error("Add to cart failed:", err);
    }
  }

  async function updateQuantity(productId, amount) {
    try {
      const item = cartItems.find((item) => item._id === productId);
      if (!item) return;

      const newQty = item.quantity + amount;
      if (newQty <= 0) return removeItem(productId);

      const res = await fetch(`http://localhost:5000/cart/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: newQty }),
      });
      const data = await res.json();
      const items = data.items.map((item) => ({
        ...item.product,
        quantity: item.quantity,
      }));
      setCartItems(items);
    } catch (err) {
      console.error("Update quantity failed:", err);
    }
  }

  async function removeItem(productId) {
    try {
      const res = await fetch(
        `http://localhost:5000/cart/${userId}/${productId}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      const items = data.items.map((item) => ({
        ...item.product,
        quantity: item.quantity,
      }));
      setCartItems(items);
    } catch (err) {
      console.error("Remove item failed:", err);
    }
  }

  function clearCart() {
    setCartItems([]);
  }

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        totalPrice,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
