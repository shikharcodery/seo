import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, BarChart3, Gauge, Search, TrendingUp } from "lucide-react";
import Button from "../shared/Button.jsx";
import NetworkCanvas from "./NetworkCanvas.jsx";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 noise sm:pt-28">
      <div className="absolute inset-0 bg-[url('https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/img/demo-1-bg.jpg')] bg-cover bg-center opacity-60" />
      <div className="absolute inset-0 bg-black/60" />
      <NetworkCanvas />
      <div className="absolute inset-0 bg-grid bg-[length:54px_54px] opacity-12" />
      <motion.div
        className="absolute inset-x-0 h-56 top-24 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-3xl"
        animate={{ x: ["-20%", "20%", "-20%"], opacity: [0.18, 0.34, 0.18] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-8">
        <div>
          <motion.p
            className="mb-5 inline-flex rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-100"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Premium search growth studio
          </motion.p>
          <motion.h1
            className="max-w-5xl break-words font-display text-4xl font-black leading-[1.02] text-white min-[420px]:text-5xl sm:text-6xl sm:leading-[0.98] lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Rank Higher. Grow Faster. Dominate Search.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-7 text-white/66 sm:mt-7 sm:text-xl sm:leading-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            Northstar builds organic growth systems for ambitious companies: technical SEO, search-led content, local visibility, and authority campaigns that turn rankings into revenue.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <Button href="/contact" className="w-full sm:w-auto">Get My Free Audit</Button>
            <a
              href="#results"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/[0.08] sm:w-auto"
            >
              View Case Studies
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[34rem] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
        >
          <DashboardMockup />
          <FloatingStat className="-left-2 top-10 sm:-left-8" icon={TrendingUp} label="Traffic" value="+247%" />
          <FloatingStat className="-right-1 bottom-16 sm:-right-10" icon={Gauge} label="CWV Score" value="98" />
          <FloatingStat className="left-10 -bottom-5" icon={Search} label="Top 3 Terms" value="128" />
        </motion.div>
      </div>

      <motion.a
        href="#trusted"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/45 md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll
        <ArrowDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
}

function DashboardMockup() {
  const bars = [54, 76, 42, 90, 68, 84, 60, 96];
  return (
    <div className="relative overflow-hidden rounded-lg p-3 glass sm:p-5">
      <div className="glow-box p-3 sm:p-4">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/38">Organic Command Center</p>
            <h3 className="mt-2 text-xl font-black text-white">Growth Velocity</h3>
          </div>
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-400/10 text-emerald-300">Live</span>
        </div>
        <div className="grid gap-3 min-[420px]:grid-cols-3">
          {["Revenue", "Clicks", "Leads"].map((label, index) => (
            <div key={label} className="glow-box p-3">
              <p className="text-xs text-white/42">{label}</p>
              <p className="mt-2 text-lg font-black text-white">{["+41%", "89K", "1.8K"][index]}</p>
            </div>
          ))}
        </div>
        <div className="glow-box mt-5 flex h-40 items-end gap-2 p-3 sm:h-52 sm:gap-3 sm:p-4">
          {bars.map((height, index) => (
            <motion.div
              key={index}
              className="flex-1 rounded-t-lg bg-gradient-to-t from-royal to-violet"
              initial={{ height: 18 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 1.2, delay: index * 0.08, ease: "easeOut" }}
            />
          ))}
        </div>
        <div className="grid gap-3 mt-5 sm:grid-cols-2">
          <Insight icon={BarChart3} title="Keyword lift" value="+68% visibility" />
          <Insight icon={TrendingUp} title="Pipeline" value="$2.4M influenced" />
        </div>
      </div>
    </div>
  );
}

function Insight({ icon: Icon, title, value }) {
  return (
    <div className="glow-box flex items-center gap-3 p-3">
      <span className="grid text-blue-200 rounded-lg h-9 w-9 place-items-center bg-blue-500/15">
        <Icon className="w-4 h-4" />
      </span>
      <div>
        <p className="text-xs text-white/42">{title}</p>
        <p className="text-sm font-bold text-white">{value}</p>
      </div>
    </div>
  );
}

function FloatingStat({ icon: Icon, label, value, className }) {
  return (
    <motion.div
      className={`glass absolute hidden rounded-xl px-4 py-3 sm:block ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-3">
        <span className="grid text-blue-100 rounded-lg h-9 w-9 place-items-center bg-white/10">
          <Icon className="w-4 h-4" />
        </span>
        <div>
          <p className="text-xs text-white/42">{label}</p>
          <p className="text-base font-black text-white">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}
