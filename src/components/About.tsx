"use client"
import Image from "next/image"
import { Heading } from "@/components/Heading"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Calendar, Code, Award, X, ExternalLink, Brain } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { useState } from "react"
export default function About() {
  const images = [
    "/images/me2.jpg",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const projectImages = [
    {
      src: "/images/Paynest/Home.png",
      alt: "PAYNEST",
      title: "Paynest",
      description: "Full-stack money Transaction web app",
    },
    {
      src: "/images/pixelcode.png",
      alt: "PIXELCODE",
      title: "PIXELCODE",
      description: "Full-stack online code IDE",
    },
    {
      src: "/images/music.png",
      alt: "Music player",
      title: "Music Player",
      description: "Local music player - Vanilla JS",
    },
  ]

  return (
    <motion.div
      className={twMerge(
        "text-sm lg:text-base font-normal text-secondary max-w-4xl mx-auto pb-8 bg-gradient-to-br from-white to-gray-50",
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section with Image */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" variants={itemVariants}>
        {/* Profile Image */}
        <div className="md:col-span-1">
          {images.map((image, index) => (
  <motion.div
    key={image}
    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
    whileHover={{ scale: 1.05, rotate: 2 }}
    className="relative group mx-auto max-w-[250px] sm:max-w-[300px] md:max-w-none"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
    
    <div className="relative w-full aspect-[3/4] md:h-80">
      <Image
        src={image}
        fill
        alt="Profile"
        className="rounded-lg object-cover shadow-2xl border-2 border-white"
      />
    </div>
  </motion.div>
))}


        </div>

        {/* Introduction */}
        <motion.div className="md:col-span-2 flex flex-col justify-center space-y-6" variants={itemVariants}>
          <div className="space-y-2">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Heading className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Om Chavda
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2"
            >
              <Code className="w-5 h-5 text-blue-600" />
              <Heading className="text-xl text-blue-600 font-semibold">Full Stack Developer</Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-gray-500"
            >
              <MapPin className="w-4 h-4" />
              <span>Available for opportunities</span>
            </motion.div>
          </div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-700 leading-relaxed">
              I&apos;m a passionate Full Stack Developer with expertise in modern web technologies. I love building scalable
              applications and solving complex problems through clean, efficient code. Currently focused on creating
              innovative web solutions.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/Om005"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="scale-150" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 72 72">
<path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z" fill="white"></path>
</svg>
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/om-chavda-06a390302/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:chavdaom84@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              Email
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Education */}
      <motion.div className="mb-12" variants={itemVariants}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <Heading className="font-black text-2xl">Education</Heading>
        </div>
        <motion.div
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="font-semibold text-blue-600 text-lg mb-2">Bachelor of Technology in Information and Communication Technology</h3>
            <p className="text-gray-600 mb-3 flex items-center gap-2">
              <span className="font-medium">Dhirubhai Ambani University</span>
              <span className="text-gray-400">•</span>
              <span>2023 - 2027</span>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Focused on software engineering, data structures, algorithms, and web development, with a deep interest in AI/ML and data science. Maintained strong academic performance while working on various projects.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Technical Skills */}
      <motion.div className="mb-12" variants={itemVariants}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Code className="w-5 h-5 text-white" />
          </div>
          <Heading className="font-black text-2xl">Skills & Expertise</Heading>
        </div>
          <div>
            <motion.div
        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="font-semibold text-blue-600 text-lg mb-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          Full Stack Development
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Experienced in building end-to-end web applications with modern technologies. Proficient in both frontend and
          backend development, creating scalable and responsive applications with clean, maintainable code.
        </p>
      </motion.div>
          </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="font-semibold text-purple-600 text-lg mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Frontend Technologies
            </h3>
            <ul className="text-gray-700 space-y-2">
              {[
                "HTML5 & CSS3",
                "React.js",
                "Tailwind CSS",
                "JavaScript",
                "Responsive Design",
                "Next.js basics"
              ].map((skill, index) => (
                <motion.li
                  key={skill}
                  className="flex items-center gap-2 hover:text-purple-600 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="font-semibold text-blue-600 text-lg mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Backend & Tools
            </h3>
            <ul className="text-gray-700 space-y-2">
              {[
                "Node.js & Express.js",
                "MongoDB & PostgreSQL",
                "Git & GitHub",
                "RESTful APIs",
                "Next.js basics",
                "Nextauth"
              ].map((skill, index) => (
                <motion.li
                  key={skill}
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="grid md:grid-cols-3 gap-6 mt-5">
          {projectImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedImage(image.src)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="aspect-video relative">
                <Image
                  src={image.src || "/placeholder.svg?height=200&width=300"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
                  <p className="text-xs text-gray-200">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
                <Image src={selectedImage || "/placeholder.svg"} alt="Project preview" fill className="object-cover" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <Heading className="font-black text-xl">Problem Solving Skills</Heading>
        </div>

        <motion.div
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 mb-8"
          whileHover={{ y: -5 }}
        >
          <div>
            <div>
              <ul className="text-gray-700 space-y-2">
                {[
                  "Proficient in Data Structures & Algorithms",
        "Strong reasoning and logical thinking skills",
        "Backed by solving 1000+ problems on LeetCode and Codeforces",
                ].map((skill, index) => (
                  <motion.li
                    key={skill}
                    className="flex items-center gap-2 hover:text-green-600 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
            {/* <div>
              <h4 className="font-semibold text-teal-600 text-lg mb-3">Programming Languages</h4>
              <ul className="text-gray-700 space-y-2">
                {["C++", "Java", "Python", "JavaScript", "SQL"].map((skill, index) => (
                  <motion.li
                    key={skill}
                    className="flex items-center gap-2 hover:text-teal-600 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div> */}
          </div>
        </motion.div>

        {/* Competitive Programming Stats */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -3 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-semibold text-orange-600 text-lg">LeetCode</h4>
              </div>
              <a
                href="https://leetcode.com/chavdaom84"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-orange-100 rounded-lg hover:bg-orange-200 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-orange-600" />
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Problems Solved</span>
                <span className="font-bold text-orange-600">350+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Current Rating</span>
                <span className="font-semibold text-gray-800">1901</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max Rating</span>
                <span className="font-semibold text-gray-800">1902</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -3 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-semibold text-blue-600 text-lg">Codeforces</h4>
              </div>
              <a
                href="https://codeforces.com/profile/Om_007"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Problems Solved</span>
                <span className="font-bold text-blue-600">670+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Current Rating</span>
                <span className="font-semibold text-gray-800">1392</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max Rating</span>
                <span className="font-semibold text-gray-800">1439</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

        
      </motion.div>
      

      {/* Experience */}
      

      {/* Current Focus */}
      

      {/* Achievements */}
      {/* <motion.div variants={itemVariants}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
            <Award className="w-5 h-5 text-white" />
          </div>
          <Heading className="font-black text-2xl">Achievements</Heading>
        </div>
        <motion.div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100" whileHover={{ y: -5 }}>
          <ul className="text-gray-700 space-y-3">
            {[
              "Successfully completed multiple full-stack web development projects",
              "Contributed to open-source projects with positive community feedback",
              "Maintained strong academic performance throughout university",
              "Built and deployed scalable web applications used by real users",
            ].map((achievement, index) => (
              <motion.li
                key={achievement}
                className="flex items-start gap-3 hover:text-gray-900 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                {achievement}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div> */}
    </motion.div>
  )
}
