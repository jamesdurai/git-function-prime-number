function checkPrimeNumber(number) {
    if (number <= 1) {
        document.write("The number " + number + " is not a prime number.");
      return;
    }
  
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        document.write("The number " + number + " is not a prime number.");
        return;
      }
    }
  
    document.write("The number " + number + " is a prime number.");
  }
  
  var inputNumber = prompt("Enter a Number");
  
  checkPrimeNumber(inputNumber);