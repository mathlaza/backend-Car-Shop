import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private carService: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.carService = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.carService.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const allCars = await this.carService.findAll();
    return this.res.status(200).json(allCars);
  }

  public async findById() {
    const { id } = this.req.params;

    try {
      if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });

      const foundCar = await this.carService.findById(id);
      if (!foundCar) return this.res.status(404).json({ message: 'Car not found' });

      return this.res.status(200).json(foundCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCar() {
    const { id } = this.req.params;
    const { body } = this.req;
    try {
      if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });

      const foundCar = await this.carService.findById(id);
      if (!foundCar) return this.res.status(404).json({ message: 'Car not found' });

      const carUpdated = await this.carService.updateCar(id, body);
      return this.res.status(200).json(carUpdated);
    } catch (error) {
      this.next(error);
    }
  }
}
export default CarController;
