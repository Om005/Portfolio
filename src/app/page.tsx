"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  return (
    <Container>
      <motion.div
        className="space-y-6 mb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Hero Section */}
        <motion.div variants={itemVariants} className="space-y-4">
          <Heading className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Building the <Highlight>future</Highlight> with code.
          </Heading>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants}>
          <Paragraph className="text-lg md:text-xl max-w-2xl text-[var(--text-secondary)] leading-relaxed">
            I&apos;m a full-stack developer passionate about crafting beautiful, performant web experiences. I solve real-world problems through elegant code and thoughtful design — powered by <Highlight>algorithms</Highlight>, <Highlight>creativity</Highlight>, and <Highlight>modern technology</Highlight>.
          </Paragraph>
        </motion.div>

        {/* Stats/Highlight Section */}
        <motion.div variants={itemVariants}>
          <Paragraph className="text-base md:text-lg text-[var(--text-secondary)]">
            With <Highlight>1100+</Highlight> LeetCode &amp; Codeforces problems solved, I bring deep problem-solving expertise to every project. Currently building scalable web applications that users love.
          </Paragraph>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="pt-4">
          <Link href="/projects" className="inline-flex items-center gap-2 group">
            <motion.span
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              View My Work
              <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="space-y-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Heading as="h2" className="text-3xl md:text-4xl font-black">
            Featured Projects
          </Heading>
          <p className="text-[var(--text-secondary)] mt-2">
            A selection of work I&apos;m proud of
          </p>
        </motion.div>

        <Products />
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TechStack />
      </motion.div>
    </Container>
  );
}
