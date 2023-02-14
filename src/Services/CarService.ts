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
    return newCar;
  }
}

export default CarService;
