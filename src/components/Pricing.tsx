"use client";

import { useState } from "react";

const PLANS = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    blurb: "For trying things out",
    features: ["1 workspace", "Up to 3 dashboards", "7-day history", "Community support"],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Pro",
    monthly: 19,
    yearly: 15,
    blurb: "For growing teams",
    features: ["Unlimited dashboards", "Real-time data", "Integrations", "Priority support"],
    cta: "Start Pro",
    popular: true,
  },
  {
    name: "Business",
    monthly: 49,
    yearly: 39,
    blurb: "For scale & control",
    features: ["SSO & SAML", "Audit logs", "Role-based access", "Dedicated manager"],
    cta: "Contact sales",
    popular: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <div>
      <div className="mb-10 flex items-center justify-center gap-3 text-sm">
        <span className={yearly ? "text-slate-400" : "font-medium"}>Monthly</span>
        <button
          onClick={() => setYearly((v) => !v)}
          aria-label="Toggle billing period"
          className="relative h-6 w-11 rounded-full bg-indigo-500 transition"
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${
              yearly ? "left-[22px]" : "left-0.5"
            }`}
          />
        </button>
        <span className={yearly ? "font-medium" : "text-slate-400"}>
          Yearly <span className="text-indigo-500">−20%</span>
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-6 ${
              plan.popular
                ? "border-indigo-500 shadow-lg shadow-indigo-500/10"
                : "border-slate-200 dark:border-slate-800"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-6 rounded-full bg-indigo-500 px-3 py-0.5 text-xs font-medium text-white">
                Most popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{plan.blurb}</p>
            <p className="mt-4">
              <span className="text-4xl font-bold">
                ${yearly ? plan.yearly : plan.monthly}
              </span>
              <span className="text-slate-500">/mo</span>
            </p>
            <p className="mt-1 text-xs text-slate-400">
              {plan.monthly === 0
                ? "Free forever"
                : yearly
                  ? "billed yearly"
                  : "billed monthly"}
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-indigo-500">✓</span>
                  <span className="text-slate-600 dark:text-slate-300">{f}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                plan.popular
                  ? "bg-indigo-600 text-white hover:bg-indigo-500"
                  : "border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
