import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { CategoryPage } from "../pages/CategoryPage";
import { ChallengeDetailPage } from "../pages/ChallengeDetailPage";
import { ContactForm } from "../features/landing/components/ContactForm";

// Componente para la página principal (home)
const HomePage: React.FC = () => {
  return (
    <>
      <ContactForm />
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
