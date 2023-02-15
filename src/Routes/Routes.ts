import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotoController from '../Controllers/MotoController';

const routes = Router();

const CAR_ID_URL = '/cars/:id';
const MOTO_ID_URL = '/motorcycles/:id';

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());

routes.get('/cars', (_req, res, _next) => new CarController(_req, res, _next).findAll());

routes.get(CAR_ID_URL, (req, res, next) => new CarController(req, res, next).findById());

routes.put(CAR_ID_URL, (req, res, next) => new CarController(req, res, next).updateCar());

routes.delete(CAR_ID_URL, (req, res, next) => new CarController(req, res, next).deleteCar());

routes.post('/motorcycles', (req, res, next) => new MotoController(req, res, next).create());

routes.get('/motorcycles', (_req, res, _next) => new MotoController(_req, res, _next).findAll());

routes.get(MOTO_ID_URL, (req, res, next) => new MotoController(req, res, next).findById());

routes.put(MOTO_ID_URL, (req, res, next) => new MotoController(req, res, next).updateMoto());

routes.delete(MOTO_ID_URL, (req, res, next) => new MotoController(req, res, next).deleteMoto());

export default routes;
