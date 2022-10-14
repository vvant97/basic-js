const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value === 'undefined') {
      value = ' ';
    } else {
      value = String(value);
    }

    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position % 1 !== 0 || 
      typeof position !== 'number' ||
      (position < 1 || position > this.getLength() - 1)) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = [...this.chain];
    this.chain = [];
    return result.join('~~');
  }
};

module.exports = {
  chainMaker
};
