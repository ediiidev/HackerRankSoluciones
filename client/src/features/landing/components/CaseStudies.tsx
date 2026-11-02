import React from "react";

interface CaseStudy {
  description: string;
  linkText: string;
}

const CASES: CaseStudy[] = [
  {
    description: "Para un sistema de gestión web local",
    linkText: "Learn more",
  },
  {
    description: "Para un sistema de gestión web local",
    linkText: "Learn more",
  },
  {
    description: "Para un sistema de gestión web local",
    linkText: "Learn more",
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/**Encabezado de la sección */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              Case Study
            </h2>
            <span className="px-3 py-1 bg-[#b9ff66] text-black text-sm font-bold rounded-lg">
              Portfolio
            </span>
          </div>
          <p className="text-neutral-600 max-w-xl text-base sm:text-lg leading-relaxed">
            Explora ejemplos reales de soluciones de ingenería
          </p>
        </div>
        {/** Tarjeta contenedora principal */}
        <div className="bg-black text-white rounded-3xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative overflow-hidden">
          {CASES.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between space-y-6 ${
                index !== CASES.length - 1
                  ? "md:border-r md:border-neutral-800 md:pr-8 lg:pr-12"
                  : ""
              }`}
            >
              <p className="text-neutral-300 text-base leading-relaxed">
                {item.description}
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#b9ff66] hover:text-white font-semibold text-base transition-colors group"
                >
                  <span>{item.linkText}</span>
                  <svg
                    className="w-4 h-4 transform -rotate-45 group-hover:translate-x-1 transition-transform"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
