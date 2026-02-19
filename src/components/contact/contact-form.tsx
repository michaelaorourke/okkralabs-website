"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "sent" | "error";
type FieldErrors = Record<string, string>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(data: FormData): FieldErrors {
    const fieldErrors: FieldErrors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const details = String(data.get("details") || "").trim();

    if (!name) fieldErrors.name = "Name is required.";
    if (!email) {
      fieldErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      fieldErrors.email = "Please enter a valid email address.";
    }
    if (!details) fieldErrors.details = "Please describe your project.";

    return fieldErrors;
  }

  async function onSubmit(formData: FormData) {
    // Honeypot check — bots will fill the hidden field
    const honeypot = String(formData.get("website") || "");
    if (honeypot) return;

    const fieldErrors = validate(formData);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("sending");
    setMessage("");

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      details: String(formData.get("details") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setMessage("Thanks — we received your message. We'll reply within 1–2 business days.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email hello@okkralabs.com instead.");
    }
  }

  return (
    <form action={onSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from real users, attracts bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          type="text"
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Name"
          id="contact-name"
          name="name"
          placeholder="Your name"
          required
          error={errors.name}
        />
        <Field
          label="Email"
          id="contact-email"
          name="email"
          placeholder="you@company.com"
          type="email"
          required
          error={errors.email}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Company"
          id="contact-company"
          name="company"
          placeholder="Company (optional)"
        />
        <div className="hidden md:block" />
      </div>
      <div>
        <label htmlFor="contact-details" className="block text-sm text-white/70">
          Project description
        </label>
        <textarea
          id="contact-details"
          name="details"
          required
          rows={6}
          placeholder="What are you building or improving? Timeline? Any constraints?"
          className="mt-2 w-full rounded-xl2 border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-accent-400/30"
        />
        {errors.details && (
          <p className="mt-1 text-xs text-red-300/90">{errors.details}</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <Button type="submit" disabled={status === "sending"} className="h-11 px-5">
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>
        <a
          href="mailto:hello@okkralabs.com"
          className="text-sm text-white/60 hover:text-white transition"
        >
          Prefer email? hello@okkralabs.com
        </a>
      </div>

      {message ? (
        <div
          className={`text-sm ${
            status === "sent" ? "text-white/80" : "text-red-200/90"
          }`}
        >
          {message}
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  id,
  name,
  placeholder,
  type = "text",
  required,
  error,
}: {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-white/70">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl2 border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-accent-400/30"
      />
      {error && (
        <p className="mt-1 text-xs text-red-300/90">{error}</p>
      )}
    </div>
  );
}
