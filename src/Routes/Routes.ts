import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());

routes.get('/cars', (_req, res, _next) => new CarController(_req, res, _next).findAll());

routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).findById());

routes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCar());

export default routes;
