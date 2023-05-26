import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Transaction from "../Pages/Transaction";
import Home from "../Pages/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/transaction" element={<Transaction />} />
    </Routes>
  );
};

export default MainRoutes;
