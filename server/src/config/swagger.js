const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "HackerRank Solutions API",
      version: "1.0.0",
      description:
        "Documentación oficial de la API backend para el portafolio de retos de HackerRank (React, Python, SQL).",
      contact: {
        name: "Tu Nombre / EdiiiDev",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Servidor de Desarrollo Local",
      },
    ],
  },
  // Rutas donde Swagger buscará la documentación (anotaciones JSDoc)
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(
    "📄 Documentación de Swagger disponible en http://localhost:5000/api-docs",
  );
};

module.exports = { swaggerDocs };
