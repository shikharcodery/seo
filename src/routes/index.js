import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";

export const routes = [
  { path: "/", element: Home, label: "Home" },
  { path: "/about", element: About, label: "About" },
  { path: "/contact", element: Contact, label: "Contact" },
];
