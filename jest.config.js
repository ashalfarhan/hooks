/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: {
        noUnusedLocals: false,
        noUnusedParameters: false,
      },
    },
  },
};
