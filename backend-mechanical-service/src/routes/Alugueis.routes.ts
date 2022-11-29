import { Router } from "express";
import AlugueisModel from "../database/models/Alugueis.model";
import AlugueisService from "../services/Alugueis.services";
import AlugueisController from "../controllers/Alugueis.controller";


const aluguelRoute = Router();

const aluguelController = new AlugueisController(new AlugueisService(AlugueisModel));

aluguelRoute.get('/', (req, res) => aluguelController.getAll(req, res));
aluguelRoute.post('/criar-aluguel', (req, res) => aluguelController.create(req, res));
aluguelRoute.delete('/delete-aluguel/:id', (req, res) => aluguelController.delete(req, res));

export default aluguelRoute;