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

  public async findAll() {
    const allMotocycles = await this.motoODM.findAll();
    const result = allMotocycles.map((motorcycle: IMotorcycle) => this.mountMoto(motorcycle));
    return result;
  }

  public async findById(id: string) {
    const foundMoto = await this.motoODM.findById(id);
    if (foundMoto) return this.mountMoto(foundMoto);
    return undefined;
  }
}

export default MotoService;
