// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let newDriver = Object.assign({name: 'Sam', address: '11 Broadway'}, driver);
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  let mutateDriver = Object.assign({name: 'Sam', address: '12 Broadway'});
}

function deleteFromDriverByKey(driver, key) {
  let newDrivers = Object.assing({}, driver);
  delete newDrivers.key;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  
}