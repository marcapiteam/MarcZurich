module.exports = {
    default: {
      require: ['ts-node/register', 'steps/*.steps.ts'],
      'format': ['progress'],
      'publish-quiet': true,
    },
  };
  