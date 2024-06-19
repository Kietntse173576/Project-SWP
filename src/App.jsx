import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./userpages/Header";
import Footer from "./userpages/Footer";
import Home from "./userpages/Home";
import Register from "./userpages/Register";
import Login from "./userpages/Login";
import Checkout from "./userpages/Checkout";
import ProductDetail from "./userpages/ProductDetail";
import Cart from "./userpages/Cart";
import PaymentMethod from "./userpages/PaymentMethod";
import PaymentSuccess from "./userpages/PaymentSuccess";
import SideBar from "./managerpages/SideBar";
import Headerv2 from "./managerpages/Headerv2";
import DashBoard from "./managerpages/DashBoard";
import ListProduct from "./managerpages/ListProduct";
import AddProduct from "./managerpages/AddProduct";
import UpdateProduct from "./managerpages/UpdateProduct";
import ManagementUser from "./managerpages/ManagementUser";
import UserDetail from "./managerpages/UserDetail";
import UserOrders from "./managerpages/UserOrders";
import OrderList from "./managerpages/OrderList";
import OrderDetail from "./managerpages/OrderDetail";
import ManagementVoucher from "./managerpages/ManagementVoucher";
import SideBarv2 from "./adminpages/SideBarv2";
import ManagementEmployees from "./adminpages/ManagementEmployees";
import StaffDetail from "./adminpages/StaffDetail";
import SideBarv3 from "./salestaffpages/SideBarv3";
import ListDiamond from "./salestaffpages/ListDiamond";
import ListMountDiamond from "./salestaffpages/ListMountDiamond";
import StockList from "./salestaffpages/StockList";
import OrderListForDelivery from "./deliverystaffpages/OrderListForDelivery";
import OrderListForSaleStaff from "./salestaffpages/OrderListForSaleStaff";
import Carousel from "./userpages/Carousel";
import ListProductForUser from "./userpages/ListProductForUser";
import UserInfo from "./userpages/UserInfo";
import OrderDetailForUser from "./userpages/OrderDetailForUser";
import Knowledge from "./userpages/Knowledge";
import Promotion from "./userpages/Promotion";
import OrderHistory from "./userpages/OrderHistory";
import ManagementStaff from "./managerpages/ManagementStaff";
import DiamondMount from "./managerpages/DiamondMount";
function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Carousel />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/order-history"
          element={
            <>
              <Header />
              <OrderHistory />
              <Footer />
            </>
          }
        />
        <Route
          path="/order-detail/:id"
          element={
            <>
              <Header />
              <OrderDetailForUser />
              <Footer />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
              <Footer />
            </>
          }
        />
        <Route
          path="/list-product"
          element={
            <>
              <Header />
              <ListProductForUser />
              <Footer />
            </>
          }
        />
        <Route
          path="/product-detail/:id"
          element={
            <>
              <Header />
              <ProductDetail />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
              <Footer />
            </>
          }
        />
        <Route
          path="/payment-method"
          element={
            <>
              <Header />
              <PaymentMethod />
              <Footer />
            </>
          }
        />
        <Route
          path="/payment-success"
          element={
            <>
              <Header />
              <PaymentSuccess />
              <Footer />
            </>
          }
        />
        <Route
          path="/user-info"
          element={
            <>
              <Header />
              <UserInfo />
              <Footer />
            </>
          }
        />
        <Route
          path="/knowledge"
          element={
            <>
              <Header />
              <Knowledge />
              <Footer />
            </>
          }
        />
        <Route
          path="/promotions"
          element={
            <>
              <Header />
              <Promotion />
              <Footer />
            </>
          }
        />

        {/* Manager routes */}
        <Route
          path="/manager/dashboard"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <DashBoard />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/list-products"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <ListProduct />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/add-product"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <AddProduct />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/update-product/:id"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <UpdateProduct />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/management-user"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <ManagementUser />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/management-user/user-detail/:id"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <UserDetail />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/management-user/user-orders/:id"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <UserOrders />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/order-list"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <OrderList />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/order-list/order-detail/:id"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <OrderDetail />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/management-voucher"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <ManagementVoucher />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/management-staff"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <ManagementStaff />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/diamond-mount"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <DiamondMount />
              </div>
            </div>
          }
        />

        {/* Sale Staff routes */}
        <Route
          path="/staff/list-diamond"
          element={
            <div className="flex">
              <SideBarv3 />
              <div className="flex-1">
                <Headerv2 />
                <ListDiamond />
              </div>
            </div>
          }
        />
        <Route
          path="/staff/list-mount-diamond"
          element={
            <div className="flex">
              <SideBarv3 />
              <div className="flex-1">
                <Headerv2 />

                <ListMountDiamond />
              </div>
            </div>
          }
        />
        <Route
          path="/staff/stock-list"
          element={
            <div className="flex">
              <SideBarv3 />
              <div className="flex-1">
                <Headerv2 />

                <StockList />
              </div>
            </div>
          }
        />
        <Route
          path="/staff/order-list"
          element={
            <div className="flex">
              <SideBarv3 />
              <div className="flex-1">
                <Headerv2 />
                <OrderListForSaleStaff />
              </div>
            </div>
          }
        />
        <Route
          path="/staff/order-list/order-detail/:id"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <OrderDetail />
              </div>
            </div>
          }
        />
        {/* Delivery Staff routes */}
        <Route
          path="/delivery"
          element={
            <div className="flex flex-col">
              <Headerv2 />
              <OrderListForDelivery />
            </div>
          }
        />
        {/* Admin routes */}
        <Route
          path="/admin/dashboard"
          element={
            <div className="flex">
              <SideBarv2 />
              <div className="flex-1">
                <Headerv2 />
                <DashBoard />
              </div>
            </div>
          }
        />
        <Route
          path="/admin/management-employees"
          element={
            <div className="flex">
              <SideBarv2 />
              <div className="flex-1">
                <Headerv2 />
                <ManagementEmployees />
              </div>
            </div>
          }
        />
        <Route
          path="/admin/employees-detail/:id"
          element={
            <div className="flex">
              <SideBarv2 />
              <div className="flex-1">
                <Headerv2 />
                <StaffDetail />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
