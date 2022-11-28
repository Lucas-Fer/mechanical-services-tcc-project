import { Router } from "express";
import FuncionariosModel from "../database/models/Funcionanios.model";
import FuncionarioService from "../services/Funcionario.services";
import FuncionarioController from "../controllers/Funcionario.controller";



const funcionarioRoute = Router();

const funcionarioController = new FuncionarioController(new FuncionarioService(FuncionariosModel));

funcionarioRoute.post('/create-funcionario', (req, res) => funcionarioController.create(req, res));
funcionarioRoute.post('/login', (req, res) => funcionarioController.login(req, res));


export default funcionarioRoute;