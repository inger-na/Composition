'use strict';

const pipe = (...args) => {
  for (const fn of args) {
    if (typeof fn !== 'function') throw new Error(`${fn} is not a function`);
  }
  return x => args.reduce((val, fn) => fn(val), x);
};

module.exports = { pipe };
