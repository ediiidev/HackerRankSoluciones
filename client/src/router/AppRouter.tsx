import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { Hero } from "../features/landing/components/Hero";
import { CompanyLogos } from "../features/landing/components/CompanyLogos";
import { Services } from "../features/landing/components/Services";
import { CallToAction } from "../features/landing/components/CallToAction";
import { CaseStudies } from "../features/landing/components/CaseStudies";
import { Process } from "../features/landing/components/Process";
import { CategoryPage } from "../pages/CategoryPage";
import { ChallengeDetailPage } from "../pages/ChallengeDetailPage";

// Componente para la página principal (home)
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <CompanyLogos />
      <Services />
      <CallToAction />
      <CaseStudies />
      <Process />
    </>
  );
};

//Componente temporal para la vista de resto por categoría (React, Python, SQL)
/*const CategoryChallengesPage: React.FC = () => {
  return (
    <div>
      <h1>Desafíos de HackerRank</h1>
      <p>A quí se mostrará la lista de retos filtrados por categorías</p>
     </div>
  );
};*/

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/challenge/:id" element={<ChallengeDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
