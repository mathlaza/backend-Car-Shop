import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private registerCar(insertedCar: ICar) {
    if (insertedCar) return new Car(insertedCar);
    return null;
  }

  public async create(insertedCar: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(insertedCar);
    return this.registerCar(newCar);
  }

  public async findAll() {
    const carODM = new CarODM();
    const allCars = await carODM.findAll();
    const data = allCars.map((car: ICar) => this.registerCar(car));
    return data;
  }

  public async findById(id: string) {
    const carODM = new CarODM();
    const foundCar = await carODM.findById(id);
    if (foundCar) return this.registerCar(foundCar);
    return undefined;
  }
}

export default CarService;
