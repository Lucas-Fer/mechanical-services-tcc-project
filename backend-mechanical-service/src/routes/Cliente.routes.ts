import { Router } from "express";
import ClienteService from "../services/Cliente.services";
import ClienteController from "../controllers/Cliente.controller";
import ClientesModel from "../database/models/Clientes.model";

const clienteRouter = Router();

const clienteController = new ClienteController(new ClienteService(ClientesModel));

clienteRouter.get('/', (req, res) => clienteController.getAll(req, res));
clienteRouter.post('/criar-cliente', (req, res) => clienteController.create(req, res));
clienteRouter.post('/login-cliente', (req, res) => clienteController.login(req, res));
clienteRouter.put('/update-cliente/:id', (req, res) => clienteController.update(req, res));
clienteRouter.delete('/delete-cliente/:id', (req, res) => clienteController.delete(req, res));

export default clienteRouter;