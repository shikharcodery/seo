import React from "react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../shared/Button.jsx";
import { navLinks } from "../../data/siteData.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = () => {
    setOpen(false);
    window.requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent("northstar:smooth-scroll-to", { detail: { top: 0 } }));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const linkClass = ({ isActive }) =>
    `px-1 py-2 text-sm font-semibold transition ${
      isActive ? "text-white" : "text-white/66 hover:text-white"
    }`;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-black/55 shadow-glass backdrop-blur-2xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={goHome}>
          <span className="font-display text-base font-black uppercase tracking-[0.2em] text-white sm:text-lg">
            Northstar
          </span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={linkClass} onClick={link.href === "/" ? goHome : undefined}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/contact" variant="dark" className="min-h-11 px-5">
            Get Free SEO Audit
          </Button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.05] text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`lg:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden border-t border-white/10 bg-black/85 backdrop-blur-2xl transition-all duration-300`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-white/75 hover:bg-white/[0.06] hover:text-white"
              onClick={link.href === "/" ? goHome : () => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Button href="/contact" variant="dark" className="mt-2 w-full" onClick={() => setOpen(false)}>
            Get Free SEO Audit
          </Button>
        </div>
      </div>
    </header>
  );
}
