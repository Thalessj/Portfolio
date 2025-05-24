"use client";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InitialPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <motion.div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/15 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <div className="relative z-10 py-12 md:py-20 flex flex-col h-screen">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <main className="flex-1 flex items-center justify-center py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
              <div className="space-y-8 text-center lg:text-left">
                <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-700/50 backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(59, 130, 246, 0.8)",
                  }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
                  <span className="text-blue-300 text-sm font-medium">
                    Disponível para projetos
                  </span>
                </motion.div>

                <div className="space-y-4">
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                    variants={itemVariants}
                  >
                    Olá, eu sou <br className="hidden sm:block" />
                    <div className="relative inline-block">
                      <motion.span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{
                          backgroundSize: "200% 200%",
                        }}
                      >
                        Thales
                      </motion.span>
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-lg opacity-60"
                        animate={{
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.h1>

                  <motion.div className="space-y-2" variants={itemVariants}>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300">
                      Desenvolvedor Full Stack
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 rounded-full" />
                  </motion.div>
                </div>

                <motion.p
                  className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed"
                  variants={itemVariants}
                >
                  Especializado em criar experiências digitais modernas e
                  intuitivas. Transformo ideias em código elegante e funcional,
                  construindo soluções que fazem a diferença.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  variants={itemVariants}
                >
                  <motion.a
                    href="/portfolio/projects"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 overflow-hidden"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Ver Projetos</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  </motion.a>

                  <motion.a
                    href="/portfolio/contact"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-gray-600 rounded-xl font-semibold text-white hover:border-blue-500 transition-all duration-300 overflow-hidden"
                    whileHover={{
                      scale: 1.02,
                      borderColor: "rgba(59, 130, 246, 0.8)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Entre em Contato</span>
                  </motion.a>

                  <motion.a
                    href="/documen/Curriculum.pdf"
                    download
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>CV</span>
                  </motion.a>
                </motion.div>

                <motion.div
                  className="flex gap-6 justify-center lg:justify-start pt-4"
                  variants={itemVariants}
                >
                  {[
                    {
                      Icon: Github,
                      href: "https://github.com/thalessj",
                      label: "GitHub",
                    },
                    {
                      Icon: Linkedin,
                      href: "https://www.linkedin.com/in/thalesestevam/",
                      label: "LinkedIn",
                    },
                    {
                      Icon: Mail,
                      href: "mailto:Thalesestevam12@outlook.com",
                      label: "Email",
                    },
                  ].map(({ Icon, href, label }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={
                        href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="group p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                      whileHover={{
                        scale: 1.15,
                        rotate: index % 2 === 0 ? 5 : -5,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              <motion.div
                className="flex justify-center lg:justify-end"
                variants={floatingVariants}
                animate="animate"
              >
                <div className="relative md:block hidden">
                  <motion.div
                    className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden"
                    initial={{ rotate: -3, scale: 0.9 }}
                    animate={{
                      rotate: [3, -3, 3],
                      scale: 1,
                    }}
                    transition={{
                      rotate: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: {
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      },
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-500 p-1 rounded-3xl">
                      <div className="w-full h-full bg-gray-900 rounded-3xl overflow-hidden relative">
                        <Image
                          width={500}
                          height={500}
                          src="/images/Thales.jpg"
                          alt="Thales - Desenvolvedor Full Stack"
                          className="w-full h-full object-cover"
                        />

                        <motion.div
                          className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20"
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <span className="text-2xl">⚡</span>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl"
                    animate={{
                      rotate: [0, -360],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      rotate: {
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                  >
                    <span className="text-xl">🚀</span>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl rounded-full scale-110"
                    animate={{
                      scale: [1.1, 1.3, 1.1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </main>
        </motion.div>

        <motion.div
          className="flex flex-col items-center pb-8 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
        </motion.div>
      </div>
    </div>
  );
}
