'use strict';

const FruitFactory = require('./implementations/fruitFactory');
const Factory = require('../lib/factory');

module.exports = {
  unit: {
    create: {
      setUp(cb) {
        cb();
      },
      tearDown(cb) {
        cb();
      },
      create(test) {
        test.expect(5);
        let name = FruitFactory.create({ size: 10, sugar: 10 }, 'constructor argument').name();
        test.equal('Mango', name);
        name = FruitFactory.create({ size: 10, sugar: 0 }).name();
        test.equal('Pumpkin', name);
        name = FruitFactory.create({ size: 0, sugar: 10 }).name();
        test.equal('Grape', name);
        name = FruitFactory.create({ size: 0, sugar: 0 }).name();
        test.equal('Almond', name);
        test.throws(() => {
          FruitFactory.create({});
        }, Error);
        test.done();
      },
      missingImplementor(test) {
        test.expect(1);
        test.throws(() => {
          Factory.create({});
        }, Error);
        test.done();
      },
    },
  },
};
