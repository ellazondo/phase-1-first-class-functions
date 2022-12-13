function receivesAFunction(waterFall) {
  waterFall();
}

function returnsANamedFunction() {
  return function anyName() {};
}

function returnsAnAnonymousFunction() {
  return function () {};
}
