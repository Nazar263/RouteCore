"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code, Wrench, Link, Globe, Monitor, PlusCircle } from "lucide-react";

const icons = [Code, Wrench, Link, Globe, Monitor, PlusCircle];

export default function Responsibilities() {
  const t = useTranslations("responsibilities");

  return (
    <section id="responsibilities" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {t("title")}
          </h2>
          <div className="w-16 sm:w-24 h-1 gradient-border rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {t.raw("items").map((item: string, i: number) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl card-hover group"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0 group-hover:bg-accent-blue/20 transition-colors duration-300">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue" />
                </div>
                <p className="text-xs sm:text-[15px] leading-relaxed pt-1.5 sm:pt-2.5">{item}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
