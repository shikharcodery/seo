import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const styles = {
  primary:
    "bg-white text-ink hover:bg-blue-50 shadow-glow focus-visible:outline-white",
  dark:
    "bg-royal text-white hover:bg-blue-500 shadow-glow focus-visible:outline-royal",
  ghost:
    "border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-white/70",
};

export default function Button({ children, href, variant = "primary", className = "", icon = true, ...props }) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";
  const classes = `${base} ${styles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <Link className={classes} to={href} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  );
}
