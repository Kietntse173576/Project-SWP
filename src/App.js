import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import PaymentMethod from './components/PaymentMethod';
import PaymentSuccess from './components/PaymentSuccess';
import SideBar from './staffpages/SideBar';
import Headerv2 from './staffpages/Headerv2';
import DashBoard from './staffpages/DashBoard';
import AllProduct from './staffpages/AllProduct';
import AddProduct from './staffpages/AddProduct';
import UpdateProduct from './staffpages/UpdateProduct';
import ManagementUser from './staffpages/ManagementUser';
import UserDetail from './staffpages/UserDetail';
import UserOrders from './staffpages/UserOrders';
import OrderList from './staffpages/OrderList';
import OrderDetail from './staffpages/OrderDetail';
import SideBarv2 from './adminpages/SideBarv2';
import Dashboard from './adminpages/Dashboard';
import ManagementStaff from './adminpages/ManagementStaff';
import StaffDetail from './adminpages/StaffDetail';
import Headerv3 from './adminpages/Headerv3';

=======
import Header from './userpages/Header';
import Footer from './userpages/Footer';
import Home from './userpages/Home';
import Register from './userpages/Register';
import Login from './userpages/Login';
import Checkout from './userpages/Checkout';
import ProductDetail from './userpages/ProductDetail';
import Cart from './userpages/Cart';
import PaymentMethod from './userpages/PaymentMethod';
import PaymentSuccess from './userpages/PaymentSuccess';
import SideBar from './managerpages/SideBar';
import Headerv2 from './managerpages/Headerv2';
import DashBoard from './managerpages/DashBoard';
import ListProduct from './managerpages/ListProduct';
import AddProduct from './managerpages/AddProduct';
import UpdateProduct from './managerpages/UpdateProduct';
import ManagementUser from './managerpages/ManagementUser';
import UserDetail from './managerpages/UserDetail';
import UserOrders from './managerpages/UserOrders';
import OrderList from './managerpages/OrderList';
import OrderDetail from './managerpages/OrderDetail';
import ManagementVoucher from './managerpages/ManagementVoucher';
import SideBarv2 from './adminpages/SideBarv2';
import ManagementStaff from './adminpages/ManagementStaff';
import StaffDetail from './adminpages/StaffDetail';
import SideBarv3 from './salestaffpages/SideBarv3';
import ListDiamond from './salestaffpages/ListDiamond';
import ListMountDiamond from './salestaffpages/ListMountDiamond';
import StockList from './salestaffpages/StockList';
import ListDelivered from './deliverystaffpage/ListDelivered';
import OrderListForSaleStaff from './salestaffpages/OrderListForSaleStaff';
import OrderDetailForSaleStaff from './salestaffpages/OrderDetailForSaleStaff';
import Carousel from './userpages/Carousel';
import ListProductForUser from './userpages/ListProductForUser';
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
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
<<<<<<< HEAD
=======
              <Carousel />
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
<<<<<<< HEAD
              <Header />
              <Register />
              <Footer />
=======
              <Register />
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
<<<<<<< HEAD
              <Header />
              <Login />
              <Footer />
=======
              <Login />
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
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
<<<<<<< HEAD
=======
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
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
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

<<<<<<< HEAD
        {/* Staff routes */}
        <Route
          path="/staff/dashboard"
=======
        {/* Manager routes */}
        <Route
          path="/manager/dashboard"
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
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
<<<<<<< HEAD
          path="/staff/all-products"
=======
          path="/manager/list-products"
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
<<<<<<< HEAD
                <AllProduct />
=======
                <ListProduct />
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
              </div>
            </div>
          }
        />
        <Route
<<<<<<< HEAD
          path="/staff/add-product"
=======
          path="/manager/add-product"
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
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
<<<<<<< HEAD
          path="/staff/update-product/:id"
=======
          path="/manager/update-product/:id"
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
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
<<<<<<< HEAD
          path="/staff/management-user"
=======
          path="/manager/management-user"
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
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
<<<<<<< HEAD
          path="/staff/management-user/user-detail/:id"
=======
          path="/manager/management-user/user-detail/:id"
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
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
<<<<<<< HEAD
          path="/staff/management-user/user-orders/:id"
=======
          path="/manager/management-user/user-orders/:id"
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
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
<<<<<<< HEAD
          path="/staff/order-list"
=======
          path="/manager/order-list"
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
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
<<<<<<< HEAD
          path="/staff/order-list/order-detail/:id"
=======
          path="/manager/order-list/order-detail/:id"
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
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
<<<<<<< HEAD

=======
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
                <OrderDetailForSaleStaff />
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
              <ListDelivered />
              <OrderList />
            </div>
          }
        />
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
        {/* Admin routes */}
        <Route
          path="/admin/dashboard"
          element={
            <div className="flex">
              <SideBarv2 />
              <div className="flex-1">
<<<<<<< HEAD
                <Headerv3 />
                <Dashboard />
=======
                <Headerv2 />
                <DashBoard />
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
              </div>
            </div>
          }
        />
        <Route
          path="/admin/management-staff"
          element={
            <div className="flex">
              <SideBarv2 />
              <div className="flex-1">
<<<<<<< HEAD
                <Headerv3 />
=======
                <Headerv2 />
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
                <ManagementStaff />
              </div>
            </div>
          }
        />
        <Route
          path="/admin/staff-detail/:id"
          element={
            <div className="flex">
              <SideBarv2 />
              <div className="flex-1">
<<<<<<< HEAD
                <Headerv3 />
=======
                <Headerv2 />
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
                <StaffDetail />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
<<<<<<< HEAD

export default App;
=======
export default App;
>>>>>>> 035c948cd833919803e805aea2ffd562be2e5201
