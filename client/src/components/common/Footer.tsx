import React, { useState } from "react";
import { Button } from "../ui/Button";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };
  return (
    <footer className="bg-black text-white pt-16 pb-12 rounded-t-[40px] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/** Cabecera del Footer (Logo, Links y Redes) */}
        <div className="flex flex-col lg:flex-row items-center justify-between pb-12 border-b border-neutral-800 gap-8">
          {/** Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-black font-bold">
              <svg
                className="w-5 h-5 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-sans">
              EK
            </span>
          </a>
          {/** Enlaces de navegación */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <a
              href="#about"
              className="text-sm text-neutral-300 hover:text-[#b9ff66] transition-colors underline underline-offset-4"
            >
              Sobre mí
            </a>
            <a
              href="#services"
              className="text-sm text-neutral-300 hover:text-[#b9ff66] transition-colors underline underline-offset-4"
            >
              Services
            </a>
            <a
              href="#use-cases"
              className="text-sm text-neutral-300 hover:text-[#b9ff66] transition-colors underline underline-offset-4"
            >
              Use Cases
            </a>
            <a
              href="#process"
              className="text-sm text-neutral-300 hover:text-[#b9ff66] transition-colors underline underline-offset-4"
            >
              Process
            </a>
          </nav>
          {/**Redes sociales */}
          <div className="flex items-center gap-4">
            {["GitHub", "LinkedIn", "Youtube"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#b9ff66] hover:text-black transition-colors flex items-center justify-center text-sm font-semibold"
                aria-label={social}
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>
        {/** Sección central: Info de contacto y Formulario de Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-b border-neutral-800 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-block px-3 py-1 bg-[#b9ff66] text-black text-xs font-bold rounded-lg uppercase tracking-wider">
              Contact us:
            </span>
            <p className="text-neutral-300 text-base">
              Email:{" "}
              <span className="text-white font-semibold">
                Contacto@tudominio.com
              </span>
            </p>
            <p className="text-neutral-300 text-base">
              Location:{" "}
              <span className="text-white font-semibold">
                Caracas, Venezuela
              </span>
            </p>
          </div>

          <div className="lg:col-span-7 bg-neutral-900 p-6 sm:p-8 rounded-3xl border border-neutral-800">
            {subscribed ? (
              <div className="text-center py-4 text-[#b9ff66] font-semibold text-lg">
                ¡Gracias por suscribirte! Te contactaremos pronto
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo electrónico"
                  required
                  className="bg-black border border-neutral-700 text-white placeholder-neutral-500 px-5 py-3.5 rounded-xl flex-1 focus:outline-none focus:border-[#b9ff66] transition-colors text-sm"
                ></input>
                <Button
                  variant="primary"
                  className="bg-[#b9ff66] text-black hover:bg-white text-sm font-bold py-3.5 px-6"
                >
                  Subscribe to news
                </Button>
              </form>
            )}
          </div>
          {/** Copyright inferior */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-neutral-500 text-sm gap-4">
            <p> 2026 EK. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
