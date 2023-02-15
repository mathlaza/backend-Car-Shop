import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotoController from '../Controllers/MotoController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());

routes.get('/cars', (_req, res, _next) => new CarController(_req, res, _next).findAll());

routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).findById());

routes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCar());

routes.delete('/cars/:id', (req, res, next) => new CarController(req, res, next).deleteCar());

routes.post('/motorcycles', (req, res, next) => new MotoController(req, res, next).create());

routes.get('/motorcycles', (_req, res, _next) => new MotoController(_req, res, _next).findAll());

routes.get('/motorcycles/:id', (req, res, next) => new MotoController(req, res, next).findById());

routes.put('/motorcycles/:id', (req, res, next) => new MotoController(req, res, next).updateMoto());

export default routes;
