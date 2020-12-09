// Code your solution in this file!
function returnLastTwoDrivers() {
  const lastTwo = function(array){
    return array.slice(Math.max(array.length - 2, 2))
  }
}
