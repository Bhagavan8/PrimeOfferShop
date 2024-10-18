import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import TrackOrder from "./components/TrackOrder.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import HomePage from "./components/Home.js";
import ImageUpload from "./components/ImageUpload.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trackOrder" element={<TrackOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/imageUpload" element={<ImageUpload />} />
        </Routes>
  </BrowserRouter>
);
