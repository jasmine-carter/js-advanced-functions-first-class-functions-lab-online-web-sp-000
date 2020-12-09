// Code your solution in this file!

function returnFirstTwoDrivers() {
  const firstTwo = function(array){
    return array.slice(0,2)
  }
}

function returnLastTwoDrivers() {
  const lastTwo = function(array){
    return array.slice(Math.max(array.length - 2, 2))
  }
}
