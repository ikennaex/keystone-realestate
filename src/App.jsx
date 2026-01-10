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
import UserLogin from "./Pages/User/UserLogin";
import UserRegister from "./Pages/User/UserRegister";
import AdminAuthGuard from "./Contexts/AdminAuthGuard";
import UserAuthGuard from "./Contexts/UserAuthGuard";
import AdminPublicGuard from "./Contexts/AdminPublicGuard";
import ServicesPage from "./Pages/Services/ServicesPage";
import AgentVerification from "./Pages/Agent/AgentVerification";
import UserEnquiries from "./Pages/User/UserEnquiries";
import UserPublicGuard from "./Contexts/UserPublicGuard";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/Blog/BlogDetails";

const App = () => {
  return (
    <div>
      {/* Hidden iframe for Mailchimp form submissions */}
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
      
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
        <Route path="/buyers" element={<BuyersPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        {/* User Routes */}
        <Route path="user">
          <Route element={<UserAuthGuard />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="inquiries" element={<UserEnquiries />} />
          </Route>


          <Route element={<UserPublicGuard />}>
          <Route path="login" element={<UserLogin />} />
          <Route path="register" element={<UserRegister />} />
          </Route>
        </Route>

        {/* Agent Routes */}
        <Route path="agent">
          <Route element={<AgentPublicGuard />}>
            <Route path="register" element={<AgentRegister />} />
            <Route path="login" element={<AgentLogin />} />
          </Route>

          <Route element={<AgentAuthGuard />}>
            <Route path="post-property" element={<PostProperty />} />
            <Route path="dashboard" element={<AgentDashboard />} />
            <Route path="enquiries" element={<AgentViewEnquiries />} />
            <Route path="verification" element={<AgentVerification />} />
          </Route>
        </Route>

        {/* Admin Routes  */}
        <Route element={<AdminPublicGuard />}>
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Route>
        <Route element={<AdminAuthGuard />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
