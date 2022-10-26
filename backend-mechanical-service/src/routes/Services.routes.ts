import { Router } from "express";
import ServiceController from "../controllers/Services.controllers";
import Services from "../database/models/Services.model";
import Service from "../services/Service.services";

const servicesRoutes = Router();

const servicesController = new ServiceController(new Service(Services));

servicesRoutes.get('/', (req, res) => servicesController.getAll(req, res));
servicesRoutes.post('/register', (req, res) => servicesController.create(req, res));

export default servicesRoutes;