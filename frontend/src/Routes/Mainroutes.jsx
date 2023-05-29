import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Transaction from "../Pages/Transaction";
import Home from "../Pages/Home";
import Accounts from "../Pages/Accounts";
import PrivateRoute from "../Components/PrivateRoute";
import Profile from "../Pages/Profile";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/transaction"
        element={
          <PrivateRoute>
            <Transaction />
          </PrivateRoute>
        }
      />
      <Route
        path="/account"
        element={
          <PrivateRoute>
            <Accounts />
          </PrivateRoute>
        }
      />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default MainRoutes;
