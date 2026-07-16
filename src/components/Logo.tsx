"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.03 }}
      className="flex items-center shrink-0 group"
    >
      <Image
        src="/logo-transparent.png"
        alt="RouteCore"
        width={220}
        height={60}
        className="h-14 w-auto"
        style={{ objectFit: "contain" }}
      />
    </motion.a>
  );
}
