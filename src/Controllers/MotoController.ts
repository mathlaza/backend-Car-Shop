import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoService from '../Services/MotoService';

class MotoController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private motoService: MotoService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.motoService = new MotoService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMoto = await this.motoService.create(motorcycle);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const allMotorcycles = await this.motoService.findAll();
    return this.res.status(200).json(allMotorcycles);
  }

  public async findById() {
    const { id } = this.req.params;

    try {
      if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });

      const foundMoto = await this.motoService.findById(id);
      if (!foundMoto) return this.res.status(404).json({ message: 'Motorcycle not found' });

      return this.res.status(200).json(foundMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateMoto() {
    const { id } = this.req.params;
    const { body } = this.req;
    try {
      if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });

      const foundMoto = await this.motoService.findById(id);
      if (!foundMoto) return this.res.status(404).json({ message: 'Motorcycle not found' });

      const motoUpdated = await this.motoService.updateMoto(id, body);
      return this.res.status(200).json(motoUpdated);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotoController;
