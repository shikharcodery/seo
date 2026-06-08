import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "../../data/siteData.js";

export default function FAQ({ items = faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto mt-12 max-w-3xl space-y-3">
      {items.map((item, index) => (
        <div key={item.question} className="premium-block">
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            <span className="text-base font-bold text-white">{item.question}</span>
            <span className="icon-tile h-9 w-9">
              <Plus className={`h-5 w-5 shrink-0 transition ${open === index ? "rotate-45" : ""}`} />
            </span>
          </button>
          <AnimatePresence>
            {open === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm leading-7 text-white/58">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
