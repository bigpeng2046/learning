module.exports = function(karma){
  karma.set({

    // the angular framework needs to go before mocha / jasmine
    frameworks: ['angular', 'mocha'],

    files: [
      "js/math.js",
      "test/math-test.js"
    ],

    browsers: ['IE'],

    singleRun: true,
    autoWatch: false
  });
};
