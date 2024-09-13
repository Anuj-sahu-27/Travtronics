import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import OrderConfirmationPage from "./pages/payment/OrderConfirm";

import Login from './pages/Login';
import Admin from './pages/Admin';
import UserDashboard from './pages/UserDashboard';
import PrivateRoute from './components/PrivateRoute';

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const [user, setUser] = useState(null); // User state to track the logged-in user

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          {/* ==================== Header Navlink Start here =================== */}
          <Route index element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/journal" element={<Journal />}></Route>
          {/* ==================== Header Navlink End here ===================== */}
          <Route path="/offer" element={<Offer />}></Route>
          <Route path="/product/:_id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/paymentgateway" element={<Payment />}></Route>
          <Route path="/orderconfirm" element={<OrderConfirmationPage />}></Route>
        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<Login setUser={setUser} />}></Route>

        {/* Admin, User Dashboard, and Login routes */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute user={user} role="admin">
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute user={user} role="user">
              <UserDashboard />
            </PrivateRoute>
          }
        />
      </Route>
    )
  );

  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
