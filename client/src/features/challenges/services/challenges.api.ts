import type { Challenge } from "../../../types/challenge";

const API_BASE_URL = "http://localhost:5000/api/challenges";

export const fetchChallengesByCategory = async (
  category: string,
): Promise<Challenge[]> => {
  const response = await fetch(`${API_BASE_URL}?category=${category}`);
  if (!response.ok) throw new Error("Error al cargar desafíos");
  return response.json();
};

export const fetchChallengeById = async (
  id: string,
): Promise<Challenge | null> => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  if (!response.ok) return null;
  return response.json();
};
