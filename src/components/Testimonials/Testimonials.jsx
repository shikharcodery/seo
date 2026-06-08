import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../../data/siteData.js";

export default function Testimonials() {
  return (
    <div className="mt-14 grid gap-5 lg:grid-cols-3">
      {testimonials.map((item, index) => (
        <motion.article
          key={item.name}
          className="premium-block p-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          whileHover={{ y: -6 }}
        >
          <div className="mb-5 flex gap-1 text-yellow-300">
            {Array.from({ length: 5 }).map((_, star) => (
              <Star key={star} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="text-base leading-8 text-white/72">"{item.quote}"</p>
          <div className="mt-6 flex items-center gap-3">
            <img src={item.image} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
            <div>
              <h3 className="text-sm font-bold text-white">{item.name}</h3>
              <p className="text-xs text-white/45">{item.role}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
