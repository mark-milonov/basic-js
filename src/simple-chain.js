const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    if (!(position * 2) || position <= 0 || position > this.chain.length - 1) {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    const res = this.chain.map(elem => `( ${elem} )`).join('~~')
    this.chain = []
    return res
  }
};

module.exports = {
  chainMaker
};
