import Header from "@/components/sheard/Header";
import Navbar from "@/components/sheard/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default MainLayout;
