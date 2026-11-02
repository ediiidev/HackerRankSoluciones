import React from "react";
import { useParams, Link } from "react-router-dom";
import { MOCK_CHALLENGES } from "../features/challenges/data/challengesData";
import { Button } from "../components/ui/Button";

export const ChallengeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  //Buscar el desafío correspondiente según el ID de la URL
  const challenge = MOCK_CHALLENGES.find((item) => item.id === id);
  const difficultyColors = {
    Easy: "bg-[#b9ff66] text-black",
    Medium: "bg-amber-300 text-black",
    Hard: "bg-rose-400 text-black",
  };

  if (!challenge) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-extrabold text-black mb-4">
          Desafío no encontrado
        </h2>
        <p className="text-neutral-600 mb-8">
          El ejecicio que buscas aún no está realizado
        </p>
        <Link to="/">
          <Button variant="primary">Volver al Inicio</Button>
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/**Boton de Retorno */}
      <div className="mb-8">
        <Link
          to={`/category/${challenge.category}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-black transition-colors"
        >
          ← Volver a desafíos de {challenge.category.toUpperCase()}
        </Link>
      </div>
      {/** Cabecera del Reto */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${difficultyColors[challenge.difficulty]}`}
          >
            {challenge.difficulty}
          </span>
          <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-bold rounded-lg uppercase">
            HackerRank
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          {challenge.title}
        </h1>
        <p className="text-neutral-600 text-lg leading-relaxed max-w-3xl">
          {challenge.summary}
        </p>
      </div>
      {/** Reproducto de Video de Youtube Embebido */}
      <div className="bg-black rounded-3xl p-3 sm:p-4 shadow-xl mb-10 overflow-hidden border border-neutral-800">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-900">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${challenge.youtubeVideoId}`}
            title={challenge.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/** Acciones e Información Adicional */}
      <div className="bg-[#f3f3f3] rounded-3xl p-8 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-black mb-1">
            ¿Quieres revisar el código?
          </h3>
          <p className="text-neutral-600 text-sm">
            Accede al repositorio en GitHub para{" "}
          </p>
        </div>
        <a href={challenge.githubUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" className="text-sm px-6 py-3">
            Ver en GitHub ↗
          </Button>
        </a>
      </div>
    </div>
  );
};
