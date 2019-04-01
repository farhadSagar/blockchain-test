import crypto from 'crypto';
// Hard coding the secret here to reduce complexity of installation..
// It will be in a secured .env file in prodcution app
const SECRET = 'abcdefg';
const COMPANY = 'A Very Big Company'

class Block {
    constructor(index, timestamp, qrString, company, prevHash) {
    this.index = index || 0;
    this.timestamp = Date.now();
    this.qrString = qrString || crypto.randomBytes(8).toString('hex');
    this.company = company || COMPANY;
    this.prevHash = prevHash || 0;
    this.thisHash = crypto.createHmac('sha256', SECRET)
      .update(JSON.stringify(this.index + this.timestamp + this.qrString + this.prevHash))
      .digest('hex');
  }
}
  
  // This will add a new bolck to the chain
const addBlock = (lastBlock, qrString) =>
  new Block(lastBlock.index + 1, Date.now(), qrString, COMPANY, lastBlock.thisHash);

const createBlockchain = num => {
  let previousBlock = new Block(); // Initial block with default values
  const blockchain = [previousBlock];

  for (let i = 0; i < num; i += 1) {
    const blockToAdd = addBlock(previousBlock, crypto.randomBytes(8).toString('hex'));
    blockchain.push(blockToAdd);
    previousBlock = blockToAdd;
  }
  return blockchain;
};

export {
  createBlockchain
};
