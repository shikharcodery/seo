import React from "react";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../shared/Button.jsx";
import { services } from "../../data/siteData.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="font-display text-base font-black uppercase tracking-[0.2em]">Northstar</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/56">
            Premium SEO strategy, technical execution, and content systems for teams that want organic growth tied to revenue.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Linkedin, Mail].map((Icon, index) => (
              <a
                href="mailto:hello@northstarseo.studio"
                key={index}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/25 hover:text-white"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Company" links={[["Home", "/"], ["About", "/about"], ["Contact", "/contact"]]} />
        <FooterColumn title="Services" links={services.slice(0, 5).map((service) => [service.title, "/contact"])} />

        <div>
          <h3 className="text-sm font-bold text-white">Growth Notes</h3>
          <p className="mt-4 text-sm leading-7 text-white/56">
            Monthly SEO teardown, strategy memos, and technical wins worth stealing.
          </p>
          <form className="mt-5 flex overflow-hidden rounded-full border border-white/12 bg-white/[0.04] p-1">
            <input
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/35"
              placeholder="Email address"
              type="email"
            />
            <Button variant="dark" className="min-h-10 px-4" icon={false}>
              Join
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Copyright 2026 Northstar SEO Studio. All rights reserved.</p>
          <p>Privacy Policy · Terms · Accessibility</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link className="text-sm text-white/54 transition hover:text-white" to={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
