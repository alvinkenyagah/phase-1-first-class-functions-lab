// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];



function returnFirstTwoDrivers(){

    const twoDrivers = drivers.slice(0, 2);

return twoDrivers;

}


function returnLastTwoDrivers(){

const lastTwo = drivers.slice(2)
return lastTwo;



}

// function selectingDrivers(drivers) {

//     function returnFirstTwoDrivers(drivers) {
//       return drivers.slice(0, 2);
//     }
  
  
//     return [returnFirstTwoDrivers, returnLastTwoDrivers];
//   }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


  function createFareMultiplier(multiplier) {

    function fareMultiplier(fare) {
      return fare * multiplier;
    }
  
    return fareMultiplier;
  }
  

  

function fareDoubler(fare) {
    return fare * 2;
  }


function fareTripler(fare){

return fare *3;

}

function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
  }
  
  function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(2);
  }
  
  
  
  function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
    return driverSelector(arrayOfDrivers);
  }
  



