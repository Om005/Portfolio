"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-8">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              key={product.href}
              className="group card card-hover flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8"
            >
              {/* Image Container */}
              <div className="flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-[var(--accent-light)] to-transparent h-48 md:h-56 w-full md:w-80 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  height="300"
                  width="400"
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <Heading
                      as="h4"
                      className="font-black text-2xl md:text-2xl lg:text-3xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200"
                    >
                      {product.title}
                    </Heading>
                  </motion.div>

                  <Paragraph className="text-sm md:text-base lg:text-base mt-3 max-w-2xl text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-200">
                    {product.description}
                  </Paragraph>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {product.stack?.map((stack: string) => (
                    <motion.span
                      key={stack}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs md:text-sm bg-[var(--card-bg)] border border-[var(--card-border)] group-hover:border-[var(--accent)] text-[var(--text-secondary)] group-hover:text-[var(--accent)] px-3 py-1.5 rounded-full font-medium transition-all duration-200"
                    >
                      {stack}
                    </motion.span>
                  ))}
                </div>

                {/* Arrow Icon */}
                <div className="mt-6 flex items-center gap-2 text-[var(--accent)] font-semibold group-hover:gap-3 transition-all duration-200">
                  <span>View Project</span>
                  <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
