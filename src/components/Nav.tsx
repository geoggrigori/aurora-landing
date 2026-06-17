import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
            A
          </span>
          Aurora
        </a>
        <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex dark:text-slate-300">
          <a href="#features" className="hover:text-slate-900 dark:hover:text-white">
            Features
          </a>
          <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-slate-900 dark:hover:text-white">
            Customers
          </a>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#pricing"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
}
