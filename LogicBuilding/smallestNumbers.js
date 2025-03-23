const smallestNumber = (a, b, c) => {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else if (c < a && c < b) {
    return c;
  }

  return a;
};

const smallestNumberofThree = (a, b, c) => {
  let smallestNum = a;
  if (b < smallestNum) {
    smallestNum = b;
  }
  if (c < smallestNum) {
    smallestNum = c;
  }

  return smallestNum;
};

smallestNumber(10, 4, 5);
smallestNumber(-1, -6, 9);
smallestNumber(3, 3, 3);
smallestNumberofThree(10, 4, 5);
smallestNumberofThree(-1, -6, 9);
smallestNumberofThree(3, 3, 3);

