// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

function returnLastTwoDrivers() {
  const lastTwo = function(array){
    return array.slice(Math.max(array.length - 2, 2))
  }
}
