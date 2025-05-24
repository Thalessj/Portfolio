"use client";
import { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Smartphone,
  Search,
  Calendar,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Platform - BetStorm",
    description:
      "Plataforma completa integrada com sistema de pagamento Mercado Pago e dashboard administrativo.",
    longDescription:
      "Uma solução completa de e-commerce desenvolvida com Next.js e Node.js, incluindo autenticação, carrinho de compras, processamento de pagamentos com Stripe, dashboard administrativo e sistema de inventário em tempo real.",
    image: "/images/betstorm-vip.jpg",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Mercado Pago API",
      "Tailwind CSS",
      "NextAuth",
      "Prisma",
      "Typescript",
    ],
    category: "fullstack",
    featured: true,
    status: "Concluído",
    date: "2025",
    github: "https://github.com/thalessj/ecommerce",
    demo: "https://github.com/thalessj",
    stats: {
      stars: 124,
      forks: 43,
      views: "2.1k",
    },
  },
  {
    id: 2,
    title: "Mobile Finance App",
    description:
      "Aplicativo simples de gerenciamento de finanças com interface intuitiva, colaboração em tempo real e sincronização na nuvem.",
    longDescription:
      "Sistema de produtividade construído com Kotlin (JPK) e Firebase, notificações em tempo real.",
    image: "/images/mobile-finance-app.jpg",
    technologies: ["Firebase", "Redux", "Kotlin (JPK)"],
    category: "mobile",
    featured: true,
    status: "Em desenvolvimento",
    date: "2024",
    github: "https://github.com/thalessj/task-manager",
    demo: "https://github.com/thalessj",
    stats: {
      stars: 89,
      forks: 27,
      views: "1.5k",
    },
  },
  {
    id: 3,
    title: "API REST - Social Media",
    description:
      "API robusta para criação de usuários e sistema de notificações em tempo real.",
    longDescription:
      "Backend completo para aplicação (CRUD  ), desenvolvido com Node.js e Express.",
    image: "/images/api-crud.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "backend",
    featured: false,
    status: "Concluído",
    date: "2023",
    github: "demo.vercel.app/login",
    demo: null,
    stats: {
      stars: 67,
      forks: 19,
      views: "892",
    },
  },
  {
    id: 4,
    title: "Dashboard Analytics Admin - SetLocs",
    description:
      "Dashboard interativo para controle de dados e gerenciamento de negócios com gráficos dinâmicos e relatórios personalizáveis em tempo real.",
    longDescription:
      "Interface administrativa avançada construída com Nextjs, oferecendo visualização de dados em tempo real, filtros dinâmicos e exportação de relatórios customizados.",
    image: "/images/setlocs-adm.jpg",
    technologies: [
      "React",
      "Nextjs",
      "NextAuth",
      "PostMan API",
      "PostgreSQL",
      "Tailwind css",
      "Typescript",
    ],
    category: "fullstack",
    featured: true,
    status: "Concluído",
    date: "2025",
    github: "https://github.com/thalessj/analytics-dashboard",
    demo: "https://github.com/thalessj",
    stats: {
      stars: 203,
      forks: 78,
      views: "4.1k",
    },
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Site portfolio responsivo com animações fluidas, otimizado para SEO e performance excepcional.",
    longDescription:
      "Website portfolio desenvolvido com Next.js e Framer Motion, focado em performance, acessibilidade e experiência do usuário.",
    image: "/images/portfolio-web.jpg",
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Vercel",
      "Typescript",
    ],
    category: "frontend",
    featured: false,
    status: "Concluído",
    date: "2024",
    github: "https://github.com/thalessj/portfolio",
    demo: "https://github.com/thalessj",
    stats: {
      stars: 45,
      forks: 12,
      views: "1.1k",
    },
  },
  {
    id: 6,
    title: "LSS - Store",
    description:
      "Loja online com sistema de pagamento seguro e entrega rápida.",
    longDescription:
      "E-commerce desenvolvido com Next.js, Tailwindcss e Framer Motion, focado em performance, acessibilidade e experiência do usuário.",
    image: "/images/lss-store.jpg",
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Typescript",
      "Neon DB",
    ],
    category: "fullstack",
    featured: true,
    status: "Em desenvolvimento",
    date: "2025",
    github: "https://github.com/thalessj",
    demo: "https://github.com/thalessj",
    stats: {
      stars: 45,
      forks: 12,
      views: "1.1k",
    },
  },
  {
    id: 6,
    title: "Landing page",
    description:
      "Landing page com sistema de pagamento seguro e entrega rápida.",
    longDescription:
      "Desenvolvido com Next.js, Tailwindcss e Framer Motion, focado em performance, acessibilidade e experiência do usuário.",
    image: "/images/landing-page.jpg",
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Netilify",
      "Typescript",
    ],
    category: "frontend",
    featured: false,
    status: "Concluído",
    date: "2025",
    github: "https://github.com/Thalessj/lp",
    demo: "https://chave-da-internet.netlify.app/",
    stats: {
      stars: 45,
      forks: 12,
      views: "1.1k",
    },
  },
];

const categories = [
  { id: "all", name: "Todos", icon: Globe },
  { id: "fullstack", name: "Full Stack", icon: Code2 },
  { id: "frontend", name: "Frontend", icon: Globe },
  { id: "backend", name: "Backend", icon: Database },
  { id: "mobile", name: "Mobile", icon: Smartphone },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);

  useEffect(() => {
    let filtered = projects;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (project) => project.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, searchTerm]);

  const featuredProjects = projects.filter((project) => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
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

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
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

      <div className="relative z-10 py-12 md:py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 py-36"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center space-y-6">
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-700/50 backdrop-blur-sm"
              variants={itemVariants}
            >
              <Code2 className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">
                Meus Projetos
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              variants={itemVariants}
            >
              Criando{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
                Soluções
              </span>
              <br />
              que Fazem a Diferença
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Explore uma seleção dos meus trabalhos mais recentes, desde
              aplicações full-stack até soluções mobile inovadoras. Cada projeto
              representa um desafio superado e uma nova habilidade desenvolvida.
            </motion.p>
          </div>
        </motion.div>

        <motion.section
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl font-bold mb-8 flex items-center gap-3"
            variants={itemVariants}
          >
            <Star className="w-8 h-8 text-yellow-400" />
            Projetos em Destaque
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1900}
                      height={1080}
                    />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-900/80 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600/80 rounded-lg hover:bg-blue-500 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.date}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            project.status === "Concluído"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "bg-gray-800/50 border-gray-600 text-gray-300 hover:border-blue-500/50 hover:text-blue-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </motion.button>
                );
              })}
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors w-64"
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-2xl font-bold mb-8 flex items-center justify-between"
            variants={itemVariants}
          >
            <span>Todos os Projetos</span>
            <span className="text-sm text-gray-400 font-normal">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "projeto" : "projetos"}
            </span>
          </motion.h2>

          <motion.div
            key={selectedCategory + searchTerm}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                layout
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1900}
                      height={1080}
                    />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        project.status === "Concluído"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description.length > 120
                      ? project.description.substring(0, 120) + "..."
                      : project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-xs border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-400 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600/50 rounded-lg hover:bg-blue-500/50 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                Nenhum projeto encontrado
              </h3>
              <p className="text-gray-400">
                Tente ajustar os filtros ou termo de busca
              </p>
            </motion.div>
          )}
        </motion.section>
      </div>
    </div>
  );
}
