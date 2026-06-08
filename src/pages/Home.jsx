import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero.jsx";
import LogoMarquee from "../components/LogoMarquee.jsx";
import LiveDemos from "../components/LiveDemos.jsx";
import FAQ from "../components/FAQ/FAQ.jsx";
import LeadForm from "../components/LeadForm.jsx";
import ProcessTimeline from "../components/ProcessTimeline.jsx";
import ServiceCard from "../components/ServiceCard/ServiceCard.jsx";
import SectionHeader from "../components/shared/SectionHeader.jsx";
import PageShell from "../components/shared/PageShell.jsx";
import StatsBand from "../components/StatsBand.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import { fadeUp, stagger } from "../animations/variants.js";
import { results, services } from "../data/siteData.js";

export default function Home() {
  document.title = "Northstar SEO Studio | Premium SEO Agency";

  return (
    <PageShell>
      <Hero />
      <LogoMarquee />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Search systems"
            title="Everything your organic channel needs to become a growth engine."
            copy="Strategy, technical execution, content, local visibility, and authority work delivered by one senior team with one clean operating rhythm."
          />
          <motion.div
            className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad section-band">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Why Northstar"
              title="Organic growth without the agency fog."
              copy="You get senior strategy, clean priorities, and execution built around business outcomes. No vanity dashboards. No outsourced mystery work. No theater."
            />
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <StatsBand />
            <div className="premium-block mt-5 p-6">
              <p className="text-sm leading-7 text-white/62">
                We work best with teams that want SEO connected to pipeline, locations, conversions, and durable brand authority. Every sprint has a business case, an owner, and a measurable signal.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Operating rhythm"
            title="A clear path from search diagnosis to measurable lift."
            copy="The process is structured enough to move fast and flexible enough to follow the evidence."
          />
          <ProcessTimeline />
        </div>
      </section>

      <section id="results" className="section-pad section-band">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured results"
            title="Proof that search visibility should show up in revenue conversations."
            copy="Every case study starts with a constraint: technical debt, weak intent matching, thin authority, or local search noise."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {results.map((result, index) => (
              <motion.article
                key={result.company}
                className="premium-block p-6"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <p className="text-sm font-bold text-blue-200">{result.company}</p>
                <p className="mt-8 font-display text-5xl font-black text-white">{result.metric}</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-white/42">{result.label}</p>
                <p className="mt-6 text-sm leading-7 text-white/58">{result.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <LiveDemos />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Client signal"
            title="Trusted by teams that care about the numbers behind the rankings."
          />
          <Testimonials />
        </div>
      </section>

      <section className="section-pad section-band">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="A few straight answers before we talk." />
          <FAQ />
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="glass overflow-hidden rounded-lg p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Free SEO audit</p>
                <h2 className="mt-4 font-display text-3xl font-black leading-tight text-white sm:text-4xl">
                  Find the search opportunities your competitors hope you miss.
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/60">
                  Send your site and we will identify the highest-leverage technical, content, and authority moves to prioritize first.
                </p>
              </div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
