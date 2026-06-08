import React from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import FAQ from "../components/FAQ/FAQ.jsx";
import LeadForm from "../components/LeadForm.jsx";
import PageShell from "../components/shared/PageShell.jsx";
import SectionHeader from "../components/shared/SectionHeader.jsx";

const contactFaq = [
  { question: "What happens after I submit the form?", answer: "We review your site, confirm fit, and send a short diagnostic before booking a working session." },
  { question: "Do you offer one-time audits?", answer: "Yes. We offer standalone audits and ongoing SEO partnerships depending on what your team needs." },
  { question: "Can you support international SEO?", answer: "Yes, especially for SaaS, marketplaces, and multi-region service brands with complex site architecture." },
];

export default function Contact() {
  document.title = "Contact Northstar SEO Studio";

  return (
    <PageShell>
      <section className="relative overflow-hidden pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="absolute inset-0 bg-grid bg-[length:54px_54px] opacity-25" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
              Contact
            </p>
            <h1 className="font-display text-4xl font-black leading-tight text-white min-[420px]:text-5xl sm:text-6xl">
              Let's Grow Your Business
            </h1>
            <p className="mt-5 text-base leading-7 text-white/64 sm:mt-6 sm:text-lg sm:leading-8">
              Tell us where organic search should take you. We will come back with a direct read on the highest-leverage opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="glass rounded-lg p-5 sm:p-8">
            <LeadForm />
          </div>
          <div className="grid gap-4">
            <ContactCard icon={MapPin} label="Office" value="375 Hudson Street, New York, NY" />
            <ContactCard icon={Mail} label="Email" value="hello@northstarseo.studio" />
            <ContactCard icon={Phone} label="Phone" value="+1 (555) 014-7788" />
            <ContactCard icon={Clock} label="Working Hours" value="Monday to Friday, 9:00 AM - 6:00 PM EST" />
            <div className="premium-block relative min-h-64 p-5">
              <div className="absolute inset-0 bg-grid bg-[length:32px_32px] opacity-30" />
              <div className="relative z-10 flex h-full min-h-52 flex-col justify-end">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Map preview</p>
                <h3 className="mt-2 text-xl font-black text-white">Strategy calls worldwide. Studio in NYC.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-band">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Contact FAQ" title="Before we get on the calendar." />
          <FAQ items={contactFaq} />
        </div>
      </section>
    </PageShell>
  );
}

function ContactCard({ icon: Icon, label, value }) {
  return (
    <article className="premium-block flex flex-col gap-4 p-5 min-[420px]:flex-row">
      <span className="icon-tile">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/38">{label}</p>
        <p className="mt-2 text-sm font-semibold leading-6 text-white/76">{value}</p>
      </div>
    </article>
  );
}
