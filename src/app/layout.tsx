import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurora — analytics that feels effortless",
  description:
    "Aurora is the analytics workspace for modern teams: real-time dashboards, collaboration and integrations, in one calm interface.",
};

// Aplica o tema salvo antes da pintura, evitando flash (FOUC).
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem('theme');
    var dark = t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.className} bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
