import ICar from '../../../src/Interfaces/ICar';

const insertedCar: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const allCars = [
  {
    id: '63ec6569ebaeb9559178d8f1',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63ec6798ebaeb9559178d8f4',
    model: 'Fusca',
    year: 1969,
    color: 'Red',
    buyValue: 3000,
    doorsQty: 2,
    seatsQty: 5,
  },
];

const allCarsResult = [
  {
    id: '63ec6569ebaeb9559178d8f1',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63ec6798ebaeb9559178d8f4',
    model: 'Fusca',
    year: 1969,
    color: 'Red',
    status: false,
    buyValue: 3000,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export { insertedCar, allCars, allCarsResult };
