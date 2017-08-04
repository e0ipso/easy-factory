'use strict';

/**
 * Factory class that returns a reformatter instance based on some context.
 *
 * @class Factory
 */
class Factory {
  /**
   * Instantiate the object.
   *
   * Any additional arguments are passed to the object constructor.
   *
   * @param {*} context
   *   The information we base on to decide which object to return.
   *
   * @return {*}
   *   The instantiated object.
   */
  static create(context) {
    // Pass any extra arguments to the constructors.
    const constructorArgs = Array.prototype.slice.call(arguments); // eslint-disable-line prefer-rest-params
    constructorArgs.shift();
    // Defer the actual class name to the final implementations.
    const Implementor = this.getClass(context);
    // This is the ES5 friendly version of new Implementor(...constructorArgs)
    return new (Function.prototype.bind.apply(Implementor, [null].concat(constructorArgs))); // eslint-disable-line new-parens
  }

  /**
   * Decide which class to instantiate based on the context.
   *
   * @param {*} context
   *   The information we base on to decide which object to return.
   *
   * @throws Error
   *   If no class could be found.
   *
   * @return {function}
   *   The class to instantiate.
   */
  static getClass(context) {
    throw new Error(`This method should be implemented in the factory subclasses. Context: ${context}`);
  }
}

module.exports = Factory;
