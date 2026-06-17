import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Pricing } from "@/components/Pricing";

const FEATURES = [
  {
    icon: "📊",
    title: "Real-time dashboards",
    body: "Live metrics that update as your data does — no refresh, no waiting.",
  },
  {
    icon: "🤝",
    title: "Built for collaboration",
    body: "Comment, share and annotate. Your whole team on the same page.",
  },
  {
    icon: "🔌",
    title: "50+ integrations",
    body: "Connect your warehouse, CRM and tools in a couple of clicks.",
  },
  {
    icon: "🔒",
    title: "Secure by default",
    body: "SSO, granular permissions and audit logs baked in from day one.",
  },
  {
    icon: "⚡",
    title: "Fast, everywhere",
    body: "Edge-rendered and snappy, from your laptop to your phone.",
  },
  {
    icon: "🎯",
    title: "Calm by design",
    body: "An interface that gets out of your way so you can focus on the work.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Aurora replaced three tools for us. Our team actually enjoys checking metrics now.",
    name: "Mariana Lopes",
    role: "Head of Ops, Northwind",
  },
  {
    quote: "Set up in an afternoon. The real-time dashboards are genuinely beautiful.",
    name: "Daniel Reyes",
    role: "Founder, Cedarworks",
  },
  {
    quote: "The calmest analytics product we've used. Onboarding was effortless.",
    name: "Priya Nair",
    role: "PM, Summit",
  },
];

export default function Page() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-400/30 to-fuchsia-400/30 blur-3xl" />
        <Reveal>
          <span className="inline-block rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400">
            ✨ Now with AI-assisted insights
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-bold tracking-tight sm:text-6xl">
            Analytics that feels{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
              effortless
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            Aurora brings real-time dashboards, collaboration and integrations
            together in one calm, fast workspace for modern teams.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pricing"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Start free
            </a>
            <a
              href="#features"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              See features
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900">
            <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 dark:from-slate-800 dark:to-slate-900">
              <div className="grid grid-cols-3 gap-4">
                {["Revenue", "Active users", "Conversion"].map((k, i) => (
                  <div
                    key={k}
                    className="rounded-lg bg-white p-4 text-left shadow-sm dark:bg-slate-800"
                  >
                    <p className="text-xs text-slate-500">{k}</p>
                    <p className="mt-1 text-xl font-bold">
                      {["$48.2k", "12,480", "3.9%"][i]}
                    </p>
                    <div className="mt-3 flex h-12 items-end gap-1">
                      {[40, 55, 35, 70, 60, 85, 95].map((h, j) => (
                        <div
                          key={j}
                          style={{ height: `${h}%` }}
                          className="flex-1 rounded-t bg-gradient-to-t from-indigo-500 to-fuchsia-400"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold tracking-tight">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-slate-600 dark:text-slate-300">
              Thoughtful defaults and a clean interface — so your team spends time
              on decisions, not on tooling.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800">
                  <div className="text-3xl">{f.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50 px-6 py-24 dark:bg-slate-900/50">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-slate-600 dark:text-slate-300">
              Start free. Upgrade when you&apos;re ready. Cancel anytime.
            </p>
          </Reveal>
          <div className="mt-12">
            <Pricing />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold tracking-tight">
              Loved by modern teams
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="h-full rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                  <blockquote className="text-slate-700 dark:text-slate-200">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-slate-500"> · {t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 px-8 py-16 text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to see your data clearly?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/80">
              Join thousands of teams using Aurora to make faster, calmer
              decisions.
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Start free — no card required
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-slate-200 px-6 py-10 text-center text-sm text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} Aurora. A demo project. Built with Next.js &
        Tailwind CSS.
      </footer>
    </>
  );
}
