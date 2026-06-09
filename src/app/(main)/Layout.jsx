import BreakingNews from "@/components/sheard/BreakingNews";
import Header from "@/components/sheard/Header";
import Navbar from "@/components/sheard/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
