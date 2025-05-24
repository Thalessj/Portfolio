"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  const navigationItems = [
    { href: "/portfolio/home", label: "Sobre" },
    { href: "/portfolio/projects", label: "Projetos" },
    { href: "/portfolio/skills", label: "Skills" },
    { href: "/portfolio/contact", label: "Contato" },
  ];

  return (
    <div className="p-2">
      <motion.div
        className="lg:max-w-7xl mx-auto"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-2 transition-all shadow-2xl"
          whileHover={{
            boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)",
            borderColor: "rgba(59, 130, 246, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl" />

          <motion.header className="flex justify-between items-center relative z-10">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600/50 rounded-2xl p-4 shadow-lg"
                whileHover={{
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)",
                }}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  whileHover={{
                    backgroundPosition: "200% center",
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  THS
                </motion.h2>
              </motion.div>
            </motion.div>

            <nav className="hidden md:flex items-center md:gap-2">
              <motion.div
                className="flex items-center gap-1 bg-gray-800/60 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-3"
                whileHover={{
                  borderColor: "rgba(59, 130, 246, 0.4)",
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                }}
              >
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="relative group px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 font-medium rounded-xl"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    custom={index}
                  >
                    {item.label}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
              </motion.div>

              <motion.a
                href="/portfolio/contact"
                className="relative ml-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-semibold shadow-lg shadow-blue-500/25 overflow-hidden group border border-blue-500/30"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)",
                  borderColor: "rgba(59, 130, 246, 0.6)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Hire Me</span>
              </motion.a>
            </nav>

            <motion.button
              className="md:hidden p-3 rounded-2xl bg-gray-800/60 border border-gray-600/50 hover:border-blue-500/50 transition-colors backdrop-blur-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(31, 41, 55, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.div>
            </motion.button>
          </motion.header>

          {isMenuOpen && (
            <motion.div
              className="mt-6 md:hidden overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-6 shadow-2xl">
                <div className="space-y-3">
                  {navigationItems.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-3 px-4 rounded-xl hover:bg-gray-700/50 border border-transparent hover:border-gray-600/30"
                      variants={menuItemVariants}
                      whileHover={{
                        x: 8,
                        color: "#60a5fa",
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.div className="pt-4 border-t border-gray-700/50">
                    <motion.a
                      href="/portfolio/contact"
                      className="block text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold border border-blue-500/30"
                      variants={menuItemVariants}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Entre em Contato
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
