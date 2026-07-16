"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navItems = [
  "about",
  "tech",
  "responsibilities",
  "requirements",
  "conditions",
  "stages",
  "faq",
] as const;

export default function Header() {
  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "ru";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((id) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-80px 0px -40% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-border/40 shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Logo  />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeSection === item
                    ? "text-primary"
                    : "text-text-dim hover:text-white"
                }`}
              >
                {activeSection === item && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/[0.08] rounded-xl border border-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t(item)}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center bg-surface/60 backdrop-blur-sm rounded-xl p-1 border border-border/30">
              <button
                onClick={() => switchLocale("ru")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
                  locale === "ru"
                    ? "bg-primary text-background shadow-lg shadow-primary/20"
                    : "text-text-dim hover:text-white"
                }`}
              >
                RU
              </button>
              <button
                onClick={() => switchLocale("en")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
                  locale === "en"
                    ? "bg-primary text-background shadow-lg shadow-primary/20"
                    : "text-text-dim hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA button */}
            <a
              href="https://t.me/RouteCore_1"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 btn-primary text-white font-semibold text-sm rounded-xl"
            >
              {t("apply")}
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-dim hover:text-white transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-surface/90 backdrop-blur-2xl border-t border-border/30 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(item)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    activeSection === item
                      ? "text-primary bg-primary/[0.08]"
                      : "text-text-dim hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {t(item)}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                href="https://t.me/RouteCore_1"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 btn-primary text-white font-semibold text-sm rounded-xl mt-3"
              >
                {t("apply")}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
