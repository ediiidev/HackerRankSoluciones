import React from "react";
import { useParams, Link } from "react-router-dom";
import { MOCK_CHALLENGES } from "../features/challenges/data/challengesData";
import { ChallengeCard } from "../features/challenges/components/ChallengeCard";

export const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  //Filtrar los desafíos según el parámetro de la URL
  const filteredChallenges = MOCK_CHALLENGES.filter(
    (item) => item.category.toLowerCase() === categoryName?.toLowerCase(),
  );
  const formattedCategory = categoryName
    ? categoryName.toUpperCase()
    : "TECNOLOGÍA";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/** Botón Volver */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-black transition-colors"
        >
          ← Volver a Inicio{" "}
        </Link>
      </div>
      {/**Encabezado */}
      <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight">
            Desafíos de {formattedCategory}
          </h1>
          <span className="px-3 py-1 bg-[#b9ff66] text-black text-xs font-bold rounded-lg uppercase">
            HackerRank
          </span>
        </div>
      </div>
      {/** Grid de Desafíos o Mensaje Vacío */}
      {filteredChallenges.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      ) : (
        <div className="bg-[#f3f3f3] rounded-3xl p-12 text-center border border-neutral-200">
          <p className="text-lg text-neutral-600 font-medium">
            Aún no hay desafíos cargados para la categoría{" "}
            <strong className="text-black">{formattedCategory}</strong>.
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            Pronto subiré nuevos videos y ejercicios explicados.
          </p>
        </div>
      )}
    </div>
  );
};
