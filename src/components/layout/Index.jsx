import React, { useState, useEffect } from "react";

// components
import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", responsiveHandler);
  }, []);

  const responsiveHandler = () => {
    if (window.innerWidth <= 780) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <>
      {state ? <ResponsiveNavbar /> : <Navbar />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
