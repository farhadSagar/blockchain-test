import { expect } from 'chai';
import { createBlockchain } from '../src/block';

describe('Test Block', () => {
  it('Should return a blockchain of length 2', () => {
      const result = createBlockchain(1);
      expect(result).to.be.instanceof(Object);
      expect(result).to.be.an('array').that.is.not.empty;
      expect(result.length).to.be.equal(2);
  });

  it('Should return a blockchain of length 10', () => {
    const result = createBlockchain(9);
    expect(result).to.be.instanceof(Object);
    expect(result).to.be.an('array').that.is.not.empty;
    expect(result.length).to.be.equal(10);
  });

  it('Should have preivious hash in each block', () => {
    const result = createBlockchain(1);
    expect(result).to.be.instanceof(Object);
    expect(result).to.be.an('array').that.is.not.empty;
    const prevValue = result[1].prevHash;
    expect(result[0].thisHash).to.be.equal(prevValue);
  });

  it('Should return a blockchain with all the fields', () => {
    const result = createBlockchain(3);
    expect(result).to.be.instanceof(Object);
    expect(result).to.be.an('array').that.is.not.empty;
    expect(result[0].index).to.be.equal(0);
    expect(result[0]).to.have.property('index').that.is.a('number');
    expect(result[0].company).to.be.equal('A Very Big Company');
    expect(result[0]).to.have.property('thisHash').that.is.a('string');
    expect(result[1]).to.have.property('prevHash').that.is.a('string');
  });

});
