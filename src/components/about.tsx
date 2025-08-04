"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="bg-elegant-800 relative flex h-screen w-full snap-start flex-col items-center gap-10 px-8 py-16 md:flex-row md:gap-20 md:px-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Left column - Image */}
      <motion.div
        className="flex w-full flex-col justify-center md:w-1/2"
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="text-center">
          <motion.img
            src="/images/selfy.jpg"
            alt="Sanjay - Senior Data & AI Engineer"
            className="border-elegant-800/40 mx-auto aspect-square w-full max-w-lg rounded-xl border object-cover shadow-2xl"
            initial={{ filter: "blur(10px)", scale: 0.9 }}
            whileInView={{ filter: "blur(0px)", scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
          />
          <motion.p
            className="text-elegant-200 mt-4 text-sm italic"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false }}
          >
            Selfie in Banff, Canada!
          </motion.p>
        </div>
      </motion.div>

      {/* Right column - Text */}
      <motion.div
        className="flex w-full flex-col justify-center md:w-1/2"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div>
          <motion.h2
            className="text-elegant-50 text-4xl font-semibold md:text-5xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="text-elegant-100 mt-6 max-w-prose space-y-4 text-lg leading-relaxed"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: false }}
          >
            <p>
              I&apos;m a <strong>Senior Data & AI Engineer</strong> with{" "}
              <strong>nearly a decade of experience</strong> helping teams turn raw data into
              real-time insights, intelligent products, and measurable business impact.
            </p>

            <ul className="ml-4 space-y-2">
              <li>
                • Built ingestion-to-RAG pipelines and semantic-search UIs at an early-stage
                startup, serving customer needs end-to-end.
              </li>
              <li>
                • <strong>Ex-Twitch (Amazon) and ex-Meta data-platform engineer</strong>, owning petabyte-scale
                ETL, schema-registry roll-outs, and analytics workflows.
              </li>
              <li>
                • Passionate about streaming systems, LLM pipelines, and cloud cost optimisation.
              </li>
            </ul>

            <p>
              Off the keyboard you&apos;ll find me hiking, climbing, or mountain-biking around
              Denver with my dog <strong>Chutney</strong>.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
