"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    dates: "2025 – Present",
    title: "AI & Data Engineer",
    company: "ZenHome.ai (pre-seed)",
    icon: "/icons/zenhome.png",
    summary: "Delivering end-to-end AI data products for home-automation",
    bullets: [
      "Shipped ingestion → RAG pipeline and semantic-search UI for multi-modal data",
      "Designed multi-tenant GCP architecture",
    ],
  },
  {
    dates: "2022 – 2024",
    title: "Senior Data Engineer",
    company: "Twitch (Amazon)",
    icon: "/icons/twitch.png",
    summary: "Petabyte-scale data platform serving 40+ customer teams",
    bullets: [
      "Owned 10 PB+ ETL framework across 2k datasets; uptime ↑ 99.9%",
      "Cut infra spend 30% by rolling out schema registry + cost dashboards",
    ],
  },
  {
    dates: "2021",
    title: "Data Engineer",
    company: "Meta",
    icon: "/icons/meta.png",
    summary: "Checkout analytics for Facebook & Instagram Shops",
    bullets: ["Led purchase-experience metrics; supported 100M+ daily transactions"],
  },
  {
    dates: "2019 - 2021",
    title: "Data Engineer",
    company: "Spectrum Reach - Charter Communications",
    icon: "/icons/spectrum.png",
    summary: "Productionalizing ML models on DS team",
    bullets: [
      "Built and managed production pipelines for forecasting, dynamic scheduling, and customer churn models",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="from-elegant-900/40 relative flex min-h-screen snap-start flex-col justify-center overflow-hidden bg-gradient-to-br to-transparent px-8 py-32 md:px-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Heading above spine */}
      <motion.h2
        className="text-elegant-50 relative z-20 mb-16 text-center text-4xl font-semibold md:text-5xl"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        Experience
      </motion.h2>

      {/* Timeline spine - gold 1px line */}
      <div className="absolute top-0 left-8 h-full w-px bg-[#E8B076] md:left-1/2 md:-translate-x-0.5 md:transform"></div>

      <ul className="relative space-y-24">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <li key={index} className="relative">
              {/* Timeline node - 12px gold circle */}
              <motion.div
                className="border-elegant-800 absolute left-6 z-10 h-3 w-3 rounded-full border-2 bg-[#E8B076] shadow-lg md:left-1/2 md:-translate-x-1.5 md:transform"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                viewport={{ once: false }}
              />

              {/* Experience card */}
              <motion.div
                className={`ml-16 md:ml-0 md:w-5/12 ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"} from-elegant-800/30 to-elegant-700/40 border-elegant-700/50 ring-elegant-700/40 hover:ring-elegant-700/60 cursor-pointer rounded-xl border bg-gradient-to-br p-6 shadow-xl ring-1 backdrop-blur-sm transition-all duration-300`}
                initial={{
                  x: isLeft ? -100 : 100,
                  opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: false }}
              >
                {/* Header with icon, title, and dates */}
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-md bg-white/10 object-contain p-1"
                    />
                    <h3 className="text-elegant-50 text-xl font-semibold md:text-2xl">
                      {exp.title}
                    </h3>
                  </div>
                  <span className="ml-4 shrink-0 text-sm font-medium text-[#E8B076] md:text-base">
                    {exp.dates}
                  </span>
                </div>

                {/* Company name */}
                <p className="mb-4 text-lg font-medium text-[#E8B076]">{exp.company}</p>

                {/* Summary */}
                <p className="text-elegant-200 mb-4 leading-relaxed">{exp.summary}</p>

                {/* Bullets with gold markers */}
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="text-elegant-100 flex items-start gap-3 text-sm md:text-base"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E8B076]"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
}
