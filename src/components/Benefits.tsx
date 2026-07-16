"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Globe, DollarSign, Users, Rocket, TrendingUp, Shield } from "lucide-react";

const icons = [Globe, DollarSign, Users, Rocket, TrendingUp, Shield];
const keys = ["remote", "salary", "team", "projects", "growth", "reliability"] as const;

export default function Benefits() {
  const t = useTranslations("benefits");

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,170,0.03),transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl card-hover group"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-3 sm:mb-4 group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-500">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2">{t(`${key}.title`)}</h3>
                <p className="text-[11px] sm:text-[13px] text-text-dim leading-relaxed">{t(`${key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
