import React from "react";
interface ServiceItem {
  title: string;
  description: string;
  linkText: string;
  variant: "light" | "dark";
  badgeColor?: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: "Frontend Development",
    description:
      "Construcción de interfaces web modernas, escalables y altamente responsivas utilizando React, Next.js y Tailwind CSS con una arquitectura modular impecable.",
    linkText: "Learn more",
    variant: "light",
  },
  {
    title: "Backend & APIs",
    description:
      "Desarrollo de microservicios robustos y APIs de alto rendimiento con Python, FastAPI y Node.js conectados a bases de datos relacionales.",
    linkText: "Learn more",
    variant: "dark",
  },
  {
    title: "Database & Architecture",
    description:
      "Diseño de esquemas de datos eficientes, modelado con PostgreSQL y Prisma ORM, garantizando integridad, velocidad y buenas prácticas.",
    linkText: "Learn more",
    variant: "dark",
  },
  {
    title: "Cloud & Deployment",
    description:
      "Automatización de despliegues continuos, gestión de entornos en contenedores Docker y optimización en plataformas cloud.",
    linkText: "Learn more",
    variant: "light",
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/** Encabeza de la sección */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              Services
            </h2>
            <span className="px-3 py-1 bg-[#b9ff66] text-black text-sm font-bold rounded-lg">
              Expertise
            </span>
          </div>
          <p className="text-neutral-600 max-w-xl text-base sm:text-lg leading-relaxed">
            Soluciones de ingeniería de Software diseñadas para transformar
          </p>
        </div>
        {/**Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const isDark = service.variant === "dark";
            return (
              <div
                key={index}
                className={`group relative rounded-3xl p-8 sm:p-10 border border-neutral-200 transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${
                  isDark ? "bg-black text-white" : "bg-[#f3f3f3] text-black"
                }`}
              >
                {/**Contenido superior de la tarjeta */}
                <div>
                  <h3
                    className={`inline-block text-2xl sm:text-3xl font-bold tracking-tight mb-4 px-2 py-1 rounded-lg ${
                      isDark ? "bg-white text-black" : "bg-[#b9ff66] text-black"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-base sm:text-lg leading-relaxed mb-8 ${
                      isDark ? "text-neutral-300" : "text-neutral-600"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
                {/** Botón / Enlace inferior */}
                <div className="flex items-center gap-3 pt-4">
                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-transform group-hover:scale-110 ${
                      isDark ? "bg-white text-black" : "bg-black text-white"
                    }`}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <svg
                      className="w-4 h-4 transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                  <span
                    className={`text-sm font-semibold tracking-wide ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    {service.linkText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
