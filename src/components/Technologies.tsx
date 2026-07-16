"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const technologies = [
  { name: "BAS", icon: "🧩", color: "from-blue-500/20 to-blue-600/10", border: "hover:border-blue-500/30" },
  { name: "ZennoPoster", icon: "⚙️", color: "from-purple-500/20 to-purple-600/10", border: "hover:border-purple-500/30" },
  { name: "JavaScript", icon: "JS", color: "from-yellow-500/20 to-yellow-600/10", isText: true, border: "hover:border-yellow-500/30" },
  { name: "REST API", icon: "🔌", color: "from-cyan-500/20 to-cyan-600/10", border: "hover:border-cyan-500/30" },
  { name: "HTTP/HTTPS", icon: "🌐", color: "from-green-500/20 to-green-600/10", border: "hover:border-green-500/30" },
  { name: "JSON / XML", icon: "{}", color: "from-orange-500/20 to-orange-600/10", isText: true, border: "hover:border-orange-500/30" },
  { name: "Proxy", icon: "🛡️", color: "from-red-500/20 to-red-600/10", border: "hover:border-red-500/30" },
  { name: "Cloud", icon: "☁️", color: "from-sky-500/20 to-sky-600/10", border: "hover:border-sky-500/30" },
  { name: "AntiDetect", icon: "🦊", color: "from-emerald-500/20 to-emerald-600/10", border: "hover:border-emerald-500/30" },
];

export default function Technologies() {
  const t = useTranslations("tech");

  return (
    <section id="tech" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.03),transparent_60%)]" />
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

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2.5 sm:gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 25, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: i * 0.06,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, scale: 1.08 }}
              className={`flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-surface/40 border border-border/30 card-hover group cursor-default ${tech.border}`}
            >
              <div
                className={`w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-base sm:text-xl font-bold group-hover:scale-110 transition-all duration-400`}
              >
                {tech.isText ? (
                  <span className="text-[10px] sm:text-sm font-mono" style={{ fontFamily: "var(--font-jetbrains)" }}>{tech.icon}</span>
                ) : (
                  <span className="group-hover:animate-bounce">{tech.icon}</span>
                )}
              </div>
              <span className="text-[9px] sm:text-xs font-medium text-center text-text-dim group-hover:text-white transition-colors duration-300 leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
