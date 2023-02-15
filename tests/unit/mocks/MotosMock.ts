import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const insertedMoto: IMotorcycle = {
  model: 'Yahama',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const allMotos = [
  {
    id: '67ec6569ebaeb9559178d8g4',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '69ec6569ebaeb9559178d8t8',
    model: 'Honda Scooter',
    year: 2014,
    color: 'Blue',
    buyValue: 10.000,
    category: 'Street',
    engineCapacity: 200,
  },
];

const allMotosResult = [
  {
    id: '67ec6569ebaeb9559178d8g4',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '69ec6569ebaeb9559178d8t8',
    model: 'Honda Scooter',
    year: 2014,
    color: 'Blue',
    status: false,
    buyValue: 10.000,
    category: 'Street',
    engineCapacity: 200,
  },
];

const motoToUpdate = {
  model: 'BIS',
  year: 1999,
  color: 'Green',
  status: true,
  buyValue: 9.000,
  category: 'Street',
  engineCapacity: 100,
};

const motoUpdated = {
  id: '69ec6569ebaeb9559178d8t8',
  model: 'BIS',
  year: 1999,
  color: 'Green',
  status: true,
  buyValue: 9.000,
  category: 'Street',
  engineCapacity: 100,
};

export { insertedMoto, allMotos, allMotosResult, motoToUpdate, motoUpdated };
