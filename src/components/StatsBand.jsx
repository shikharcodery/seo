import React from "react";
import { motion } from "framer-motion";
import { stats } from "../data/siteData.js";
import { useCountUp } from "../hooks/useCountUp.js";

export default function StatsBand() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <CountCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
}

function CountCard({ stat }) {
  const { ref, value } = useCountUp(stat.value);
  const Icon = stat.icon;
  return (
    <motion.div
      ref={ref}
      className="premium-block p-6"
      whileHover={{ y: -5 }}
    >
      <span className="icon-tile">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-5 font-display text-4xl font-black text-white">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-white/50">{stat.label}</p>
    </motion.div>
  );
}
