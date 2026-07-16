"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,170,0.06),transparent_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[250px] sm:h-[400px] bg-gradient-to-b from-primary/[0.06] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[250px] sm:w-[400px] h-[200px] sm:h-[300px] bg-accent-blue/[0.04] rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-[1.75rem] sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text sm:whitespace-nowrap"
            style={{ fontFamily: "var(--font-space)" }}
          >
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-dim mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
          <motion.a
            href="https://t.me/RouteCore_1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 btn-primary text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl"
          >
            {t("apply")}
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
