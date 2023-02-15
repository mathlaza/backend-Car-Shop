import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car'); // Será modificado para "cars" pelo Mongoose.
  }

  public async updateCar(id: string, carUpdated: ICar) {
    await this.model.updateOne({ _id: id }, { ...carUpdated });
    return this.findById(id);
  }
}

export default CarODM;
