import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import { insertedCar, allCars, allCarsResult, carUpdated, carToUpdate } from '../mocks/CarsMock';

describe('Tests on layer Service of Cars', function () {
  afterEach(sinon.restore);

  it('Should register a car', async function () {
    const created: Car = new Car(insertedCar);

    sinon.stub(Model, 'create').resolves(created);

    const carService = new CarService();
    const result = await carService.create(insertedCar);

    expect(result).to.be.deep.equal(created);
  });

  it('Should get all cars', async function () {
    sinon.stub(Model, 'find').resolves(allCars);

    const carService = new CarService();
    const result = await carService.findAll();

    expect(result).to.be.deep.equal(allCarsResult);
  });

  it('Should get a car by id', async function () {
    sinon.stub(Model, 'findOne').resolves(allCars[1]);

    const service = new CarService();
    const result = await service.findById(allCarsResult[1].id);

    expect(result).to.be.deep.equal(allCarsResult[1]);
  });

  it('Should throw error when car is not found by some id', async function () {
    sinon.stub(Model, 'findOne').resolves(undefined);

    const service = new CarService();
    const noResult = await service.findById('xxxxxxxxxxxxxxxxxxxxxxxx');

    expect(noResult).to.be.deep.equal(undefined);
  });

  it('Should update a car', async function () {
    sinon.stub(Model, 'updateOne').resolves();
    sinon.stub(Model, 'findOne').resolves(carUpdated);

    const service = new CarService();
    const result = await service.updateCar(allCarsResult[1].id, carToUpdate);

    expect(result).to.be.deep.equal(carUpdated);
  });
});
