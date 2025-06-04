import { ShoppingCart, User, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart.context";

const Header = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Farm<span className="text-gray-800">Fresh</span>
        </div>

        <div className="flex-1 mx-4 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-500 h-5 w-5" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <User className="cursor-pointer text-gray-700 hover:text-blue-600" />

          <div
            className="relative cursor-pointer text-gray-700 hover:text-blue-600"
            onClick={() => navigate("/cart")}
            aria-label="Go to cart"
          >
            <ShoppingCart />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full px-2 text-xs font-bold">
                {totalQuantity}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
