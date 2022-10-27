import { Router } from "express";
import WorkshopService from "../services/Workshop.services";
import WorkshopController from "../controllers/Workshops.controller";
import WorkshopModel from "../database/models/Workshops.model";

const workshopRoute = Router();

const workshopController = new WorkshopController(new WorkshopService(WorkshopModel))

workshopRoute.get('/', (req, res) => workshopController.getAll(req, res));

export default workshopRoute;