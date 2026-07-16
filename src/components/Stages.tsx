"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Stages() {
  const t = useTranslations("stages");
  const items = t.raw("items") as { step: string; title: string; desc: string }[];

  return (
    <section id="stages" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_70%)]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-5"
            style={{ fontFamily: "var(--font-space)" }}
          >
            {t("title")}
          </h2>
          <div className="w-16 sm:w-24 h-1 gradient-border rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-5 sm:gap-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-surface/60 to-surface/30 border border-border/40 backdrop-blur-sm card-hover group"
            >
              {/* Step number badge */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
                <span
                  className="text-xl sm:text-2xl font-bold text-background"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {item.step}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-base sm:text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-dim leading-relaxed">{item.desc}</p>
              </div>

              {/* Arrow */}
              <div className="hidden sm:block shrink-0 text-primary/30 group-hover:text-primary/60 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
