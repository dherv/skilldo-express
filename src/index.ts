import express from "express";
import dotenv from "dotenv";
import todosControllerFactory from "./todos/todos.controller";
import todosServiceFactory from "./todos/todos.service";
import todoRepositoryFactory from "./todos/todos.repository";
import mysql from "mysql";
import { config } from "./database.config";

const app = express();
dotenv.config();
const PORT = process.env.PORT;
const pool = mysql.createPool(config);
const todosRepository = todoRepositoryFactory(pool);
const todosService = todosServiceFactory(todosRepository);
const todosController = todosControllerFactory(todosService);

app.use(express.json());

app.get("/v1/todos", todosController.findAll);
app.get("/v1/todos/:id", todosController.findOne);
app.post("/v1/todos", todosController.create);
app.put("/v1/todos/:id", todosController.update);
app.delete("/v1/todos/:id", todosController.delete);

app.listen(PORT, () => {
  console.info(`Running on port: ${PORT}`);
});
