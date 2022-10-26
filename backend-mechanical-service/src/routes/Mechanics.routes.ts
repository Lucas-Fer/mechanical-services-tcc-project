import { Router } from "express";
import MechanicalService from "../services/Mechanical.services";
import MechanicalController from "../controllers/Mechanics.controller";
import Mechanical from "../database/models/Mechanical.model";

const mechanicalRoute = Router();

const mechanicalController = new MechanicalController(new MechanicalService(Mechanical));

mechanicalRoute.get('/', (req, res) => mechanicalController.getAll(req, res));
mechanicalRoute.post('/register', (req, res) => mechanicalController.create(req, res));
mechanicalRoute.post('/login', (req, res) => mechanicalController.login(req, res));
mechanicalRoute.put('/update/:id', (req, res) => mechanicalController.update(req, res));
mechanicalRoute.delete('/delete/:id', (req, res) => mechanicalController.delete(req, res));

export default mechanicalRoute;