import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  ChevronLeft,
  ClipboardCheck,
  FileSearch,
  Globe2,
  LayoutDashboard,
  MapPinned,
} from "lucide-react";
import SectionHeader from "./shared/SectionHeader.jsx";

const demoCards = [
  {
    title: "SEO Audit Demo",
    icon: FileSearch,
    copy: "See how we prioritize crawl, indexation, intent, content, and authority issues.",
    metric: "142 fixes",
    lift: "+38% visibility",
    accent: "#38bdf8",
    secondary: "#a78bfa",
  },
  {
    title: "Ranking Dashboard Demo",
    icon: LayoutDashboard,
    copy: "Preview keyword movement, SERP ownership, page groups, and revenue signals.",
    metric: "1,284 keywords",
    lift: "312 top 10",
    accent: "#a78bfa",
    secondary: "#22d3ee",
  },
  {
    title: "Technical SEO Report",
    icon: ClipboardCheck,
    copy: "Explore a technical report with CWV, schema, canonicals, redirects, and crawl paths.",
    metric: "98 CWV score",
    lift: "-41% errors",
    accent: "#34d399",
    secondary: "#60a5fa",
  },
  {
    title: "Local SEO Growth Map",
    icon: MapPinned,
    copy: "Review location visibility, map pack wins, call growth, and review velocity.",
    metric: "37 locations",
    lift: "+184% calls",
    accent: "#f59e0b",
    secondary: "#22d3ee",
  },
  {
    title: "Content Strategy Board",
    icon: Globe2,
    copy: "Inspect topic clusters, content briefs, search intent, and publishing priorities.",
    metric: "64 briefs",
    lift: "+91% clicks",
    accent: "#fb7185",
    secondary: "#a78bfa",
  },
  {
    title: "Traffic Performance Tracker",
    icon: Activity,
    copy: "Track sessions, conversions, assisted pipeline, landing pages, and channel quality.",
    metric: "89K clicks",
    lift: "$2.4M influenced",
    accent: "#22d3ee",
    secondary: "#34d399",
  },
];

const tabs = ["Overview", "Metrics", "Insights", "Next Steps"];

export default function LiveDemos() {
  const [activeDemo, setActiveDemo] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");

  const openDemo = (demo) => {
    setActiveDemo(demo);
    setActiveTab("Overview");
  };

  return (
    <section className="section-pad space-stage overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-24 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ x: ["-8%", "8%", "-8%"], opacity: [0.28, 0.46, 0.28] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Live Proof"
          title="Explore our live SEO work before you book a call."
          copy="Preview real dashboards, campaign workflows, audit reports, ranking improvements, and live project examples built to show how we grow organic visibility."
        />

        <AnimatePresence mode="wait">
          {activeDemo ? (
            <InlineDemoView
              key="demo-view"
              demo={activeDemo}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onBack={() => setActiveDemo(null)}
            />
          ) : (
            <motion.div
              key="demo-grid"
              className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              exit={{ opacity: 0, y: 18 }}
              viewport={{ once: true, margin: "-80px" }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {demoCards.map((demo) => {
                const Icon = demo.icon;
                return (
                  <motion.article
                    key={demo.title}
                    style={{ "--space-accent": demo.accent, "--space-secondary": demo.secondary }}
                    variants={{
                      hidden: { opacity: 0, y: 34, scale: 0.96, filter: "blur(10px)" },
                      visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.82, ease: [0.16, 1, 0.3, 1] } },
                    }}
                    whileHover={{ y: -10, scale: 1.025, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } }}
                    className="premium-block space-card group p-6 transition duration-300"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--space-accent)] to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className="space-icon">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="space-chip px-3 py-1 text-xs font-bold">
                        Orbit Live
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white">{demo.title}</h3>
                    <p className="mt-3 min-h-20 text-sm leading-7 text-white/58">{demo.copy}</p>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <MiniMetric label="Signal" value={demo.metric} />
                      <MiniMetric label="Impact" value={demo.lift} />
                    </div>
                    <button
                      type="button"
                      onClick={() => openDemo(demo)}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white transition hover:border-blue-300/45 hover:bg-blue-500/15"
                    >
                      View Demo
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function InlineDemoView({ demo, activeTab, setActiveTab, onBack }) {
  const Icon = demo.icon;

  return (
    <motion.div
      style={{ "--space-accent": demo.accent, "--space-secondary": demo.secondary }}
      className="premium-block space-card mt-14"
      initial={{ opacity: 0, y: 36, scale: 0.96, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: 18, scale: 0.97, filter: "blur(10px)" }}
      transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col gap-5 border-b border-white/10 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
        <div className="flex gap-4">
          <span className="space-icon">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--space-accent)]">Mission Preview</p>
            <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">{demo.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/54">{demo.copy}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 text-sm font-bold text-white transition hover:border-blue-300/40 hover:bg-blue-500/15 sm:shrink-0"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto border-b border-white/10 px-5 py-3 sm:px-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition ${
              activeTab === tab
                ? "text-white shadow-glow"
                : "bubble-chip text-white/55 hover:text-white"
            }`}
            style={activeTab === tab ? { background: `linear-gradient(135deg, ${demo.accent}, ${demo.secondary})` } : undefined}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="h-[36rem] overflow-y-auto p-5 sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr]">
          <div className="premium-block space-card p-5">
            <div className="mb-5 flex items-center justify-between">
              <h4 className="text-lg font-black text-white">{activeTab}</h4>
              <span className="space-chip px-3 py-1 text-xs font-bold">Telemetry</span>
            </div>
            <DemoPanel tab={activeTab} demo={demo} />
            <MockDashboard demo={demo} />
          </div>
          <div className="premium-block space-card p-5">
            <span className="space-icon h-11 w-11">
              <BarChart3 className="h-5 w-5" />
            </span>
            <p className="mt-5 text-sm leading-7 text-white/58">
              This mission-control preview shows the type of work clients can inspect before a call: priorities,
              telemetry, insights, and next actions.
            </p>
            <div className="mt-6 space-y-3">
              <MiniMetric label="Primary Metric" value={demo.metric} />
              <MiniMetric label="Projected Lift" value={demo.lift} />
              <MiniMetric label="Demo Mode" value="Frontend only" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MiniMetric({ label, value }) {
  return (
    <div className="space-metric p-3">
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/35">{label}</p>
      <p className="mt-2 text-sm font-black text-white">{value}</p>
    </div>
  );
}

function DemoPanel({ tab, demo }) {
  const content = {
    Overview: [
      "Campaign objective mapped to measurable organic demand.",
      "Top blockers grouped by effort, impact, and owner.",
      "Live-style workflow showing what gets handled first.",
    ],
    Metrics: [
      `${demo.metric} currently tracked in the sample workspace.`,
      `${demo.lift} modeled as the primary outcome signal.`,
      "Conversion, ranking, traffic, and technical health tracked together.",
    ],
    Insights: [
      "Highest-value pages need stronger intent matching.",
      "Technical friction is suppressing crawl depth and internal authority.",
      "Competitors are winning with clearer topical clusters.",
    ],
    "Next Steps": [
      "Approve the priority sprint.",
      "Ship technical fixes and update key landing pages.",
      "Monitor lift weekly and scale the winning cluster.",
    ],
  };

  return (
    <div className="space-y-3">
      {content[tab].map((item, index) => (
        <motion.div
          key={item}
          className="space-metric flex gap-3 p-4"
          initial={{ opacity: 0, x: -16, scale: 0.98, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.42, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full shadow-glow" style={{ backgroundColor: demo.accent }} />
          <p className="text-sm leading-6 text-white/68">{item}</p>
        </motion.div>
      ))}
    </div>
  );
}

function MockDashboard({ demo }) {
  const bars = [44, 68, 52, 84, 73, 92, 64, 88];

  return (
    <div className="premium-block space-card mt-5 p-5">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/38">Orbit workspace</p>
        <span className="space-chip px-3 py-1 text-xs font-bold">
          In Orbit
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <MiniMetric label="Current Signal" value={demo.metric} />
        <MiniMetric label="Growth Lift" value={demo.lift} />
        <MiniMetric label="Priority" value="High impact" />
      </div>
      <div className="space-metric mt-5 flex h-44 items-end gap-2 p-4">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            className="flex-1 rounded-t-lg"
            style={{ background: `linear-gradient(to top, ${demo.accent}, ${demo.secondary})` }}
            initial={{ height: 12 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.82, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>
    </div>
  );
}
