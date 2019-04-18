const PubSub = require('../helpers/pub_sub.js');

class ResultView {

  catchAndDisplayResult() {
    PubSub.subscribe('PrimeChecker:number-checked', (event) => {
      const checkedResult = event.detail;
      document.querySelector('#result').textContent = checkedResult;
    });
  };

};


module.exports = ResultView;
