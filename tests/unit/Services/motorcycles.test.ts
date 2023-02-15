import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotoService from '../../../src/Services/MotoService';
import insertedMoto from '../mocks/MotosMock';

describe('Tests on layer Service of Motorcycles', function () {
  it('Should register a car', async function () {
    const created: Motorcycle = new Motorcycle(insertedMoto);

    sinon.stub(Model, 'create').resolves(created);

    const motoService = new MotoService();
    const result = await motoService.create(insertedMoto);

    expect(result).to.be.deep.equal(created);
  });
});
