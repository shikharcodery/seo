import React, { useState } from "react";
import Button from "./shared/Button.jsx";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  website: "",
  message: "",
};

const leadEmail = import.meta.env.VITE_LEAD_FORM_EMAIL || "hello@northstarseo.studio";
const leadEndpoint = import.meta.env.VITE_LEAD_FORM_ENDPOINT;

export default function LeadForm({ compact = false }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateLead(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setNotice("Please fix the highlighted fields so we can review your site.");
      return;
    }

    setErrors({});

    const lead = {
      ...values,
      website: normalizeUrl(values.website),
      source: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    setStatus("submitting");
    setNotice("");

    if (leadEndpoint) {
      try {
        const response = await fetch(leadEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(lead),
        });

        if (!response.ok) {
          throw new Error("Lead endpoint rejected the submission.");
        }

        setValues(initialValues);
        setStatus("sent");
        setNotice("Thanks. Your audit request was sent and we will reply soon.");
        return;
      } catch (error) {
        console.error(error);
      }
    }

    openGmailFallback(lead);
    setStatus("sent");
    setNotice("Thanks. A Gmail draft opened with your audit request. Please send it to complete the request.");
  };

  return (
    <form className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`} onSubmit={handleSubmit} noValidate>
      <Field
        error={errors.name}
        label="Name"
        name="name"
        onChange={handleChange}
        placeholder="Your name"
        required
        value={values.name}
      />
      <Field
        error={errors.email}
        label="Email"
        name="email"
        onChange={handleChange}
        placeholder="you@company.com"
        required
        type="email"
        value={values.email}
      />
      <Field
        error={errors.phone}
        label="Phone"
        name="phone"
        onChange={handleChange}
        placeholder="+1 555 012 4567"
        type="tel"
        value={values.phone}
      />
      <Field
        error={errors.website}
        label="Website URL"
        name="website"
        onChange={handleChange}
        placeholder="https://company.com"
        required
        type="url"
        value={values.website}
      />
      <label className={`${compact ? "" : "sm:col-span-2"} block`}>
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-white/45">Message</span>
        <textarea
          className="field-glow min-h-32 w-full px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-blue-300/50"
          name="message"
          onChange={handleChange}
          placeholder="Tell us what you want organic search to do for the business."
          value={values.message}
        />
      </label>
      <div className={compact ? "" : "sm:col-span-2"}>
        <Button disabled={status === "submitting"} variant="dark" className="w-full disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto" type="submit">
          {status === "submitting" ? "Sending..." : "Request Free SEO Audit"}
        </Button>
        {notice && (
          <p className={`mt-3 text-sm font-semibold ${Object.keys(errors).length ? "text-red-200" : "text-blue-200"}`} role="status">
            {notice}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({ error, label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-white/45">{label}</span>
      <input
        aria-invalid={Boolean(error)}
        className={`field-glow h-12 w-full px-4 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-blue-300/50 ${
          error ? "border-red-300/70" : "border-white/10"
        }`}
        {...props}
      />
      {error && <span className="mt-2 block text-xs font-semibold text-red-200">{error}</span>}
    </label>
  );
}

function validateLead(values) {
  const nextErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    nextErrors.email = "Please enter a valid email.";
  }

  if (values.phone.trim() && !/^[+()\d\s.-]{7,}$/.test(values.phone.trim())) {
    nextErrors.phone = "Please enter a valid phone number.";
  }

  try {
    new URL(normalizeUrl(values.website));
  } catch {
    nextErrors.website = "Please enter a valid website URL.";
  }

  return nextErrors;
}

function normalizeUrl(url) {
  const trimmed = url.trim();
  if (!trimmed) return "";
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function openGmailFallback(lead) {
  const subject = encodeURIComponent(`Free SEO audit request: ${lead.website}`);
  const body = encodeURIComponent(
    [
      "New SEO audit request",
      "",
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Phone: ${lead.phone || "Not provided"}`,
      `Website: ${lead.website}`,
      `Message: ${lead.message || "Not provided"}`,
      "",
      `Source page: ${lead.source}`,
      `Submitted: ${lead.submittedAt}`,
    ].join("\n"),
  );

  const gmailWindow = window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(leadEmail)}&su=${subject}&body=${body}`,
    "_blank",
    "noopener,noreferrer",
  );

  if (!gmailWindow) {
    window.location.href = `mailto:${leadEmail}?subject=${subject}&body=${body}`;
  }
}
