import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotoService from '../../../src/Services/MotoService';
import { allMotos, allMotosResult, insertedMoto, motoUpdated } from '../mocks/MotosMock';

describe('Tests on layer Service of Motorcycles', function () {
  afterEach(sinon.restore);

  it('Should register a motorcycle', async function () {
    const created: Motorcycle = new Motorcycle(insertedMoto);

    sinon.stub(Model, 'create').resolves(created);

    const motoService = new MotoService();
    const result = await motoService.create(insertedMoto);

    expect(result).to.be.deep.equal(created);
  });

  it('Should get all motorcycles', async function () {
    sinon.stub(Model, 'find').resolves(allMotos);

    const motoService = new MotoService();
    const result = await motoService.findAll();

    expect(result).to.be.deep.equal(allMotosResult);
  });

  it('Should get a motorcycle by id', async function () {
    sinon.stub(Model, 'findOne').resolves(allMotos[1]);

    const service = new MotoService();
    const result = await service.findById(allMotosResult[1].id);

    expect(result).to.be.deep.equal(allMotosResult[1]);
  });

  it('Should throw error when motorcycle is not found by some id', async function () {
    sinon.stub(Model, 'findOne').resolves(undefined);

    const service = new MotoService();
    const noResult = await service.findById('xxxxxxxxxxxxxxxxxxxxxxxx');

    expect(noResult).to.be.deep.equal(undefined);
  });

  it('Should update a motorcycle', async function () {
    sinon.stub(Model, 'updateOne').resolves();
    sinon.stub(Model, 'findOne').resolves(motoUpdated);

    const service = new MotoService();
    const result = await service.updateMoto(allMotosResult[1].id, motoUpdated);

    expect(result).to.be.deep.equal(motoUpdated);
  });

  it('Should delete a motorcycle', async function () {
    sinon.stub(Model, 'deleteOne').resolves();

    const deleted: Motorcycle = new Motorcycle(insertedMoto);
    sinon.stub(Model, 'findOne').resolves(deleted);

    const service = new MotoService();
    const result = await service.deleteMoto(allMotosResult[1].id);

    expect(result).to.be.deep.equal(undefined);
  });
});
