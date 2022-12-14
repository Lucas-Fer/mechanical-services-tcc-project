import { Router } from "express";
import ServiceController from "../controllers/Services.controllers";
import Services from "../database/models/Services.model";
import Service from "../services/Service.services";

const servicesRoutes = Router();

const servicesController = new ServiceController(new Service(Services));

servicesRoutes.get('/', (req, res) => servicesController.getAll(req, res));
servicesRoutes.post('/register', (req, res) => servicesController.create(req, res));

servicesRoutes.put('/update-by-user/:id', (req, res) => servicesController.updateByUser(req, res));
servicesRoutes.put('/update-by-manager/:id', (req, res) => servicesController.updateByManager(req, res));
servicesRoutes.put('/update-by-mechanical/:id', (req, res) => servicesController.updateByMechanical(req, res));

servicesRoutes.delete('/delete/:id', (req, res) => servicesController.delete(req, res));
servicesRoutes.get('/:id', (req, res) => servicesController.getUserServices(req, res));
servicesRoutes.get('/mechanical/:id', (req, res) => servicesController.getMechanicalServices(req, res));
servicesRoutes.get('/workshop/:id', (req, res) => servicesController.getWorkshopServices(req, res));
servicesRoutes.get('/serviceId/:id', (req, res) => servicesController.getServiceById(req, res));
servicesRoutes.get('/mechanical/:id', (req, res) => servicesController.getAllByMechanical(req, res));

export default servicesRoutes;