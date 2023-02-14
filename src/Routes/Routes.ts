import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());

routes.get('/cars', (_req, res, _next) => new CarController(_req, res, _next).findAll());

export default routes;
