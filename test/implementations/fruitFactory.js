'use strict';

const Factory = require('../../lib/factory');

/* eslint-disable global-require */

/**
 * @classdesc
 *   A factory class to get a fruit.
 *
 * @class FruitFactory
 */
class FruitFactory extends Factory {
  /**
   * Decide which fruit to instantiate based on the size and sugar.
   *
   * @param {object} context
   *   Contains the keys: 'size' and 'sugar'.
   *
   * @throws Error
   *   If no fruit could be found.
   *
   * @return {function}
   *   The fruit to instantiate.
   */
  static getClass(context) {
    if (typeof context.size === 'undefined' || typeof context.sugar === 'undefined') {
      throw new Error('Unable to find fruit.');
    }
    if (context.size >= 5) {
      // This is a big fruit.
      return context.sugar >= 5 ? require('./mango') : require('./pumpkin');
    }
    return context.sugar >= 5 ? require('./grape') : require('./almond');
  }
}

module.exports = FruitFactory;
