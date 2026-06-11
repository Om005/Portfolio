"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <Container>
      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="space-y-3">
            <Heading className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Projects & Work
            </Heading>
            <Paragraph className="text-lg md:text-xl max-w-2xl text-[var(--text-secondary)]">
              A curated collection of projects I&apos;ve built. Each represents a unique challenge and showcases different aspects of my skillset — from frontend excellence to full-stack architecture.
            </Paragraph>
          </div>
        </motion.div>

        {/* Filter Info */}
        <motion.div variants={itemVariants} className="flex gap-2 flex-wrap">
          <span className="px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-sm text-[var(--text-secondary)]">
            All Projects
          </span>
          <span className="px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-sm text-[var(--text-secondary)]">
            20+ Completed
          </span>
          <span className="px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-sm text-[var(--text-secondary)]">
            Open Source & Commercial
          </span>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <Products />
        </motion.div>
      </motion.div>
    </Container>
  );
}
