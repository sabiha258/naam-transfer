"use client";

import { useState } from "react";
import { services, whatsappNumber } from "@/lib/nav";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function BookServiceForm({
  defaultServiceHref,
  defaultCity,
  onSuccess,
}: {
  defaultServiceHref?: string;
  defaultCity?: string;
  onSuccess?: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState(defaultCity || "Ahmedabad");
  const [selectedHrefs, setSelectedHrefs] = useState<string[]>(
    defaultServiceHref ? [defaultServiceHref] : ["/services/electricity"]
  );
  const [electricityProvider, setElectricityProvider] = useState("Torrent Power");
  const [gasProvider, setGasProvider] = useState("Gujarat Gas");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (href: string) => {
    setSelectedHrefs((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    );
  };

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
    if (newCity === "Surat") {
      setElectricityProvider("DGVCL (Surat)");
    } else {
      setElectricityProvider("Torrent Power");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedNames = services
      .filter((s) => selectedHrefs.includes(s.href))
      .map((s) => s.name);

    const lines = [
      `Hi Naam Transfer, I'd like help with ${selectedNames.length ? selectedNames.join(", ") : "a name transfer"}.`,
      defaultCity ? `City / Area: ${defaultCity}` : null,
      name ? `Name: ${name}` : null,
      phone ? `Phone: ${phone}` : null,
      email ? `Email: ${email}` : null,
      selectedHrefs.includes("/services/electricity") && electricityProvider
        ? `Electricity provider: ${electricityProvider}`
        : null,
      selectedHrefs.includes("/services/gas") && gasProvider
        ? `Gas provider: ${gasProvider}`
        : null,
    ].filter(Boolean);

    // Save lead to Google Sheet via backend API
    try {
      await fetch("/api/book-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          city,
          services: selectedNames,
          electricityProvider: selectedHrefs.includes("/services/electricity") ? electricityProvider : null,
          gasProvider: selectedHrefs.includes("/services/gas") ? gasProvider : null,
        }),
      });
    } catch (error) {
      console.error("Failed to log booking to sheet:", error);
    }

    // Auto-detect device and build WhatsApp URL (Desktop Web vs Mobile App)
    const whatsappUrl = getWhatsAppUrl(whatsappNumber, lines.join("\n"));
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-1">
        <h3 className="font-sans text-base font-bold text-brand-navy">Start Your Name Transfer</h3>
        <p className="text-xs text-foreground-dim">Fill in your details below to submit data and connect via WhatsApp.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-dim">Full name *</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-dim/50 focus:border-brand-primary focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-dim">Mobile number *</span>
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 XXXXX XXXXX"
            className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-dim/50 focus:border-brand-primary focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-dim">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-dim/50 focus:border-brand-primary focus:outline-none"
          />
        </label>
      </div>

      {/* Service Area Selection - Removed as requested */}
      {/* 
      <fieldset className="flex flex-col gap-2 border-t border-border pt-4">
        <legend className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-dim">
          Select Service Area *
        </legend>
        <div className="mt-1 flex flex-wrap gap-3">
          {["Ahmedabad", "Surat"].map((cityName) => (
            <label
              key={cityName}
              className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-all ${
                city === cityName
                  ? "border-brand-primary bg-brand-primary/10 text-brand-primary shadow-sm"
                  : "border-border bg-background text-foreground hover:bg-surface-2"
              }`}
            >
              <input
                type="radio"
                name="cityArea"
                value={cityName}
                checked={city === cityName}
                onChange={() => handleCityChange(cityName)}
                className="h-4 w-4 border-border accent-brand-primary"
              />
              {cityName}
            </label>
          ))}
        </div>
      </fieldset>
      */}

      {/* Services Selection */}
      <fieldset className="flex flex-col gap-2 border-t border-border pt-4">
        <legend className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-dim">
          Services to Transfer
        </legend>
        <div className="mt-1 flex flex-wrap gap-4">
          {services.map((s) => (
            <label key={s.href} className="flex cursor-pointer items-center gap-2 text-sm font-medium text-foreground">
              <input
                type="checkbox"
                checked={selectedHrefs.includes(s.href)}
                onChange={() => toggleService(s.href)}
                className="h-4 w-4 rounded border-border accent-brand-primary"
              />
              {s.name}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Electricity Provider Selection */}
      {selectedHrefs.includes("/services/electricity") && (
        <fieldset className="flex flex-col gap-2 border-t border-border pt-4">
          <legend className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-dim">
            Electricity Provider
          </legend>
          <div className="mt-1 flex flex-wrap gap-3">
            {["Torrent Power", "DGVCL (Surat)", "UGVCL (GEB)"/*, "MGVCL (Vadodara)", "PGVCL (Rajkot)"*/].map((provider) => (
              <label key={provider} className="flex cursor-pointer items-center gap-2 text-sm font-medium text-foreground">
                <input
                  type="radio"
                  name="electricityProvider"
                  value={provider}
                  checked={electricityProvider === provider}
                  onChange={() => setElectricityProvider(provider)}
                  className="h-4 w-4 border-border accent-brand-primary"
                />
                {provider}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {/* Gas Provider Selection */}
      {selectedHrefs.includes("/services/gas") && (
        <fieldset className="flex flex-col gap-2 border-t border-border pt-4">
          <legend className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-dim">
            Gas Provider
          </legend>
          <div className="mt-1 flex flex-wrap gap-4">
            {["Gujarat Gas", "Adani Gas"].map((provider) => (
              <label key={provider} className="flex cursor-pointer items-center gap-2 text-sm font-medium text-foreground">
                <input
                  type="radio"
                  name="gasProvider"
                  value={provider}
                  checked={gasProvider === provider}
                  onChange={() => setGasProvider(provider)}
                  className="h-4 w-4 border-border accent-brand-primary"
                />
                {provider}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white transition-transform hover:brightness-110 active:scale-95 disabled:opacity-50"
      >
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
        {isSubmitting ? "Saving & Redirecting..." : "Send via WhatsApp"}
      </button>
    </form>
  );
}
