import { Router } from "express";
import CarrosService from "../services/Carros.services";
import CarroController from "../controllers/Carros.controller";
import CarrosModel from "../database/models/Carros.model";


const carroRoute = Router();

const carroController = new CarroController(new CarrosService(CarrosModel));

carroRoute.get('/', (req, res) => carroController.getAll(req, res));
carroRoute.post('/cadastrar-carro', (req, res) => carroController.create(req, res));
carroRoute.put('/atualizar-carro/:id', (req, res) => carroController.update(req, res));

export default carroRoute;