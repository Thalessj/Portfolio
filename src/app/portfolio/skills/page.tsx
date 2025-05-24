"use client";
import { useState, useEffect } from "react";
import {
  Database,
  Globe,
  Smartphone,
  Server,
  Zap,
  Award,
  TrendingUp,
  Star,
  ChevronRight,
  Target,
  Cpu,
  Cloud,
} from "lucide-react";

type ColorType = "blue" | "green" | "purple" | "orange" | "yellow";
type ColorPropertyType = "bg" | "border" | "text" | "accent";

interface Skill {
  name: string;
  level: number;
  experience: string;
  projects: number;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: ColorType;
  skills: Skill[];
}

interface Achievement {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: ColorType;
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Globe,
    color: "blue",
    skills: [
      { name: "Next.js", level: 95, experience: "2+ anos", projects: 5 },
      { name: "React", level: 90, experience: "2+ anos", projects: 3 },
      { name: "TypeScript", level: 85, experience: "2+ anos", projects: 6 },
      { name: "Tailwind CSS", level: 92, experience: "2+ anos", projects: 5 },
      { name: "Framer Motion", level: 80, experience: "2+ ano", projects: 4 },
      { name: "Angular", level: 95, experience: "2+ anos", projects: 1 },
      { name: "Bootstrap", level: 95, experience: "2+ anos", projects: 1 },
      { name: "Vue.js", level: 85, experience: "2+ ano", projects: 1 },
      { name: "Styled-Components.js", level: 85, experience: "1+ ano", projects: 1 },
      { name: "HTML5/CSS3", level: 95, experience: "3+ anos", projects: 8 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Database,
    color: "green",
    skills: [
      { name: "Node.js", level: 90, experience: "3+ anos", projects: 5 },
      { name: "Express", level: 85, experience: "2+ anos", projects: 3 },
      { name: "PostgreSQL", level: 80, experience: "1+ anos", projects: 2 },
      { name: "MongoDB", level: 75, experience: "1+ ano", projects: 2 },
      { name: "Prisma", level: 85, experience: "1+ ano", projects: 2 },
      { name: "JWT", level: 90, experience: "2+ anos", projects: 4 },
      { name: "NextAuth", level: 90, experience: "2+ anos", projects: 4 },
    ],
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: Smartphone,
    color: "purple",
    skills: [
      { name: "Kotlin (JPK)", level: 75, experience: "1+ ano", projects: 2 },
      { name: "Firebase", level: 75, experience: "1+ anos", projects: 3 },
      { name: "Redux", level: 70, experience: "1+ ano", projects: 1 },
      { name: "React Native", level: 65, experience: "6+ meses", projects: 1 },
    ],
  },
  {
    id: "tools",
    name: "Ferramentas & DevOps",
    icon: Server,
    color: "orange",
    skills: [
      { name: "Git/GitHub", level: 90, experience: "3+ anos", projects: 8 },
      { name: "Vercel", level: 85, experience: "2+ anos", projects: 4 },
      { name: "PostMan API", level: 80, experience: "2+ anos", projects: 3 },
      { name: "Jira", level: 85, experience: "1+ ano", projects: 2 },
      {
        name: "Mercado Pago API",
        level: 80,
        experience: "1+ ano",
        projects: 2,
      },
    ],
  },
];

const achievements: Achievement[] = [
  {
    icon: Award,
    title: "5+ Projetos Concluídos",
    description: "Portfolio diversificado com aplicações completas",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Full Stack Developer",
    description: "Domínio completo do ciclo de desenvolvimento",
    color: "green",
  },
  {
    icon: Target,
    title: "Foco em UX/UI",
    description: "Interfaces modernas e experiência do usuário",
    color: "purple",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Otimização e melhores práticas em todos os projetos",
    color: "yellow",
  },
];

const getColorClasses = (
  color: ColorType,
  type: ColorPropertyType = "bg"
): string => {
  const colors: Record<ColorType, Record<ColorPropertyType, string>> = {
    blue: {
      bg: "from-blue-600/20 to-blue-400/20",
      border: "border-blue-500/50",
      text: "text-blue-400",
      accent: "bg-blue-500/20",
    },
    green: {
      bg: "from-green-600/20 to-green-400/20",
      border: "border-green-500/50",
      text: "text-green-400",
      accent: "bg-green-500/20",
    },
    purple: {
      bg: "from-purple-600/20 to-purple-400/20",
      border: "border-purple-500/50",
      text: "text-purple-400",
      accent: "bg-purple-500/20",
    },
    orange: {
      bg: "from-orange-600/20 to-orange-400/20",
      border: "border-orange-500/50",
      text: "text-orange-400",
      accent: "bg-orange-500/20",
    },
    yellow: {
      bg: "from-yellow-600/20 to-yellow-400/20",
      border: "border-yellow-500/50",
      text: "text-yellow-400",
      accent: "bg-yellow-500/20",
    },
  };
  return colors[color][type];
};

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("frontend");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const selectedCategoryData = skillCategories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <div className=" bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-green-500/10 blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 pb-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-700/50 backdrop-blur-sm">
              <Cpu className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">
                Minhas Habilidades
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Tecnologias &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
                Expertises
              </span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Uma visão abrangente das tecnologias que domino e utilizo para
              criar soluções inovadoras. Desde desenvolvimento frontend até
              arquiteturas backend robustas.
            </p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`group p-6 rounded-2xl bg-gradient-to-br ${getColorClasses(
                    achievement.color
                  )} border ${getColorClasses(
                    achievement.color,
                    "border"
                  )} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`p-3 rounded-xl ${getColorClasses(
                        achievement.color,
                        "accent"
                      )}`}
                    >
                      <Icon
                        className={`w-6 h-6 ${getColorClasses(
                          achievement.color,
                          "text"
                        )}`}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${getColorClasses(
                          category.color
                        )} ${getColorClasses(
                          category.color,
                          "border"
                        )} text-white`
                      : "bg-gray-800/50 border-gray-600 text-gray-300 hover:border-blue-500/50 hover:text-blue-300"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs opacity-75">
                    {category.skills.length}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              {selectedCategoryData && (
                <>
                  <selectedCategoryData.icon
                    className={`w-8 h-8 ${getColorClasses(
                      selectedCategoryData.color,
                      "text"
                    )}`}
                  />
                  {selectedCategoryData.name}
                </>
              )}
            </h2>
            <p className="text-gray-400 mt-2">
              {selectedCategoryData?.skills.length} Tecnologias Conhecidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCategoryData?.skills.map((skill) => (
              <div
                key={skill.name}
                className="group p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {skill.experience}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">
                      {skill.level}%
                    </div>
                    <div className="text-xs text-gray-400">
                      {skill.projects} projetos
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getColorClasses(
                        selectedCategoryData.color
                      )} transition-all duration-1000 ease-out`}
                      style={{ width: isLoaded ? `${skill.level}%` : "0%" }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400" />
                      Nível{" "}
                      {skill.level >= 90
                        ? "Expert"
                        : skill.level >= 70
                        ? "Avançado"
                        : "Intermediário"}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <ChevronRight className="w-4 h-4" />
                      Ver projetos
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 py-36">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/50">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30">
                <Cloud className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">
                  Resumo da Experiência
                </span>
              </div>

              <h2 className="text-3xl font-bold">
                Transformando Ideias em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Realidade Digital
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    15+
                  </div>
                  <div className="text-gray-300">Tecnologias Conhecidas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    5+
                  </div>
                  <div className="text-gray-300">Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    3+
                  </div>
                  <div className="text-gray-300">Anos de Experiência</div>
                </div>
              </div>

              <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Minha jornada no desenvolvimento web começou com curiosidade e
                evoluiu para uma paixão por criar soluções tecnológicas que
                fazem a diferença. Cada projeto é uma oportunidade de aprender
                algo novo e aprimorar minhas habilidades.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
