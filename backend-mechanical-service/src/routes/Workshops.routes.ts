import { Router } from "express";
import WorkshopService from "../services/Workshop.services";
import WorkshopController from "../controllers/Workshops.controller";
import WorkshopModel from "../database/models/Workshops.model";

const workshopRoute = Router();

const workshopController = new WorkshopController(new WorkshopService(WorkshopModel))

workshopRoute.get('/', (req, res) => workshopController.getAll(req, res));
workshopRoute.post('/register', (req, res) => workshopController.create(req, res));
workshopRoute.post('/login', (req, res) => workshopController.login(req, res));
workshopRoute.put('/update/:id', (req, res) => workshopController.update(req, res));
workshopRoute.delete('/delete/:id', (req, res) => workshopController.delete(req, res));

workshopRoute.get('/:id/workshop-managers', (req, res) => workshopController.getAllWorkshopManagers(req, res));
workshopRoute.get('/:id/workshop-mechanicals', (req, res) => workshopController.getAllWorkshopMechanicals(req, res));

workshopRoute.post('/:id/register-mechanical', (req, res) => workshopController.createMechanical(req, res));
workshopRoute.post('/:id/register-manager', (req, res) => workshopController.createManager(req, res));

export default workshopRoute;