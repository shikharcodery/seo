import React from "react";
import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import { trustedLogos } from "../data/siteData.js";

export default function LogoMarquee() {
  const logos = trustedLogos;

  return (
    <section id="trusted" className="relative overflow-hidden border-y border-white/10 bg-black py-10 sm:py-12">
      <div className="absolute inset-0 bg-grid bg-[length:40px_40px] opacity-15 sm:bg-[length:44px_44px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/38">
              Trusted by growth teams and founders
            </p>
            <h2 className="mt-2 font-display text-2xl font-black text-white sm:text-3xl">
              Brands that move with Northstar
            </h2>
          </div>
          <div className="bubble-chip mx-auto inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-100 sm:mx-0">
            <Rocket className="h-4 w-4" />
            Growth partners
          </div>
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-8">
          {logos.map((logo, index) => (
            <motion.div
              key={`${logo}-${index}`}
              className="premium-block group grid h-24 min-w-[9.4rem] snap-center place-items-center px-3 text-center transition duration-300 hover:-translate-y-1 sm:min-w-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.62, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[0.55rem] font-black text-white/35">
                {index + 1}
              </span>
              <span className="absolute left-3 top-3 text-blue-200/55 transition group-hover:text-blue-100">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <span className="text-xs font-black uppercase tracking-[0.16em] text-white/68 transition group-hover:text-white">
                {logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
