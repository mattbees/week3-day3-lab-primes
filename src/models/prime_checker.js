const PubSub = require('../helpers/pub_sub.js');

class PrimeChecker {

  catchAndCheckNumber(){
    PubSub.subscribe('FormView:number-submitted', () => {
      const inputNum = event.detail;
      const result = this.primeChecker(inputNum);
      PubSub.publish('PrimeChecker:number-checked', result);
    })
  }

// Why isn't this logging out??
  primeChecker(input) {
    let result = this.checkValidNum(input);
    if (result) {
      result = this.checkPrime(input);
    };
    if (result) {
      console.log('This is a prime number.');
    } else {
      return 'This is not a prime number.';
    }
  };

  checkValidNum(input) {
    if (input <= 1) false;
  };

  checkPrime(input) {
    let numbers = [];
    for (var i = 2; i < input; i++) {
      numbers.push(i);
    };
    return numbers.every((number) => {
      return input % number !== 0;
    });
  };

};

module.exports = PrimeChecker;
