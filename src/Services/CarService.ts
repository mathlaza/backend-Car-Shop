import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private carODM;

  constructor() {
    this.carODM = new CarODM();
  }

  private mountCar(insertedCar: ICar) {
    return new Car(insertedCar);
  }

  public async create(insertedCar: ICar) {
    const newCar = await this.carODM.create(insertedCar);
    return this.mountCar(newCar);
  }

  public async findAll() {
    const allCars = await this.carODM.findAll();
    const result = allCars.map((car: ICar) => this.mountCar(car));
    return result;
  }

  public async findById(id: string) {
    const foundCar = await this.carODM.findById(id);
    if (foundCar) return this.mountCar(foundCar);
    return undefined;
  }

  public async updateCar(id:string, carUpdated: ICar) {
    const updated = await this.carODM.updateCar(id, carUpdated) as ICar;
    const result = this.mountCar(updated);
    return result;
  }
}

export default CarService;
