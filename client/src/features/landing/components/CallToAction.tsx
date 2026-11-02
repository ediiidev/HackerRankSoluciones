import React from "react";
import { Button } from "../../../components/ui/Button";

export const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#f3f3f3] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-neutral-200">
          {/** Contenido de texto y botón */}
          <div className="flex flex-col items-start max-w-xl space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
              Let's make things happen
            </h3>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
              {" "}
              Contactanos hoy para saber más sobre cómo nuestros servicios
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                className="text-base px-8 py-3.5 rounded-xl"
              >
                Get yout free proposal
              </Button>
            </div>
          </div>
          {/** Ilustración / Gráfico decorativo lateral */}
          <div className="relative w-full lg:w-auto flex justify-center items-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 relative flex items-center justify-center">
              {/** Elementos geométricos abstractos */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 bg-black rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                  <svg
                    className="w-16 h-16 text-[#b9ff66]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="9" cy="10" r="2" />
                    <circle cx="15" cy="10" r="2" />
                    <path d="M12 16c2 0 3.5-1.5 3.5-1.5H8.5S10 16 12 16z" />
                  </svg>
                </div>
              </div>
              {/** Anillos decorativos de fondo */}
              <div className="w-full h-full border-2 border-dashed border-neutral-300 rounded-full animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
