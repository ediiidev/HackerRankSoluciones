const fs = require("fs");
const path = require("path");

const getDataPath = () => path.join(__dirname, "../data/challenges.json");

// Obtener todos los desafíos (o filtrados por categoría)
exports.getChallenges = (req, res) => {
  const { category } = req.query;

  fs.readFile(getDataPath(), "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error al leer los datos" });

    let challenges = JSON.parse(data);
    if (category) {
      challenges = challenges.filter(
        (c) => c.category.toLowerCase() === category.toLowerCase(),
      );
    }

    res.json(challenges);
  });
};

// Obtener un desafío por ID con descripción detallada
exports.getChallengeById = (req, res) => {
  const { id } = req.params;

  fs.readFile(getDataPath(), "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error al leer los datos" });

    const challenges = JSON.parse(data);
    const challenge = challenges.find((c) => c.id === id);

    if (!challenge) {
      return res.status(404).json({ message: "Desafío no encontrado" });
    }

    res.json(challenge);
  });
};
