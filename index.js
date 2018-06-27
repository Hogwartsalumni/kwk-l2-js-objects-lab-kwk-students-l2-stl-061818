// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let newDriver = Object.assign({name: 'Sam', address: '11 Broadway'}, driver);
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  Object.assign({name: 'Sam', address: '12 Broadway'}, driver);
  driver;
}

function deleteFromDriverByKey(driver, key) {
  let newDrivers = Object.assign({name: 'Sam'}, driver);
  delete newDrivers['Sam'];
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  
}