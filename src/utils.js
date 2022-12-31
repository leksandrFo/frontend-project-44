const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const generateRandomIndex = (array) => Math.floor(Math.random() * array.length);

const isEven = (num) => num % 2 === 0;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  generateRandomNumber,
  generateRandomIndex,
  isEven,
  isPrime,
};
