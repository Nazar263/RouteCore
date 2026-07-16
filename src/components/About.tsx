"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Users, FolderCheck, Globe, Clock } from "lucide-react";
import GrowthChart from "./GrowthChart";

const statsConfig = [
  { key: "specialists" as const, icon: Users, value: "50+" },
  { key: "projects" as const, icon: FolderCheck, value: "100+" },
  { key: "countries" as const, icon: Globe, value: "10+" },
  { key: "support" as const, icon: Clock, value: "24/7" },
];

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(59,130,246,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(0,212,170,0.05),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-5"
            style={{ fontFamily: "var(--font-space)" }}
          >
            {t("title")}{" "}
            <span className="gradient-text-green glow-text">{t("company")}</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 gradient-border rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-foreground/80 leading-[1.8] text-base sm:text-lg">{t("desc")}</p>
            <p className="text-foreground/80 leading-[1.8] text-base sm:text-lg">{t("desc2")}</p>

            <div className="pt-2 sm:pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                <span className="text-[10px] sm:text-xs text-text-dim uppercase tracking-widest font-medium">Since 2020</span>
              </div>
              <GrowthChart />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {statsConfig.map(({ key, icon: Icon, value }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="p-5 sm:p-7 rounded-xl sm:rounded-2xl card-hover group"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 sm:mb-5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <p
                  className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2 gradient-text-green"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {value}
                </p>
                <p className="text-xs sm:text-sm text-foreground/60 whitespace-pre-line leading-relaxed">
                  {t(`stat_${key}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
