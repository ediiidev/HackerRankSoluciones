import type { Challenge } from "../../../types/challenge";

export const MOCK_CHALLENGES: Challenge[] = [
  //React
  {
    id: "react-item-list",
    title: "Item List Filter - React",
    difficulty: "Easy",
    category: "react",
    summary:
      "Construcción de un componente de búsqueda y filtrado en tiempo real optimizando re-renders con custom hooks.",
    youtubeVideoId: "dQw4w9WgXcQ", // Sustituye con el ID de tu video de YouTube
    githubUrl: "https://github.com/ediiidev",
  },
  {
    id: "react-slideshow",
    title: "Slideshow Component - React",
    difficulty: "Medium",
    category: "react",
    summary:
      "Implementación de un slider interactivo con manejo de estado local, botones de navegación y deshabilitación dinámica.",
    youtubeVideoId: "dQw4w9WgXcQ",
    githubUrl: "https://github.com/ediiidev",
  },

  // --- PYTHON ---
  {
    id: "python-nested-lists",
    title: "Nested Lists & Runner-Up Score",
    difficulty: "Easy",
    category: "python",
    summary:
      "Resolución del problema de listas anidadas utilizando comprensiones de listas y funciones de ordenamiento en Python.",
    youtubeVideoId: "dQw4w9WgXcQ",
    githubUrl: "https://github.com/ediiidev",
  },

  // --- SQL ---
  {
    id: "sql-advanced-select",
    title: "The PADS - Advanced SELECT",
    difficulty: "Medium",
    category: "sql",
    summary:
      "Consulta avanzada utilizando funciones de agregación (`COUNT`), concatenación de cadenas y cláusula `GROUP BY`.",
    youtubeVideoId: "dQw4w9WgXcQ",
    githubUrl: "https://github.com/ediiidev",
  },
];
