import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants.js";

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <motion.article
      className="premium-block group p-6 transition duration-300 hover:-translate-y-2"
      variants={fadeUp}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
      <motion.div
        className="icon-tile mb-6"
        whileHover={{ rotate: -6, scale: 1.08 }}
      >
        <Icon className="h-5 w-5" />
      </motion.div>
      <h3 className="text-xl font-black text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/58">{service.copy}</p>
    </motion.article>
  );
}
