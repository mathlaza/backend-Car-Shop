import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotoService {
  private motoODM;

  constructor() {
    this.motoODM = new MotorcycleODM();
  }

  private mountMoto(insertedMoto: IMotorcycle) {
    return new Motorcycle(insertedMoto);
  }

  public async create(insertedMoto: IMotorcycle) {
    const newMoto = await this.motoODM.create(insertedMoto);
    return this.mountMoto(newMoto);
  }
}

export default MotoService;