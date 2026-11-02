const express = require("express");
const router = express.Router();
const challengeController = require("../controllers/challenge.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Challenge:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - difficulty
 *         - category
 *         - summary
 *         - youtubeVideoId
 *         - githubUrl
 *       properties:
 *         id:
 *           type: string
 *           description: Identificador único del reto
 *         title:
 *           type: string
 *           description: Título del desafío de HackerRank
 *         difficulty:
 *           type: string
 *           enum: [Easy, Medium, Hard]
 *           description: Nivel de dificultad del reto
 *         category:
 *           type: string
 *           enum: [react, python, sql]
 *           description: Tecnología a la que pertenece
 *         summary:
 *           type: string
 *           description: Resumen breve del reto
 *         description:
 *           type: string
 *           description: Descripción detallada del ejercicio
 *         youtubeVideoId:
 *           type: string
 *           description: ID del video explicativo en YouTube
 *         githubUrl:
 *           type: string
 *           description: Enlace al repositorio de GitHub con la solución
 */

/**
 * @swagger
 * /api/challenges:
 *   get:
 *       summary: Obtiene la lista de todos los desafíos
 *       tags: [Challenges]
 *       parameters:
 *         - in: query
 *           name: category
 *           schema:
 *             type: string
 *           required: false
 *           description: Filtrar por categoría (react, python, sql)
 *       responses:
 *         200:
 *           description: Lista de desafíos obtenida con éxito
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Challenge'
 */
router.get("/", challengeController.getChallenges);

/**
 * @swagger
 * /api/challenges/{id}:
 *   get:
 *       summary: Obtiene un desafío específico por su ID
 *       tags: [Challenges]
 *       parameters:
 *         - in: ایران / in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: ID único del desafío
 *       responses:
 *         200:
 *           description: Detalle del desafío encontrado
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Challenge'
 *         404:
 *           description: Desafío no encontrado
 */
router.get("/:id", challengeController.getChallengeById);

module.exports = router;
