"use client";

import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { IconDownload, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

export default function ResumeContent({ resumePDF }: { resumePDF: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-20 px-4 md:px-8"
    >
      <div className="mb-12">
        <Heading className="text-4xl md:text-5xl font-black mb-4">
          Resume
        </Heading>
        <Paragraph className="text-lg text-[var(--text-secondary)]">
          Download my resume or view it below. It includes my experience, skills, and education.
        </Paragraph>
      </div>

      {/* Resume Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center justify-center gap-2 group"
        >
          <IconExternalLink className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
          Open Resume
        </a>
        <a
          href={resumePDF}
          download="Om_Chavda_Resume.pdf"
          className="btn-secondary inline-flex items-center justify-center gap-2 group"
        >
          <IconDownload className="h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
          Download Resume
        </a>
      </div>

      {/* Resume Preview Section */}
      <div className="card card-hover p-8 md:p-12 mb-12">
        <Heading as="h2" className="text-2xl font-bold mb-8">
          Professional Summary
        </Heading>
        <Paragraph className="mb-6 leading-relaxed">
          Full-stack developer with a passion for building beautiful and functional web applications. 
          Experienced in React, Next.js, TypeScript, and modern web technologies. 
          Strong focus on user experience, performance, and clean code practices.
        </Paragraph>

        <Heading as="h3" className="text-xl font-bold mb-4 mt-8">
          Key Skills
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-2">Frontend</h4>
            <p className="text-[var(--text-secondary)]">
              React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Shadcn UI
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-2">Backend</h4>
            <p className="text-[var(--text-secondary)]">
              Node.js, Express, PostgreSQL, MongoDB, REST APIs
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-2">Tools & Platforms</h4>
            <p className="text-[var(--text-secondary)]">
              Git, Docker, AWS, Vercel, GitHub, VS Code
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-2">Soft Skills</h4>
            <p className="text-[var(--text-secondary)]">
              Problem Solving, Communication, Team Collaboration, Mentoring
            </p>
          </div>
        </div>

        <Heading as="h3" className="text-xl font-bold mb-4 mt-8">
          Experience
        </Heading>
        <div className="space-y-6">
          <div className="border-l-2 border-[var(--accent)] pl-4">
            <h4 className="font-semibold text-[var(--text-primary)] mb-1">Senior Full Stack Developer</h4>
            <p className="text-[var(--text-secondary)] text-sm mb-2">Company Name • 2022 - Present</p>
            <ul className="text-[var(--text-secondary)] space-y-1 text-sm list-disc list-inside">
              <li>Led development of multiple full-stack applications using React and Node.js</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Improved application performance by 40% through optimization</li>
            </ul>
          </div>
          <div className="border-l-2 border-[var(--accent)] pl-4">
            <h4 className="font-semibold text-[var(--text-primary)] mb-1">Full Stack Developer</h4>
            <p className="text-[var(--text-secondary)] text-sm mb-2">Previous Company • 2020 - 2022</p>
            <ul className="text-[var(--text-secondary)] space-y-1 text-sm list-disc list-inside">
              <li>Developed responsive web applications with React and Next.js</li>
              <li>Built RESTful APIs with Node.js and Express</li>
              <li>Collaborated with design teams to implement UI/UX designs</li>
            </ul>
          </div>
        </div>

        <Heading as="h3" className="text-xl font-bold mb-4 mt-8">
          Education
        </Heading>
        <div className="border-l-2 border-[var(--accent)] pl-4">
          <h4 className="font-semibold text-[var(--text-primary)] mb-1">Bachelor of Science in Computer Science</h4>
          <p className="text-[var(--text-secondary)] text-sm">University Name • 2018 - 2022</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="card bg-gradient-to-r from-[var(--accent-light)] to-transparent p-8 md:p-12 text-center">
        <Heading as="h2" className="text-2xl font-bold mb-4">
          Let&apos;s Work Together
        </Heading>
        <Paragraph className="mb-6">
          Interested in collaborating or want to know more about my experience?
        </Paragraph>
        <Link href="/contact" className="btn-primary inline-block">
          Get in Touch
        </Link>
      </div>
    </motion.div>
  );
}
