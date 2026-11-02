import React from "react";
import { useState } from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation & Requirements",
    description: "Analizmos las necesidades de tu proyecto",
  },
  {
    number: "02",
    title: "Consultation & Requirements",
    description: "Analizmos las necesidades de tu proyecto",
  },
  {
    number: "03",
    title: "Consultation & Requirements",
    description: "Analizmos las necesidades de tu proyecto",
  },
  {
    number: "04",
    title: "Consultation & Requirements",
    description: "Analizmos las necesidades de tu proyecto",
  },
];

export const Process: React.FC = () => {
  //Mantiene el índice del paso actualmente abierto (por defecto el primero)
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleStep = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/** Encabezado de la sección */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              Our Working Process
            </h2>
            <span className="px-3 py-1 bg-[#b9ff66] text-black text-sm font-bold rounded-lg">
              Step-by-Step
            </span>
          </div>
          <p className="text-neutral-600 max-w-xl text-base sm:text-lg leading-relaxed">
            Metodología estructurada para transformar ideas y requerimientos
          </p>
        </div>
        {/** Lista de pasos (Acordeón) */}
        <div className="flex flex-col gap-6">
          {STEPS.map((step, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={step.number}
                className={`rounded-3xl border border-black p-8 transition-all duration-300 shadow-[0_5px_0_0_#000] ${
                  isOpen ? "bg-[#b9ff66]" : "bg-[#f3f3f3] hover:bg-neutral-100"
                }`}
              >
                {/** Cabecera del acordeón */}
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-3xl sm:text-5xl font-black text-black">
                      {step.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  {/** Icono + / - */}
                  <div className="w-10 h-10 rounded-full border border-black bg-white flex items-center justify-center text-black font-bold text-xl shrink-0 ml-4 group-hover:scale-105 transition-transform">
                    {isOpen ? "-" : "+"}
                  </div>
                </button>
                {/** Contenido desplegable */}
                {isOpen && (
                  <div className="mt-6 pt-6 border-t border-black/20 text-black text-base sm:text-lg leading-relaxed animate-fadeIn">
                    <p>{step.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
