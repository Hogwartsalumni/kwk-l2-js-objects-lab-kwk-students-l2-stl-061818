// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let newDriver = Object.assign({name: 'Sam', address: '11 Broadway'}, driver);
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  let address =
  driver.push({name: 'Sam', address: '12 Broadway'}, driver);
}

function deleteFromDriverByKey(driver, key) {
  let newDrivers = Object.assign({name: 'Sam'}, driver);
  delete newDrivers.name;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  
}