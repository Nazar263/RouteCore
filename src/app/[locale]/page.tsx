import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Responsibilities from "@/components/Responsibilities";
import Requirements from "@/components/Requirements";
import Conditions from "@/components/Conditions";
import Stages from "@/components/Stages";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <FloatingCTA />
      <main className="flex-1">
        <Hero />
        <div className="section-divider max-w-7xl mx-auto" />
        <Benefits />
        <div className="section-divider max-w-7xl mx-auto" />
        <About />
        <div className="section-divider max-w-7xl mx-auto" />
        <Technologies />
        <div className="section-divider max-w-7xl mx-auto" />
        <Responsibilities />
        <div className="section-divider max-w-7xl mx-auto" />
        <Requirements />
        <div className="section-divider max-w-7xl mx-auto" />
        <Conditions />
        <div className="section-divider max-w-7xl mx-auto" />
        <Stages />
        <div className="section-divider max-w-7xl mx-auto" />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
