import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle'); // Será modificado para "motorcycles" pelo Mongoose.
  }

  public async updateMoto(id: string, motoUpdated: IMotorcycle) {
    await this.model.updateOne({ _id: id }, { ...motoUpdated });
    return this.findById(id);
  }
}

export default MotorcycleODM;
