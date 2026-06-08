import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { KeyRound } from "lucide-react";
import { processSteps } from "../data/siteData.js";

export default function ProcessTimeline() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative mx-auto mt-14 max-w-4xl transition-all duration-700 ${open ? "min-h-[36rem]" : "min-h-72"}`}>
      <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-1/2" />
      <motion.div
        className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-royal via-violet to-transparent md:left-1/2"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: open ? 1 : 0.18 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="absolute left-5 top-1/2 z-20 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-blue-200/40 bg-black text-blue-100 shadow-glow transition hover:scale-105 hover:border-blue-100 md:left-[calc(50%-3.75rem)]"
        aria-expanded={open}
        aria-label={open ? "Hide process timeline" : "Unfold process timeline"}
        whileTap={{ scale: 0.94 }}
      >
        <motion.span
          animate={open ? { rotate: 0 } : { rotate: [0, -18, 18, -8, 0] }}
          transition={open ? { duration: 0.25 } : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30"
        >
          <KeyRound className="h-5 w-5" />
        </motion.span>
        <span className="absolute inset-0 -z-10 rounded-full bg-blue-500/20 blur-xl" />
        <span className="absolute -right-1 top-1 h-3 w-3 rounded-full bg-blue-200 shadow-glow" />
      </motion.button>

      {!open && (
        <motion.div
          className="absolute left-16 right-0 top-1/2 -translate-y-1/2 md:left-[calc(50%+2.5rem)]"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Click the royal key</p>
          <h3 className="mt-2 max-w-md text-2xl font-black text-white">Unlock the growth process</h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/52">
            The steps stay hidden until you unlock the center line.
          </p>
        </motion.div>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
            }}
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const right = index % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  className={`relative grid gap-5 pl-16 md:grid-cols-2 md:pl-0 ${right ? "" : "md:[&>article]:col-start-2"}`}
                  variants={{
                    hidden: { opacity: 0, y: 24, scale: 0.96, filter: "blur(8px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.58, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  <span className="absolute left-1.5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-blue-200/25 bg-black text-blue-100 shadow-glow md:left-1/2 md:-translate-x-1/2">
                    <Icon className="h-4 w-4" />
                  </span>
                  <article className="premium-block p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Step {index + 1}</p>
                    <h3 className="mt-3 text-xl font-black text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/58">{step.copy}</p>
                  </article>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {open && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="bubble-chip px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition hover:border-blue-200/45 hover:text-white"
          >
            Hide steps
          </button>
        </div>
      )}
    </div>
  );
}
