"use client";

import { motion } from "framer-motion";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { IconArrowRight, IconMapPin, IconCode } from "@tabler/icons-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutNew() {
  return (
    <motion.div
      className="space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-56 h-56 md:w-64 md:h-80 rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-purple-600 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Om Chavda"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Bio Section */}
          <div className="flex-1 space-y-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <Heading className="text-4xl md:text-5xl font-black">
                Om Chavda
              </Heading>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <IconCode className="h-5 w-5 text-[var(--accent)]" />
                <span className="text-xl font-semibold">Full Stack Developer</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <Paragraph className="text-lg leading-relaxed">
                I&apos;m passionate about building beautiful, performant web applications that solve real problems. With a deep focus on user experience and clean code, I create solutions that are both powerful and elegant.
              </Paragraph>
              <Paragraph className="text-lg leading-relaxed">
                Currently, I&apos;m exploring the intersection of design and development, creating experiences that are meticulous in every detail. When I&apos;m not coding, you&apos;ll find me solving algorithmic challenges or learning new technologies.
              </Paragraph>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 py-6 border-y border-[var(--card-border)]">
              <div>
                <p className="text-2xl font-black text-[var(--accent)]">1100+</p>
                <p className="text-sm text-[var(--text-secondary)]">LeetCode & Codeforces</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[var(--accent)]">20+</p>
                <p className="text-sm text-[var(--text-secondary)]">Projects Built</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[var(--accent)]">2+</p>
                <p className="text-sm text-[var(--text-secondary)]">Years Experience</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
              <Link href="/projects" className="group">
                <motion.span
                  className="btn-primary inline-flex items-center gap-2"
                  whileHover={{ x: 3 }}
                >
                  View Projects
                  <IconArrowRight className="h-5 w-5" />
                </motion.span>
              </Link>
              <a
                href="https://github.com/Om005"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <span className="btn-secondary inline-flex items-center gap-2">
                  GitHub
                  <IconArrowRight className="h-5 w-5" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div variants={itemVariants} className="space-y-8">
        <div>
          <Heading as="h2" className="text-3xl md:text-4xl font-black mb-2">
            Skills & Expertise
          </Heading>
          <p className="text-[var(--text-secondary)]">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Frontend Development",
              skills: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Shadcn UI",
            },
            {
              title: "Backend Development",
              skills: "Node.js, Express, PostgreSQL, MongoDB, REST APIs",
            },
            {
              title: "Tools & Platforms",
              skills: "Git, Docker, AWS, Vercel, GitHub, VS Code",
            },
            {
              title: "Soft Skills",
              skills: "Problem Solving, Communication, Team Collaboration, UI/UX Design",
            },
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card p-6 hover:border-[var(--accent)] transition-colors duration-300"
            >
              <h3 className="font-bold text-lg text-[var(--text-primary)] mb-3">
                {skill.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {skill.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div variants={itemVariants} className="space-y-8">
        <div>
          <Heading as="h2" className="text-3xl md:text-4xl font-black mb-2">
            Education
          </Heading>
          <p className="text-[var(--text-secondary)]">
            My academic background
          </p>
        </div>

        <motion.div className="card p-8 border-l-4 border-[var(--accent)]">
          <div className="space-y-3">
            <h3 className="font-bold text-2xl text-[var(--text-primary)]">
              Bachelor of Technology in ICT
            </h3>
            <p className="text-[var(--accent)] font-semibold text-lg">
              Dhirubhai Ambani University
            </p>
            <p className="text-[var(--text-secondary)]">2023 - 2027 (In Progress)</p>
            <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
              Focusing on full-stack development, data structures, and algorithms. 
              Strong foundation in computer science principles and modern web technologies.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Experience Section */}
      <motion.div variants={itemVariants} className="space-y-8">
        <div>
          <Heading as="h2" className="text-3xl md:text-4xl font-black mb-2">
            What Drives Me
          </Heading>
          <p className="text-[var(--text-secondary)]">
            My philosophy and approach to development
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              title: "User-Centric Design",
              description:
                "Every pixel matters. I build interfaces that are intuitive, accessible, and delightful to use.",
            },
            {
              title: "Clean Architecture",
              description:
                "Code is read more often than it's written. I prioritize clarity, maintainability, and scalability.",
            },
            {
              title: "Performance First",
              description:
                "Speed matters. I optimize for Core Web Vitals and ensure applications perform smoothly across all devices.",
            },
            {
              title: "Continuous Learning",
              description:
                "Technology evolves rapidly. I stay updated with latest trends, best practices, and emerging technologies.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card p-6 hover:bg-[var(--accent-light)] transition-colors duration-300"
            >
              <h3 className="font-bold text-lg text-[var(--text-primary)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        variants={itemVariants}
        className="card p-8 md:p-12 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] text-white text-center space-y-6"
      >
        <Heading as="h2" className="text-3xl md:text-4xl font-black text-white">
          Let&apos;s Work Together
        </Heading>
        <Paragraph className="text-base md:text-lg max-w-2xl mx-auto text-white opacity-90">
          Have an idea or project in mind? I&apos;d love to hear from you. Let&apos;s create something amazing together.
        </Paragraph>
        <Link href="/contact" className="inline-block">
          <span className="inline-flex items-center gap-2 bg-white text-[var(--accent)] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform group">
            Get In Touch
            <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
