import React from "react";
import { Link } from "react-router-dom";
import type { Challenge } from "../../../types/challenge";

interface ChallengeCardProps {
  challenge: Challenge;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  const difficultyColors = {
    Easy: "bg-[#b9ff66] text-black",
    Medium: "bg-amber-300 text-black",
    Hard: "bg-rose-400 text-black",
  };

  return (
    <div className="bg-[#f3f3f3] rounded-3xl p-6 sm:p-8 border border-neutral-200 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span
            className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${difficultyColors[challenge.difficulty]}`}
          >
            {challenge.difficulty}
          </span>
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
            HackerRank
          </span>
        </div>
        <h3 className="text-xl font-extrabold text-black tracking-tight mb-3 group-hover:text-neutral-700 transition-colors">
          {challenge.title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed mb-6">
          {challenge.summary}
        </p>
      </div>
      <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
        <Link
          to={`/challenge/${challenge.id}`}
          className="inline-flex items-center gap-2 text-black font-bold text-sm hover:underline"
        >
          <span>Ver Explicación en Video </span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
