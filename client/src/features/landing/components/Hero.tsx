import React from "react";
import { Button } from "../../../components/ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/** Columna de texto y CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-[1.1]">
              Ejercicios de HackerRank
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl font-normal leading-relaxed">
              A continuación encontraras todos los enlaces de los repositorios
              en donde se realizaron los ejercicios de HacerRank
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                className="text-base px-8 py-4 rounded-xl shadow-sm hover:shadow-md"
              >
                Book a consultation
              </Button>
            </div>
          </div>
          {/**Columna de Ilustración Vectorial / Gráfico */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/**Contenedor gráfico estilizado estilo */}
              <div className="relative w-full h-full flex items-center justify-center p-6 bg-neutral-50 rounded-3xl border border-neutral-100 shadow-sm">
                <div className="text-center space-y-4">
                  {/**Ilustración SVG inspirada en altavoz / marketing */}
                  <svg
                    className="w-48 h-48 mx-auto text-black drop-shadow-sm"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15H3.885A1.885 1.885 0 012 11.797V12.2a1.885 1.885 0 011.885-1.885h1.55l2.147-6.15A1.76 1.76 0 0111 5.882z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.542 8.458a5 5 0 010 7.084m2.828-9.912a9 9 0 010 12.736"
                    />
                  </svg>
                  <span className="inline-block px-3 py-1 bg-[#b9ff66] text-black text-xs font-bold rounded-full uppercase tracking-wider">
                    Digital Strategy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
