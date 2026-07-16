"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Home, Clock, Coins, Users, Rocket, Check } from "lucide-react";

const items = [
  { key: 0, icon: Home, gradient: "from-blue-500/20 to-cyan-500/10" },
  { key: 1, icon: Clock, gradient: "from-purple-500/20 to-pink-500/10" },
  { key: 2, icon: Coins, gradient: "from-amber-500/20 to-orange-500/10" },
  { key: 3, icon: Users, gradient: "from-green-500/20 to-emerald-500/10" },
  { key: 4, icon: Rocket, gradient: "from-red-500/20 to-rose-500/10" },
];

export default function Conditions() {
  const t = useTranslations("conditions");

  return (
    <section id="conditions" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,170,0.03),transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {t.raw("items").map((item: string, i: number) => {
            const config = items[i];
            const Icon = config.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative flex flex-col items-center text-center p-6 sm:p-7 rounded-2xl card-hover group overflow-hidden"
              >
                {/* Gradient glow behind icon */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-b ${config.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-500">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>

                <p className="relative text-sm sm:text-[15px] font-medium leading-snug">{item}</p>

                {/* Check mark */}
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Check className="w-3 h-3 text-primary" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
