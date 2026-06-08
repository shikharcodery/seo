import React from "react";
import { motion } from "framer-motion";
import { awards, team, values } from "../data/siteData.js";
import PageShell from "../components/shared/PageShell.jsx";
import SectionHeader from "../components/shared/SectionHeader.jsx";
import Button from "../components/shared/Button.jsx";

const journey = [
  ["2018", "Started as a technical SEO consultancy for venture-backed SaaS teams."],
  ["2020", "Built the content systems practice after seeing clients struggle to turn research into ranking assets."],
  ["2023", "Expanded into local and multi-location SEO for healthcare, services, and franchise brands."],
  ["2026", "Now a focused senior studio for companies that want organic growth tied to measurable demand."],
];

export default function About() {
  document.title = "About Northstar SEO Studio";

  return (
    <PageShell>
      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36">
        <div className="absolute inset-0 bg-grid bg-[length:56px_56px] opacity-25" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative z-10">
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
              Agency story
            </p>
            <h1 className="font-display text-4xl font-black leading-tight text-white min-[420px]:text-5xl sm:text-6xl">
              We started Northstar to make SEO feel less mysterious and more accountable.
            </h1>
            <p className="mt-5 text-base leading-7 text-white/64 sm:mt-6 sm:text-lg sm:leading-8">
              Our mission is simple: help ambitious teams earn durable organic demand with strategy they understand, execution they can trust, and reporting that supports real decisions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" className="w-full sm:w-auto">Talk to the team</Button>
              <Button href="/" variant="ghost" className="w-full sm:w-auto">Explore services</Button>
            </div>
          </div>
          <div className="glass relative z-10 overflow-hidden rounded-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
              alt="SEO agency team planning organic growth strategy"
              className="h-72 w-full rounded-lg object-cover sm:h-[32rem]"
            />
          </div>
        </div>
      </section>

      <section className="section-pad section-band">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Journey" title="Built through hands-on search work, not agency theater." />
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {journey.map(([year, copy], index) => (
              <motion.article
                key={year}
                className="premium-block p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <p className="font-display text-3xl font-black text-blue-200">{year}</p>
                <p className="mt-4 text-sm leading-7 text-white/58">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Philosophy"
            title="Search is a compounding asset when the work is honest."
            copy="We care about crawlability, intent, authority, and customer usefulness because those are the parts that survive algorithm cycles. Our culture is calm, senior, precise, and biased toward visible progress."
          />
          <div className="grid gap-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.title}
                  className="premium-block flex flex-col gap-4 p-5 min-[420px]:flex-row sm:p-6"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="icon-tile">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">{value.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">{value.copy}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad section-band">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Team" title="Senior operators across strategy, technical SEO, and content." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.article
                key={member.name}
                className="premium-block group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                className="h-64 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0 sm:h-80"
                />
                <div className="p-6">
                  <h3 className="text-xl font-black text-white">{member.name}</h3>
                  <p className="mt-1 text-sm text-blue-200">{member.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-4">
            {awards.map((award) => (
              <div key={award} className="premium-block p-5 text-center text-sm font-bold text-white/72">
                {award}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
