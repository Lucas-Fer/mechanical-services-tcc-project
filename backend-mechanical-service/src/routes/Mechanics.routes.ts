import { Router } from "express";
import MechanicalService from "../services/Mechanical.services";
import MechanicalController from "../controllers/Mechanics.controller";
import Mechanical from "../database/models/Mechanical.model";

const mechanicalRoute = Router();

const mechanicalController = new MechanicalController(new MechanicalService(Mechanical));

mechanicalRoute.get('/', (req, res) => mechanicalController.getAll(req, res));

export default mechanicalRoute;