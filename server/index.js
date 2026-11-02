const express = require("express");
const cors = require("cors");
const challengeRoutes = require("./src/routes/challenge.routes");
const { swaggerDocs } = require("./src/config/swagger");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Montar las rutas de la API
app.use("/api/challenges", challengeRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend escuchando en http://localhost:${PORT}`);

  // Inicializar la documentación de Swagger
  swaggerDocs(app);
});
