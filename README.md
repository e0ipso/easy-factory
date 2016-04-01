[![Build Status](https://travis-ci.org/e0ipso/easy-factory.svg?branch=master)](https://travis-ci.org/e0ipso/easy-factory)
[![Coverage Status](https://coveralls.io/repos/github/e0ipso/easy-factory/badge.svg?branch=master)](https://coveralls.io/github/e0ipso/easy-factory?branch=master)

This module will help you to have consistent implementations of the [abstract
factory pattern](https://en.wikipedia.org/wiki/Abstract_factory_pattern).

Extend the Factory base class in your own factory and implement the getClass
static method with your business logic.

## Example
This is the example in the tests.

```js
'use strict';

const Factory = require('easy-factory');

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
```

Use it:

```js
const fruit = FruitFactory.create({size: 10, sugar: 10}, 'constructor argument');
console.log(fruit.name());
// Outputs 'Mango'.
```
