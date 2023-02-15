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

  public async updateMoto(id: string, motoUpdated: IMotorcycle) {
    const updated = await this.motoODM.updateMoto(id, motoUpdated) as IMotorcycle;
    const result = this.mountMoto(updated);
    return result;
  }

  public async deleteMoto(id: string) {
    await this.motoODM.delete(id);
  }
}

export default MotoService;
