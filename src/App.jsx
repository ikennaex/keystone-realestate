import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router";
import About from "./Pages/About/About";
import Listings from "./Pages/Listings/Lisitngs";
import ListingDetails from "./Pages/Listings/LisitngDetails";
import ScrollToTop from "./Components/ScrollToTop";
import BuyersPage from "./Pages/Buyers/BuyersPage";
import Contact from "./Pages/Contact/Contact";
import Careers from "./Pages/Careers/Careers";
import PostProperty from "./Pages/Agent/PostProperty";
import AgentRegister from "./Pages/Agent/AgentRegister";
import AgentLogin from "./Pages/Agent/AgentLogin";
import AdminRegister from "./Pages/Admin/AdminRegister";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminDashboard from "./Pages/Admin/AdminDashboard/AdminDashboard";
import AgentDashboard from "./Pages/Agent/AgentDashboard";
import AgentViewEnquiries from "./Pages/Agent/AgentViewEnquiries";
import UserDashboard from "./Pages/User/UserDashboard";
import AgentAuthGuard from "./Contexts/AgentAuthGuard";
import AgentPublicGuard from "./Contexts/AgentPublicGuard";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path = "/"  element = {<Homepage />} />
        <Route path = "/about"  element = {<About />} />
        <Route path = "/listings"  element = {<Listings />} />
        <Route path = "/listings/:id"  element = {<ListingDetails />} />
        <Route path = "/buyers"  element = {<BuyersPage />} />
        <Route path = "/contact"  element = {<Contact />} />
        <Route path = "/careers"  element = {<Careers />} />

        {/* User Routes */}
        <Route path="user">
        <Route path = "dashboard"  element = {<UserDashboard />} />
        </Route>

        {/* Agent Routes */}
        <Route path="agent">
        <Route element={<AgentPublicGuard />}>
        <Route path = "register"  element = {<AgentRegister />} />
        <Route path = "login"  element = {<AgentLogin />} />
        </Route>

        <Route element={<AgentAuthGuard />}>
        <Route path = "post-property"  element = {<PostProperty />} />
        <Route path = "dashboard"  element = {<AgentDashboard />} />
        <Route path = "enquiries"  element = {<AgentViewEnquiries />} />
        </Route>
        </Route>

        {/* Admin Routes  */}
        <Route path = "/admin-register"  element = {<AdminRegister />} />
        <Route path = "/admin-login"  element = {<AdminLogin />} />
        <Route path = "/admin-dashboard"  element = {<AdminDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
