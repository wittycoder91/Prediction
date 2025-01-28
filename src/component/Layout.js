// components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Switcher from "./Switcher";

export default function Layout({ children }) {
  return (
    <>
      <Navbar navClass="navbar-white" />
      <main>{children}</main>
      <Footer />
      <Switcher />
    </>
  );
}
