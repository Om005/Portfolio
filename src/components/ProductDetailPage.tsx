"use client";

import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ProductDetailPage = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );

  return (
    <motion.div
      className="py-10 space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Back Button */}
      <motion.div variants={itemVariants}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[var(--accent)] hover:gap-3 transition-all group"
        >
          <IconArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Projects</span>
        </Link>
      </motion.div>

      {/* Hero Image Section */}
      <motion.div
        variants={itemVariants}
        className="space-y-6"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="relative w-full h-96 md:h-[600px] rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] via-transparent to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
          <Image
            src={activeImage}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Image Thumbnails */}
        {product.images && product.images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-4">
            <button
              onClick={() => setActiveImage(product.thumbnail)}
              className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${ 
                activeImage === product.thumbnail
                  ? "border-[var(--accent)] scale-105"
                  : "border-[var(--card-border)] opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={product.thumbnail}
                alt="Thumbnail"
                width={120}
                height={100}
                className="object-cover h-24 w-32"
              />
            </button>
            {product.images.map((image, idx) => (
              <button
                key={`image-${idx}`}
                onClick={() => setActiveImage(image)}
                className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === image
                    ? "border-[var(--accent)] scale-105"
                    : "border-[var(--card-border)] opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`Project ${idx}`}
                  width={120}
                  height={100}
                  className="object-cover h-24 w-32"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Project Header */}
      <motion.div variants={itemVariants} className="space-y-6 border-b border-[var(--card-border)] pb-8">
        <div className="space-y-3">
          <Heading className="text-5xl md:text-6xl font-black leading-tight">
            {product.title}
          </Heading>
          <Paragraph className="text-lg text-[var(--text-secondary)]">
            {product.description}
          </Paragraph>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
            Built With
          </p>
          <div className="flex flex-wrap gap-2">
            {product.stack?.map((tech: string) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-sm font-medium text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        {product.title !== "Mini Projects" && product.title !== "PayNest" && (
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.span
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                View Live Project
                <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </a>
            <a
              href={product.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.span
                className="btn-secondary inline-flex items-center gap-2"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                View on GitHub
                <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </a>
          </div>
        )}
      </motion.div>

      {/* Project Content */}
      {product.content && (
        <motion.div
          variants={itemVariants}
          className="prose prose-invert max-w-none space-y-8"
        >
          <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
            {typeof product.content === "string" ? (
              <Paragraph>{product.content}</Paragraph>
            ) : (
              product.content
            )}
          </div>
        </motion.div>
      )}

      {/* Additional Info Cards */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
        <div className="card p-6 space-y-3">
          <h3 className="font-bold text-lg text-[var(--text-primary)]">
            Key Features
          </h3>
          <ul className="space-y-2 text-[var(--text-secondary)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent)] font-bold">•</span>
              <span>Modern, responsive design across all devices</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent)] font-bold">•</span>
              <span>Optimized performance and Core Web Vitals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent)] font-bold">•</span>
              <span>Clean, maintainable codebase</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent)] font-bold">•</span>
              <span>Smooth animations and interactions</span>
            </li>
          </ul>
        </div>

        <div className="card p-6 space-y-3">
          <h3 className="font-bold text-lg text-[var(--text-primary)]">
            Technologies
          </h3>
          <p className="text-[var(--text-secondary)]">
            This project was built using a modern tech stack focusing on performance, 
            scalability, and developer experience. All tools chosen for their reliability 
            and community support.
          </p>
        </div>
      </motion.div>

      {/* Navigation to Other Projects */}
      <motion.div variants={itemVariants} className="border-t border-[var(--card-border)] pt-12">
        <p className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-6">
          More Projects
        </p>
        <Link href="/projects" className="inline-block group">
          <span className="btn-primary inline-flex items-center gap-2">
            Explore All Projects
            <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
};
