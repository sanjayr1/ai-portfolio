"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MountainLayer } from "./mountain-layer";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [birdsAnimationData, setBirdsAnimationData] = useState(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Load animation data
  useEffect(() => {
    fetch("/animations/birds.json")
      .then((response) => response.json())
      .then((data) => setBirdsAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  // Parallax transforms for different mountain layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <motion.section
      ref={ref}
      className="bg-elegant-700 relative flex h-screen w-full snap-start flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Pulsing Sun */}
      <div className="absolute top-16 right-16 z-10 md:top-20 md:right-20">
        <div
          className="animate-pulse-gentle h-32 w-32 rounded-full md:h-40 md:w-40"
          style={{ backgroundColor: "#F9E2AF" }}
        />
      </div>

      {/* Lottie Birds Animation with Delay */}
      {birdsAnimationData && (
        <div className="pointer-events-none absolute inset-0 z-20">
          <Lottie
            animationData={birdsAnimationData}
            loop={false}
            autoplay={true}
            className="h-full w-full object-cover"
            style={{
              filter: "brightness(0) saturate(100%)",
              opacity: 0.8,
            }}
            onComplete={() => {
              // Add a 4-second delay before restarting the animation
              setTimeout(() => {
                // Force re-render to restart animation
                setBirdsAnimationData(null);
                setTimeout(() => setBirdsAnimationData(birdsAnimationData), 50);
              }, 4000);
            }}
          />
        </div>
      )}

      {/* Layered Mountains with Parallax */}
      <div className="absolute inset-0 z-0">
        {/* Back layer - lightest, slowest parallax */}
        <motion.div style={{ y: y1 }}>
          <MountainLayer className="fill-elegant-600 opacity-60" />
        </motion.div>

        {/* Middle layer - medium color, medium parallax */}
        <motion.div style={{ y: y2 }}>
          <MountainLayer className="fill-elegant-700 translate-y-2 opacity-80" />
        </motion.div>

        {/* Front layer - darkest, fastest parallax */}
        <motion.div style={{ y: y3 }}>
          <MountainLayer className="fill-elegant-800 translate-y-4 scale-110" />
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="from-elegant-900/0 to-elegant-900/60 absolute inset-0 z-[5] bg-gradient-to-b" />

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="font-outfit text-elegant-50 mb-4 text-6xl font-bold md:text-8xl"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I&apos;m Sanjay
        </motion.h1>

        <motion.h2
          className="text-elegant-200 mb-8 text-2xl tracking-wide md:text-3xl"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Senior Data & AI Engineer
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="default"
            size="lg"
            className="mt-8 px-8 py-3 text-lg font-medium"
            asChild
          >
            <a href="#about">View work</a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
