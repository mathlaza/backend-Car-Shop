import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private carODM;

  constructor() {
    this.carODM = new CarODM();
  }

  private registerCar(insertedCar: ICar) {
    return new Car(insertedCar);
  }

  public async create(insertedCar: ICar) {
    const newCar = await this.carODM.create(insertedCar);
    return this.registerCar(newCar);
  }

  public async findAll() {
    const allCars = await this.carODM.findAll();
    const data = allCars.map((car: ICar) => this.registerCar(car));
    return data;
  }

  public async findById(id: string) {
    const foundCar = await this.carODM.findById(id);
    if (foundCar) return this.registerCar(foundCar);
    return undefined;
  }
}

export default CarService;
