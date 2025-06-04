import MainLayout from "./layout/Main.layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home.page";
import CartPage from "./pages/cart.page";
import ProductDetailPage from "./pages/productDetails.page";
import OrderPage from "./pages/order.page";
import { CartProvider } from "./context/cart.context";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/order" element={<OrderPage />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
