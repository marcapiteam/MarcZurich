module.exports = {
  default: {
    require: ['steps/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress', 'json:reports/cucumber_report.json'],
    publishQuiet: true
  }
};
