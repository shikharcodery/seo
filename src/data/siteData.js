import {
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Compass,
  FileSearch,
  Globe2,
  LineChart,
  Link2,
  Megaphone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const trustedLogos = ["Aster", "Vanta", "Northwell", "Mercury", "Linear", "Atlas", "Summit", "Nova"];

export const services = [
  {
    title: "SEO Optimization",
    icon: Search,
    copy: "Priority keyword maps, intent-led pages, and search architecture built around revenue outcomes.",
  },
  {
    title: "Local SEO",
    icon: Building2,
    copy: "Location pages, GBP systems, citation cleanup, and review loops that compound local demand.",
  },
  {
    title: "Technical SEO",
    icon: Code2,
    copy: "Crawl health, Core Web Vitals, schema, indexation, and migration work handled with engineering care.",
  },
  {
    title: "Content Marketing",
    icon: Megaphone,
    copy: "Editorial engines that turn customer pain, search demand, and product proof into ranking assets.",
  },
  {
    title: "Link Building",
    icon: Link2,
    copy: "Authority campaigns with relevant placements, digital PR angles, and no shortcut-driven risk.",
  },
  {
    title: "SEO Audits",
    icon: FileSearch,
    copy: "A prioritized diagnostic that shows exactly what is suppressing traffic and what to fix first.",
  },
];

export const processSteps = [
  { title: "Discovery", icon: Compass, copy: "We map your market, funnel, competitors, analytics, and technical baseline." },
  { title: "Strategy", icon: Target, copy: "We create the search roadmap: highest-value terms, content gaps, fixes, and revenue bets." },
  { title: "Optimization", icon: Sparkles, copy: "Your pages, site structure, metadata, schema, and internal links get rebuilt for intent." },
  { title: "Growth", icon: Rocket, copy: "We scale content, authority, and local visibility while removing ranking friction." },
  { title: "Reporting", icon: ClipboardCheck, copy: "You get clear weekly signal, monthly insight, and decisions tied to pipeline." },
];

export const results = [
  { company: "B2B SaaS", metric: "+312%", label: "organic demo requests", copy: "Technical cleanup, comparison pages, and high-intent content rebuilt pipeline quality." },
  { company: "Healthcare Network", metric: "+184%", label: "local search calls", copy: "Location SEO and review systems lifted map visibility across 37 locations." },
  { company: "Ecommerce Brand", metric: "+96%", label: "non-brand revenue", copy: "Category architecture and content refreshes moved buying-intent terms into top three." },
];

export const testimonials = [
  {
    name: "Maya Chen",
    role: "VP Marketing, VantaWorks",
    quote: "Northstar found the revenue leaks in our organic funnel within two weeks. Six months later, SEO is our cleanest acquisition channel.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Elliot Reyes",
    role: "Founder, LedgerPeak",
    quote: "The work felt surgical. No vanity reports, no vague roadmap. Just focused fixes, sharper pages, and rankings that turned into calls.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Priya Shah",
    role: "COO, Bloom Dental Group",
    quote: "Our local visibility changed dramatically. We finally understood what was working, what was noise, and where to invest next.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=320&q=80",
  },
];

export const faqs = [
  {
    question: "How quickly can SEO results appear?",
    answer: "Most clients see leading indicators in 30 to 60 days and compounding traffic gains within 90 to 180 days, depending on site health, competition, and execution pace.",
  },
  {
    question: "Do you work with in-house marketing teams?",
    answer: "Yes. We often partner with founders, CMOs, content teams, and developers as the strategy and execution layer for organic growth.",
  },
  {
    question: "What makes your audits different?",
    answer: "We separate noise from business impact. Every recommendation is tied to ranking opportunity, implementation effort, and revenue relevance.",
  },
  {
    question: "Can you handle technical implementation?",
    answer: "We can collaborate with your team or implement directly depending on your stack, access, and approval process.",
  },
];

export const stats = [
  { label: "Clients", value: 500, suffix: "+", icon: Users },
  { label: "Traffic Generated", value: 10, suffix: "M+", icon: Globe2 },
  { label: "Retention Rate", value: 98, suffix: "%", icon: ShieldCheck },
];

export const values = [
  { title: "Clarity before activity", copy: "We do fewer things with sharper intent, then prove what moved the needle.", icon: CheckCircle2 },
  { title: "Systems over stunts", copy: "Durable organic growth comes from repeatable search, content, and authority systems.", icon: BarChart3 },
  { title: "Useful candor", copy: "Clients get direct answers, clean priorities, and no theater around busywork.", icon: LineChart },
];

export const team = [
  { name: "Ariana Wells", role: "Founder & SEO Strategist", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=640&q=80" },
  { name: "Noah Grant", role: "Technical SEO Lead", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=640&q=80" },
  { name: "Leah Morgan", role: "Content Director", image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=640&q=80" },
];

export const awards = ["Search Excellence Finalist", "Top B2B SEO Partner", "AEO Strategy Studio", "Technical SEO Leader"];
