import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import { useRouteScroll } from "./hooks/useRouteScroll.js";
import { useSmoothScroll } from "./hooks/useSmoothScroll.js";

export default function App() {
  const location = useLocation();
  useSmoothScroll();
  useRouteScroll();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
