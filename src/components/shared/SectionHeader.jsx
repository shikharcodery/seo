import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants.js";

export default function SectionHeader({ eyebrow, title, copy, align = "center", className = "" }) {
  return (
    <motion.div
      className={`mx-auto max-w-3xl ${align === "left" ? "mx-0 text-left" : "text-center"} ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {eyebrow && (
        <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg">{copy}</p>}
    </motion.div>
  );
}
