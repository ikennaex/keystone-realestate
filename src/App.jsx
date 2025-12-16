import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router";
import About from "./Pages/About/About";
import Listings from "./Pages/Listings/Lisitngs";
import ListingDetails from "./Pages/Listings/LisitngDetails";
import ScrollToTop from "./Components/ScrollToTop";

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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
