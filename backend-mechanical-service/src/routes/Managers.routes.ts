import { Router } from "express";
import ManagersService from "../services/Managers.services";
import ManagerController from "../controllers/Managers.controller";
import ManagersModel from "../database/models/Managers.model";

const managersRoute = Router();

const managersController = new ManagerController(new ManagersService(ManagersModel));

managersRoute.get('/', (req, res) => managersController.getAll(req, res));
managersRoute.post('/login', (req, res) => managersController.login(req, res));
managersRoute.put('/update/:id', (req, res) => managersController.update(req, res));
managersRoute.delete('/delete/:id', (req, res) => managersController.delete(req, res));

export default managersRoute;