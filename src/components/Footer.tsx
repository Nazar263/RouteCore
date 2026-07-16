"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Logo from "./Logo";
import { Send } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "ru";

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <footer className="bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />

          <div className="flex items-center gap-6">
            <a
              href="https://t.me/RouteCore_1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/40 hover:text-primary transition-colors duration-300"
            >
              <Send className="w-4 h-4" />
              {t("tg")}
            </a>

            <div className="flex items-center bg-white/[0.05] rounded-xl p-1 border border-white/[0.08]">
              <button
                onClick={() => switchLocale("ru")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
                  locale === "ru"
                    ? "bg-primary text-black shadow-lg shadow-primary/20"
                    : "text-white/40 hover:text-white"
                }`}
              >
                RU
              </button>
              <button
                onClick={() => switchLocale("en")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
                  locale === "en"
                    ? "bg-primary text-black shadow-lg shadow-primary/20"
                    : "text-white/40 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        <div className="my-6 h-px bg-white/[0.06]" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} {t("copyright")}
          </p>
          <p className="text-[11px] text-white/25">
            Розробник сайту{" "}
            <a
              href="https://freelance-ua.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="text-white/50">Freelance UA</span>{" "}
              <span className="text-[#6ee7b7]">Digital Agency</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
