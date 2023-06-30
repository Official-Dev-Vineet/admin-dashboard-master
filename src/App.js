import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./components/Customers/Customer";
import Dashboard from "./components/DashBoard/Dashboard";
import Navbar from "./components/Relative-Component/Navbar";
import SideBar from "./components/Sidebar/SideBar";
import User from "./components/Customers/user/User";
import Card from "./components/Customers/user/Card";
import Order from "./components/Orders/Order";
import Analytics from "./components/Analytics/Analytics";
import Message from "./components/Message/Message";
import Product from "./components/Products/Product";
import Report from "./components/Reports/Report";
import Setting from "./components/Settings/Setting";
import Account from "./components/Account/Account";
import Logout from "./components/Account/Logout";
import AdminProfile from "./components/AdminPannel/AdminProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <SideBar />
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Customers" element={<Customer />}>
          <Route path="/Customers/:user" element={<User />}></Route>
        </Route>
        <Route path="/Customers/:user/:data" element={<Card />} />
        <Route path="/Orders" element={<Order />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Messages" element={<Message />}>
          <Route path="/Messages/:user" element={<Message />} />
        </Route>
        <Route path="/Products" element={<Product />}>
          <Route path="/Products/:item" element={<Product />} />
        </Route>
        <Route path="/Reports" element={<Report />} />
        <Route path="/Settings" element={<Setting />} />
        <Route path="/Add-account" element={<Account />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/editProfile" element={<AdminProfile />} />
        <Route path="/*" element={<div>404 page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
