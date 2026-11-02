export interface Challenge {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: "react" | "python" | "sql";
  summary: string;
  youtubeVideoId: string; //ID del video de Youtube (ej. "dQw4w9WgXcQ")
  githubUrl: string;
  solutionCode?: string;
}
