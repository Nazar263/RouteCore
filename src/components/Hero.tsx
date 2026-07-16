"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Monitor, Briefcase } from "lucide-react";

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: 30 }).map((_, i) => {
        const colors = [
          "rgba(0, 212, 170, 0.35)",
          "rgba(59, 130, 246, 0.3)",
          "rgba(6, 182, 212, 0.3)",
          "rgba(52, 255, 212, 0.2)",
        ];
        const size = 1.5 + Math.random() * 2.5;
        return (
          <div
            key={i}
            className="particle"
            style={{
              left: `${5 + Math.random() * 90}%`,
              animationDuration: `${10 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * 12}s`,
              width: `${size}px`,
              height: `${size}px`,
              background: colors[i % colors.length],
              boxShadow: `0 0 ${size * 3}px ${colors[i % colors.length]}`,
            }}
          />
        );
      })}
    </div>
  );
}

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[calc(100vh-5rem)] lg:min-h-screen flex items-center pt-24 pb-12 lg:pt-20 lg:pb-0 overflow-hidden">
      <Particles />

      {/* Hero background glows */}
      <div className="absolute top-[10%] left-[5%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-accent-blue/[0.08] rounded-full blur-[120px] sm:blur-[150px]" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-primary/[0.07] rounded-full blur-[100px] sm:blur-[130px]" />
      <div className="absolute top-[40%] left-[40%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-accent-cyan/[0.05] rounded-full blur-[80px] sm:blur-[100px]" />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/[0.08] border border-primary/20 mb-6 sm:mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary animate-pulse pulse-glow" />
              <span className="text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase">{t("badge")}</span>
            </motion.div>

            <h1 className="mb-5 sm:mb-6 flex flex-col" style={{ gap: "0.15em" }}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[2.5rem] sm:text-6xl lg:text-7xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-space)", lineHeight: 1.1 }}
              >
                {t("title")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[2.5rem] sm:text-6xl lg:text-7xl font-bold tracking-tight gradient-text-green glow-text"
                style={{ fontFamily: "var(--font-space)", lineHeight: 1.15 }}
              >
                {t("titleAccent")}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-lg mb-8 sm:mb-10 leading-relaxed"
            >
              {t("subtitle")}
            </motion.p>

            {/* Salary card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-surface/60 border border-border backdrop-blur-sm mb-6 sm:mb-8 card-hover"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-text-dim">{t("salary")}</p>
                <p className="text-sm sm:text-base font-bold text-primary glow-text">{t("salaryValue")}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4"
            >
              <a
                href="https://t.me/RouteCore_1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 btn-primary text-white font-bold text-sm sm:text-base rounded-xl sm:rounded-2xl"
              >
                {t("apply")}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <div className="flex items-center gap-4 sm:gap-5 text-xs sm:text-sm text-text-dim">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <Monitor className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  {t("remote")}
                </span>
                <span className="w-px h-3.5 sm:h-4 bg-border" />
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  {t("fulltime")}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — laptop mockup illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute -inset-8 sm:-inset-10 bg-gradient-to-br from-accent-blue/10 via-primary/5 to-accent-cyan/10 rounded-3xl blur-3xl" />

              {/* Laptop mockup */}
              <motion.div
                animate={{ boxShadow: ["0 0 20px rgba(0,212,170,0.08)", "0 0 40px rgba(0,212,170,0.15)", "0 0 20px rgba(0,212,170,0.08)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-surface/80 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-border/50 p-3 sm:p-6 glow-green overflow-hidden"
              >
                {/* Gradient sweep animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none" />
                {/* Scanning line */}
                <motion.div
                  animate={{ top: ["-2px", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none"
                />

                {/* Browser chrome */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5"
                >
                  <div className="flex gap-1 sm:gap-2">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/70" />
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/70" />
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 bg-background/60 rounded-md sm:rounded-lg px-2 sm:px-4 py-1 sm:py-2 text-[9px] sm:text-xs text-text-dim font-mono truncate">
                    route-core.dev/automation
                  </div>
                </motion.div>

                {/* Code-like content with line-by-line animation */}
                <div className="space-y-1.5 sm:space-y-3 font-mono text-[11px] sm:text-sm leading-relaxed" style={{ fontFamily: "var(--font-jetbrains)" }}>
                  <motion.div initial={{ opacity: 0, x: -10, backgroundPosition: "-100% 0" }} animate={{ opacity: 1, x: 0, backgroundPosition: "200% 0" }} transition={{ delay: 0.9, duration: 0.6 }} className="flex gap-1.5 sm:gap-2 rounded px-1 -mx-1" style={{ backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.06) 50%, transparent 100%)", backgroundSize: "200% 100%" }}>
                    <span className="text-accent-blue">const</span>
                    <span className="text-primary">pipeline</span>
                    <span className="text-text-dim">=</span>
                    <span className="text-amber-400">new</span>
                    <span className="text-accent-cyan">Automation</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10, backgroundPosition: "-100% 0" }} animate={{ opacity: 1, x: 0, backgroundPosition: "200% 0" }} transition={{ delay: 1.05, duration: 0.6 }} className="flex gap-1.5 sm:gap-2 rounded px-1 -mx-1" style={{ backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.06) 50%, transparent 100%)", backgroundSize: "200% 100%" }}>
                    <span className="text-text-dim ml-3 sm:ml-4">.</span>
                    <span className="text-primary">configure</span>
                    <span className="text-text-dim">({"{"}</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10, backgroundPosition: "-100% 0" }} animate={{ opacity: 1, x: 0, backgroundPosition: "200% 0" }} transition={{ delay: 1.2, duration: 0.6 }} className="flex gap-1.5 sm:gap-2 rounded px-1 -mx-1" style={{ backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.06) 50%, transparent 100%)", backgroundSize: "200% 100%" }}>
                    <span className="text-text-dim ml-6 sm:ml-8">target:</span>
                    <span className="text-green-400">&quot;api.service&quot;</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10, backgroundPosition: "-100% 0" }} animate={{ opacity: 1, x: 0, backgroundPosition: "200% 0" }} transition={{ delay: 1.35, duration: 0.6 }} className="flex gap-1.5 sm:gap-2 rounded px-1 -mx-1" style={{ backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.06) 50%, transparent 100%)", backgroundSize: "200% 100%" }}>
                    <span className="text-text-dim ml-6 sm:ml-8">method:</span>
                    <span className="text-green-400">&quot;POST&quot;</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10, backgroundPosition: "-100% 0" }} animate={{ opacity: 1, x: 0, backgroundPosition: "200% 0" }} transition={{ delay: 1.5, duration: 0.6 }} className="flex gap-1.5 sm:gap-2 rounded px-1 -mx-1" style={{ backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.06) 50%, transparent 100%)", backgroundSize: "200% 100%" }}>
                    <span className="text-text-dim ml-6 sm:ml-8">retry:</span>
                    <span className="text-amber-400">3</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10, backgroundPosition: "-100% 0" }} animate={{ opacity: 1, x: 0, backgroundPosition: "200% 0" }} transition={{ delay: 1.65, duration: 0.6 }} className="flex gap-1.5 sm:gap-2 rounded px-1 -mx-1" style={{ backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.06) 50%, transparent 100%)", backgroundSize: "200% 100%" }}>
                    <span className="text-text-dim">{"})"}</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10, backgroundPosition: "-100% 0" }} animate={{ opacity: 1, x: 0, backgroundPosition: "200% 0" }} transition={{ delay: 1.8, duration: 0.6 }} className="flex gap-1.5 sm:gap-2 rounded px-1 -mx-1" style={{ backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.06) 50%, transparent 100%)", backgroundSize: "200% 100%" }}>
                    <span className="text-text-dim">.</span>
                    <span className="text-primary">execute</span>
                    <span className="text-text-dim">()</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-[2px] h-[14px] bg-primary inline-block ml-0.5 shadow-[0_0_6px_rgba(0,212,170,0.6)]"
                    />
                  </motion.div>
                </div>

                {/* Status bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  className="mt-3 sm:mt-5 pt-3 sm:pt-4 border-t border-border/50 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <motion.span
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"
                    />
                    <span className="text-[10px] sm:text-xs text-primary font-medium">Running</span>
                  </div>
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[10px] sm:text-xs text-text-dim"
                  >
                    12 tasks active
                  </motion.span>
                </motion.div>
              </motion.div>

              {/* Floating tech badges — hidden on mobile to prevent overflow */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute -top-5 -right-5 px-5 py-3 bg-surface/80 backdrop-blur-xl border border-border/50 rounded-2xl text-sm font-medium glow-blue"
              >
                <span className="text-accent-blue">⚡</span> API Connected
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute -bottom-5 -left-5 px-5 py-3 bg-surface/80 backdrop-blur-xl border border-border/50 rounded-2xl text-sm font-medium glow-green"
              >
                <span className="text-primary">✓</span> Proxy Active
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
